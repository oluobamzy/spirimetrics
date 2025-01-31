import React, { createContext, useState, useEffect, useContext } from "react";

// Define User Interface
interface User {
  email: string;
  first_name?: string;
  last_name?: string;
}

// Define Auth Context Interface
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom Hook for Auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Loading state to prevent flickering

  // Fetch user data when the app loads
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/profile/id", { credentials: "include" });
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
    } else {
      throw new Error(data.error || "Login failed");
    }
  };

  // Logout function
  const logout = async () => {
    await fetch("http://localhost:3000/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children} {/* Prevents flickering */}
    </AuthContext.Provider>
  );
};
