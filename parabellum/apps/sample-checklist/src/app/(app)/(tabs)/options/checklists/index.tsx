import { checklists } from "@/mocks";
import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

export default () => {
  return (
    <FlatList
      data={checklists}
      renderItem={({ item: { id, title } }) => (
        <View>
          <Link
            href={{
              pathname: "/options/checklists/[id]",
              params: { id },
            }}
          >
            {title}
          </Link>
        </View>
      )}
    />
  );
};
