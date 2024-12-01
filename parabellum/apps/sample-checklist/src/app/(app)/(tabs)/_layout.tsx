import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="dashboard">
      <Tabs.Screen name="dashboard" options={{ title: "Home" }} />
      <Tabs.Screen name="tasks" options={{ title: "Tasks" }} />
      <Tabs.Screen name="options" options={{ title: "Options" }} />
    </Tabs>
  );
}
