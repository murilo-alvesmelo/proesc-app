import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: () => void;
  logOut: () => void;
};

const authStorageKey = "authState";

const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storageAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      await AsyncStorage.setItem(authStorageKey, JSON.stringify(newState));
    } catch (error) {
      console.error("Failed to save auth state:", error);
    }
  };

  const logIn = () => {
    setIsLoggedIn(true);
    storageAuthState({ isLoggedIn: true });
    router.replace("/(protected)/home");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    storageAuthState({ isLoggedIn: false });
    router.replace("/(public)/login");
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(authStorageKey);
        if (value !== null) {
          const auth = JSON.parse(value);
          setIsLoggedIn(auth.isLoggedIn);
        }
      } catch (error) {
        console.error("Failed to load auth state:", error);
      }
      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ isReady, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
