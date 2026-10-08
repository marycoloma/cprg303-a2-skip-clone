// restaurant logo and name, used in the search screen row
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface RestaurantLogoProps {
  name: string;
  initials: string;
  logoColor: string;
  onPress?: () => void;
}

function RestaurantLogo({
  name,
  initials,
  logoColor,
  onPress,
}: RestaurantLogoProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={[styles.logo, { backgroundColor: logoColor }]}>
        <Text style={styles.initials}>{initials}</Text>
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 84,
    alignItems: "center",
    gap: 8,
  },
  pressed: {
    opacity: 0.6,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: Colors.card,
    fontSize: 22,
    fontWeight: "800",
  },
  name: {
    fontSize: 14,
    color: Colors.textMuted,
  },
});

export default RestaurantLogo;
