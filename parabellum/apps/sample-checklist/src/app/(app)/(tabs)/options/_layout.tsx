import { Stack } from "expo-router";

export default function OptionsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="checklists" options={{ headerShown: false }} />
    </Stack>
  );
}
