import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  matricula: string | null;
  password: string | null;
  logIn: (matricula: string, password: string) => void;
  logOut: () => void;
};

SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  matricula: null,
  password: null,
  logIn: () => {},
  logOut: () => {},
});

const AUTH_STATE_KEY = "authState";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [matricula, setMatricula] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  async function storeAuthState(state: {
    isLoggedIn: boolean;
    matricula: string | null;
    password: string | null;
  }) {
    try {
      await AsyncStorage.setItem(AUTH_STATE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }

  function logIn(matricula: string, password: string) {
    setIsLoggedIn(true);
    setMatricula(matricula);
    setPassword(password);
    storeAuthState({ isLoggedIn: true, matricula, password });
    router.replace("/(protected)/(tabs)");
  }

  function logOut() {
    setIsLoggedIn(false);
    setMatricula(null);
    setPassword(null);
    storeAuthState({ isLoggedIn: false, matricula: null, password: null });
    router.replace("/(public)/login");
  }

  useEffect(() => {
    async function loadAuthState() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const stored = await AsyncStorage.getItem(AUTH_STATE_KEY);
        if (stored) {
          const { isLoggedIn, matricula, password } = JSON.parse(stored);
          setIsLoggedIn(isLoggedIn);
          setMatricula(matricula);
          setPassword(password);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    }
    loadAuthState();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isReady, matricula, password, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
