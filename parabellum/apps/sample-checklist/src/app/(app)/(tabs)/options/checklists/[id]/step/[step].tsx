import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Switch, Text, TextInput, View } from "react-native";
import { checklists } from "@/mocks";

export default () => {
  const { id, step } = useLocalSearchParams<{ id: string; step: string }>();
  const [checklist, setChecklist] = useState(
    checklists.find((item) => item.id === Number(id))
  );
  const [item, setItem] = useState(
    checklist?.steps.find((item) => item.id === Number(step))
  );

  return (
    <View>
      <TextInput value={item?.name} />
      <TextInput value={item?.description} />
  
    </View>
  );
};
