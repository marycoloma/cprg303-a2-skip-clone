// delivery / pickup toggle, used on home and search
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

function DeliveryToggle() {
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const isDelivery = mode === "delivery";

  return (
    <View style={styles.toggle}>
      <Pressable
        style={[styles.option, isDelivery && styles.active]}
        onPress={() => setMode("delivery")}
      >
        <Ionicons
          name="car-outline"
          size={20}
          color={isDelivery ? Colors.primary : Colors.textMuted}
        />
        {isDelivery && <Text style={styles.text}>Delivery</Text>}
      </Pressable>

      <Pressable
        style={[styles.option, !isDelivery && styles.active]}
        onPress={() => setMode("pickup")}
      >
        <Ionicons
          name="bag-handle-outline"
          size={20}
          color={!isDelivery ? Colors.primary : Colors.textMuted}
        />
        {!isDelivery && <Text style={styles.text}>Pickup</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputBg,
    borderRadius: 999,
    padding: 4,
    gap: 4,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  active: {
    backgroundColor: Colors.card,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
});

export default DeliveryToggle;
