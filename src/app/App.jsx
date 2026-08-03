import AppProviders from './AppProviders.jsx';
import AppRouter from './AppRouter.jsx';

export default function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
