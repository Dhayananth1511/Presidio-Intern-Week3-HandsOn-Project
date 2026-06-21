import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const themeContext = useContext(ThemeContext);
  const { user, login, logout } = useAuth();

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <nav aria-label="Main Navigation">
      <div className="nav-links">
        <Link to="/" className="nav-link" aria-label="Go to Home Page">Home</Link>
        <Link to="/tasks" className="nav-link" aria-label="Manage your tasks">Tasks</Link>
        <Link to="/settings" className="nav-link" aria-label="App Settings">Settings</Link>
      </div>
      
      <div className="nav-auth-theme" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Concept: User Session Display */}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>Hi, <strong>{user}</strong></span>
            <button 
              onClick={logout} 
              aria-label="Logout"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', backgroundColor: '#64748b' }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={() => login("Dhayananth")} 
            aria-label="Sign in as dummy user"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}
          >
            Sign In
          </button>
        )}

        <button 
          onClick={toggleTheme} 
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
          style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '0.8rem'
          }}
        >
          <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
          <span className="sr-only">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
