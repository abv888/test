import { Stack } from "expo-router";

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]/step/[step]"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};
