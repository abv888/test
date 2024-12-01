import { Link, RelativePathString } from "expo-router";
import { SectionList, StyleSheet, Text, View } from "react-native";

const sections = [
  {
    title: "Profile",
    data: [
      { title: "Configuration", link: "/options/checklists" },
      { title: "Logout", link: "/options/checklists" },
    ],
  },
  {
    title: "Corporation",
    data: [
      { title: "Checklists", link: "/options/checklists" },
      { title: "Members", link: "" },
      { title: "Positions", link: "" },
    ],
  },
];

export default function Options() {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text>{title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Link href={item.link as RelativePathString}>
            <Text>{item.title}</Text>
          </Link>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ccc",
    fontWeight: 600,
    paddingLeft: 8,
  },
  item: {
    margin: 6,
    paddingLeft: 16,
  },
});
