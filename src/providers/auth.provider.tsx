import React, { createContext, useState, useEffect, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const sessionId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sessionId="));
    if (sessionId) {
      setIsAuthenticated(true);
    }
  }, []);
  const login = (token: string) => {
    document.cookie = `sessionId=${token}; path=/`;
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = "sessionId=; Max-Age=0; path=/";
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
