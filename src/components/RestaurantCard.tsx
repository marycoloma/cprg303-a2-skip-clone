// restaurant card used on home screen
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface RestaurantCardProps {
  name: string;
  initials: string;
  logoColor: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  offer?: string;
  onPress?: () => void;
}

function RestaurantCard({
  name,
  initials,
  logoColor,
  rating,
  deliveryTime,
  deliveryFee,
  offer,
  onPress,
}: RestaurantCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* placeholder color instead of a food photo */}
      <View style={[styles.imageArea, { backgroundColor: logoColor }]}>
        <Ionicons name="fast-food" size={72} color={Colors.overlay} />

        {offer && (
          <View style={styles.offerBadge}>
            <Ionicons name="pricetag" size={14} color={Colors.text} />
            <Text style={styles.offerText}>{offer}</Text>
          </View>
        )}

        <View style={styles.heartButton}>
          <Ionicons name="heart-outline" size={22} color={Colors.text} />
        </View>

        {/* logo overlaps the bottom of the image so it's absolute */}
        <View style={[styles.logo, { backgroundColor: logoColor }]}>
          <Text style={styles.logoText}>{initials}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={Colors.primary} />
          <Text style={styles.meta}>{rating}</Text>
          <View style={styles.dot} />
          <Text style={styles.meta}>{deliveryTime}</Text>
          <View style={styles.dot} />
          <Text style={styles.meta}>
            ${deliveryFee.toFixed(2)} Delivery Fee
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    marginHorizontal: 16,
    // ios shadow
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // android shadow
    elevation: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  imageArea: {
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  offerBadge: {
    position: "absolute",
    top: 16,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.offerBg,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
  },
  offerText: {
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "italic",
    color: Colors.text,
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    left: 16,
    bottom: -28,
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: Colors.card,
    fontSize: 20,
    fontWeight: "800",
  },
  info: {
    paddingTop: 36,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  meta: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.textMuted,
  },
});

export default RestaurantCard;
