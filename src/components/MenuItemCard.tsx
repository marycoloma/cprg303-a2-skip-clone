// menu item card used on the restaurant screen
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  lastOrdered?: string;
}

function MenuItemCard({
  name,
  description,
  price,
  lastOrdered,
}: MenuItemCardProps) {
  const [added, setAdded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.textWrap}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        {lastOrdered && (
          <Text style={styles.lastOrdered}>Last ordered {lastOrdered}</Text>
        )}
      </View>

      {/* add button turns into a checkmark when pressed */}
      <Pressable
        style={[styles.addButton, added && styles.addButtonActive]}
        onPress={() => setAdded(!added)}
      >
        <Ionicons
          name={added ? "checkmark" : "add"}
          size={28}
          color={added ? Colors.card : Colors.primary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    // ios shadow
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // android shadow
    elevation: 3,
  },
  textWrap: {
    flex: 1,
    gap: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.text,
  },
  description: {
    fontSize: 15,
    color: Colors.textMuted,
  },
  price: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 6,
  },
  lastOrdered: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
});

export default MenuItemCard;
