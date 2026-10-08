// order card used in the orders tab list
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import IconButton from "./IconButton";

interface OrderCardProps {
  restaurantName: string;
  initials: string;
  logoColor: string;
  date: string;
  orderNumber: string;
  status: string;
  total: number;
  onReorder?: () => void;
}

function OrderCard({
  restaurantName,
  initials,
  logoColor,
  date,
  orderNumber,
  status,
  total,
  onReorder,
}: OrderCardProps) {
  const isComplete = status === "Complete";

  return (
    <View style={styles.card}>
      {/* restaurant info */}
      <View style={styles.top}>
        <View style={[styles.logo, { backgroundColor: logoColor }]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {restaurantName}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>{date}</Text>
            <Text style={styles.meta}>{orderNumber}</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" size={22} color={Colors.text} />
      </View>

      <View style={styles.divider} />

      {/* status, total and buttons */}
      <View style={styles.bottom}>
        <View style={styles.statusRow}>
          <View style={[styles.badge, !isComplete && styles.badgeOther]}>
            <Text
              style={[styles.badgeText, !isComplete && styles.badgeTextOther]}
            >
              {status}
            </Text>
          </View>
          <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            onPress={onReorder}
            style={({ pressed }) => [
              styles.reorderButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.reorderText}>Reorder</Text>
          </Pressable>
          <IconButton icon="receipt-outline" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    // ios shadow
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // android shadow
    elevation: 3,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: Colors.card,
    fontSize: 18,
    fontWeight: "800",
  },
  info: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.text,
  },
  metaRow: {
    flexDirection: "row",
    gap: 12,
  },
  meta: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  bottom: {
    padding: 16,
    gap: 16,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    backgroundColor: Colors.successBg,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  badgeOther: {
    backgroundColor: Colors.inputBg,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.successText,
  },
  badgeTextOther: {
    color: Colors.textMuted,
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  reorderButton: {
    flex: 1,
    height: 52,
    borderRadius: 999,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  reorderText: {
    color: Colors.card,
    fontSize: 20,
    fontWeight: "800",
  },
});

export default OrderCard;
