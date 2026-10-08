// offer card used in the my skip offers list
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface OfferCardProps {
  title: string;
  description: string;
  endsIn: string;
  onPress?: () => void;
}

function OfferCard({ title, description, endsIn, onPress }: OfferCardProps) {
  return (
    <View style={styles.card}>
      {/* peach strip on the left edge */}
      <View style={styles.accent} />

      <View style={styles.top}>
        <View style={styles.iconCircle}>
          <Ionicons name="gift" size={28} color={Colors.primary} />
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottom}>
        <View style={styles.endsRow}>
          <Ionicons name="time-outline" size={18} color={Colors.danger} />
          <Text style={styles.endsText}>{endsIn}</Text>
        </View>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.orderButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.orderText}>Order Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    paddingLeft: 28,
    gap: 16,
    // ios shadow
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // android shadow
    elevation: 3,
  },
  accent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: Colors.peach,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  top: {
    flexDirection: "row",
    gap: 16,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.peach,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrap: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.text,
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  endsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  endsText: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.danger,
  },
  orderButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  pressed: {
    opacity: 0.6,
  },
  orderText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
});

export default OfferCard;
