import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  loading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // --- Step 4.1: Initial Verify ---
  // When the app starts, we ask the server: "Do you know who I am?"
  // The server looks at the browser's cookies to decide.
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (err) {
        console.error("Auth check failed", err);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  // --- Step 4.2: Real Login ---
  const login = async (email: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
      throw err;
    }
  };

  // --- Step 4.3: Real Logout ---
  const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
