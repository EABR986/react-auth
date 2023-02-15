import './App.css';

import { Route, Routes } from 'react-router-dom';

import { HomeLayout } from './components/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
import { ForgetPasswordPage } from './pages/ForgetPasswordPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { PicturesPage } from './pages/PicturesPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="pictures" element={<PicturesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
