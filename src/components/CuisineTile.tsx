// cuisine tile in the search grid
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface CuisineTileProps {
  name: string;
  color: string;
  rank: number;
}

function CuisineTile({ name, color, rank }: CuisineTileProps) {
  return (
    <View style={[styles.tile, { backgroundColor: color }]}>
      <Text style={styles.name}>{name}</Text>

      {/* big faded number in the corner like the real app */}
      <Text style={styles.rank}>{rank}</Text>

      <View style={styles.iconWrap}>
        <Ionicons name="restaurant" size={36} color={Colors.textMuted} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: "31.5%",
    height: 120,
    borderRadius: 16,
    padding: 10,
    overflow: "hidden",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.text,
  },
  rank: {
    position: "absolute",
    right: 4,
    bottom: -18,
    fontSize: 96,
    fontWeight: "800",
    color: Colors.watermark,
  },
  iconWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 14,
    alignItems: "center",
  },
});

export default CuisineTile;
