// delivery address with dropdown arrow, used on home and search
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

interface AddressRowProps {
  address: string;
}

function AddressRow({ address }: AddressRowProps) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {address}
      </Text>
      <Ionicons name="chevron-down" size={20} color={Colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    flexShrink: 1,
    fontSize: 22,
    fontWeight: "800",
    color: Colors.text,
  },
});

export default AddressRow;
