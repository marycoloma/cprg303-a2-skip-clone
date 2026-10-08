// category in the top row of home
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { IconName } from "../data/mockData";

interface CategoryItemProps {
  name: string;
  icon: IconName;
}

function CategoryItem({ name, icon }: CategoryItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={32} color={Colors.primary} />
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
    gap: 8,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.peach,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: Colors.textMuted,
  },
});

export default CategoryItem;
