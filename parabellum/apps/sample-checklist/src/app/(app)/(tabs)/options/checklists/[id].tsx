import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { checklists } from "@/mocks";

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [checklist, setChecklist] = useState(
    checklists.find((item) => item.id === Number(id))
  );

  return (
    <View>
      <FlatList
        data={checklist?.steps}
        renderItem={({ item }) => (
          <View>
            <Link
              href={{
                pathname: `/(app)/(tabs)/options/checklists/[id]/step/[step]`,
                params: { id, step: item.id.toString() },
              }}
            >
              {item.name}
            </Link>
          </View>
        )}
      />
    </View>
  );
};
