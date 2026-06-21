import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tasks" className="nav-link">Tasks</Link>
      <Link to="/settings" className="nav-link">Settings</Link>
      
      <button 
        onClick={toggleTheme} 
        style={{ 
          padding: '0.5rem 1rem', 
          fontSize: '0.8rem',
          marginLeft: 'auto' 
        }}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default Navbar;
