import { useUiAvatar } from '../../apis/uiAvatars';

export default function UserCard({ name, email, compact = false }) {
  const { data: avatarUrl } = useUiAvatar(name);

  if (compact) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className="user-avatar user-avatar--sm"
        width={32}
        height={32}
      />
    );
  }

  return (
    <div className="user-card">
      <img
        src={avatarUrl}
        alt={name}
        className="user-avatar"
        width={48}
        height={48}
      />
      <div className="user-card__info">
        <span className="user-card__name">{name}</span>
        {email && <span className="user-card__email">{email}</span>}
      </div>
    </div>
  );
}
