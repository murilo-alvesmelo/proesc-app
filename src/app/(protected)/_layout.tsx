import { useAuth } from "@/src/context/Auth";
import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";

export default function ProtectedLayout() {
  const { isLoggedIn, isReady } = useAuth();

  if (!isReady) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "transparentModal",
          contentStyle: {
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          },
          headerShown: false,
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
