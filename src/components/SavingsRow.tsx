// one row in the savings breakdown, used on the savings screen
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { IconName } from "../data/mockData";
import SkipCoin from "./SkipCoin";

interface SavingsRowProps {
  label: string;
  amount: number;
  icon: IconName;
  points?: number;
}

function SavingsRow({ label, amount, icon, points }: SavingsRowProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={28} color={Colors.primary} />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.label}>{label}</Text>
        {points !== undefined && (
          <View style={styles.pointsRow}>
            <Text style={styles.points}>{points.toLocaleString()}</Text>
            <SkipCoin size={20} />
            <Text style={styles.points}>Pts</Text>
          </View>
        )}
      </View>

      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
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
    gap: 4,
  },
  label: {
    fontSize: 17,
    color: Colors.text,
  },
  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  points: {
    fontSize: 15,
    color: Colors.textMuted,
  },
  amount: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.text,
  },
});

export default SavingsRow;
