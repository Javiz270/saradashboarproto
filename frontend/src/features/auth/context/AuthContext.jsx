import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useGoogleAuth } from '../../../apis/googleAuth';
import { coreApiClient } from '../../../apis/coreApi/coreApi.client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data, loading: authLoading, error, login, loginWithEmail, signupWithEmail, logout } = useGoogleAuth();
  
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [needsProfileCompletion, setNeedsProfileCompletion] = useState(false);

  function normalizeProfile(rawProfile, fallbackUser) {
    const profileData = rawProfile ?? {};
    return {
      id: profileData.id ?? fallbackUser?.id ?? null,
      first_name: profileData.first_name ?? fallbackUser?.name?.split(' ')[0] ?? '',
      last_name_paternal: profileData.last_name_paternal ?? '',
      last_name_maternal: profileData.last_name_maternal ?? '',
      career: profileData.career ?? '',
      grade: profileData.grade ?? '',
      group: profileData.group ?? '',
      student_id: profileData.student_id ?? '',
      email: profileData.email ?? fallbackUser?.email ?? '',
      avatar_url: profileData.avatar_url ?? fallbackUser?.avatarUrl ?? null,
      role: profileData.role ?? 'student',
      status: profileData.status ?? 'active',
    };
  }

  function profileNeedsCompletion(profileData) {
    return !profileData.first_name
      || !profileData.last_name_paternal
      || !profileData.career
      || !profileData.grade
      || !profileData.group
      || !profileData.student_id;
  }

  // Fetch true profile from FastAPI when session is established
  useEffect(() => {
    let mounted = true;
    
    async function fetchProfile() {
      if (!data.session?.access_token) {
        setProfile(null);
        setNeedsProfileCompletion(false);
        return;
      }
      
      setProfileLoading(true);
      try {
        const response = await coreApiClient.get('/profiles/me');
        if (mounted) {
          const normalizedProfile = normalizeProfile(response.data, data.user);
          setProfile(normalizedProfile);
          setNeedsProfileCompletion(profileNeedsCompletion(normalizedProfile));
        }
      } catch (err) {
        console.error("Error fetching profile from API", err);
        if (mounted) {
          const fallbackProfile = normalizeProfile(null, data.user);
          setProfile(fallbackProfile);
          setNeedsProfileCompletion(true);
        }
      } finally {
        if (mounted) setProfileLoading(false);
      }
    }
    
    fetchProfile();
    
    return () => { mounted = false; };
  }, [data.session]);

  const value = useMemo(
    () => ({
      // Auth data from Supabase
      user: data.user,
      session: data.session,
      // True profile from our DB
      profile,
      needsProfileCompletion,
      role: profile?.role ?? 'student',
      isStaff: profile?.role === 'staff' || profile?.role === 'admin',
      isAdmin: profile?.role === 'admin',
      
      isLoading: authLoading || profileLoading,
      error,
      
      // Actions
      loginWithGoogle: login,
      loginWithEmail,
      signupWithEmail,
      logout,
      
      // Allow components to trigger a profile refresh
      refreshProfile: async () => {
        try {
          const res = await coreApiClient.get('/profiles/me');
          const refreshedProfile = normalizeProfile(res.data, data.user);
          setProfile(refreshedProfile);
          setNeedsProfileCompletion(profileNeedsCompletion(refreshedProfile));
        } catch (e) {
          console.error(e);
        }
      },

      updateProfile: async (payload) => {
        const res = await coreApiClient.put('/profiles/me', payload);
        const updatedProfile = normalizeProfile(res.data, data.user);
        setProfile(updatedProfile);
        setNeedsProfileCompletion(profileNeedsCompletion(updatedProfile));
        return updatedProfile;
      }
    }),
    [data.user, data.session, profile, needsProfileCompletion, authLoading, profileLoading, error, login, loginWithEmail, signupWithEmail, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext debe usarse dentro de AuthProvider');
  }
  return context;
}
