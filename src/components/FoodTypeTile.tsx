// colored food tile on home (burgers, pizza etc)
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { IconName } from "../data/mockData";

interface FoodTypeTileProps {
  name: string;
  icon: IconName;
  color: string;
}

function FoodTypeTile({ name, icon, color }: FoodTypeTileProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.tile, { backgroundColor: color }]}>
        <Ionicons name={icon} size={40} color={Colors.card} />
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 96,
    alignItems: "center",
    gap: 8,
  },
  tile: {
    width: 96,
    height: 72,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: Colors.textMuted,
  },
});

export default FoodTypeTile;
