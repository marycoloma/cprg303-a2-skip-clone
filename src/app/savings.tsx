import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/IconButton";
import SavingsRow from "../components/SavingsRow";
import SkipCoin from "../components/SkipCoin";
import { Colors } from "../constants/Colors";
import {
  POINTS,
  POINTS_VALUE,
  SAVED_LAST_30_DAYS,
  SAVINGS_BREAKDOWN,
  TOTAL_SAVED,
} from "../data/mockData";

type Range = "joined" | "month";

export default function SavingsScreen() {
  const router = useRouter();
  const [range, setRange] = useState<Range>("joined");

  const total = range === "joined" ? TOTAL_SAVED : SAVED_LAST_30_DAYS;
  const subtitle =
    range === "joined" ? "Since Feb 27, 2026" : "In the last 30 days";

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* peach header (solid color instead of the gradient) */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <IconButton
            icon="arrow-back"
            backgroundColor={Colors.overlay}
            onPress={() => router.back()}
          />
          <Text style={styles.title}>Your Savings</Text>
          {/* empty box so the title stays centered */}
          <View style={styles.spacer} />
        </View>
        <RangeToggle value={range} onChange={setRange} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* total savings card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryText}>
            <View style={styles.totalRow}>
              <Text style={styles.total}>${total.toFixed(2)}</Text>
              <Ionicons
                name="information-circle-outline"
                size={30}
                color={Colors.text}
              />
            </View>
            <Text style={styles.summarySub}>Saved with Skip+ and offers</Text>
            <Text style={styles.summarySub}>{subtitle}</Text>
          </View>

          {/* two gold circles as the coin picture */}
          <View style={styles.coins}>
            <View style={styles.coinBig} />
            <View style={styles.coinSmall} />
          </View>
        </View>

        {/* breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Savings breakdown</Text>
          {SAVINGS_BREAKDOWN.map((item) => (
            <SavingsRow
              key={item.id}
              label={item.label}
              amount={item.amount}
              icon={item.icon}
              points={item.points}
            />
          ))}
        </View>

        {/* points */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skip Points collected</Text>
          <SavingsRow
            label="Points Collected"
            amount={POINTS_VALUE}
            icon="star"
            points={POINTS}
          />
        </View>

        <View style={styles.footerNote}>
          <SkipCoin size={20} />
          <Text style={styles.footerText}>
            Points are worth $1 for every 1,000 Pts
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// since joining / last 30 days switch, only used here so it stays in this file
interface RangeToggleProps {
  value: Range;
  onChange: (value: Range) => void;
}

function RangeToggle({ value, onChange }: RangeToggleProps) {
  return (
    <View style={styles.toggle}>
      <Pressable
        style={[styles.toggleOption, value === "joined" && styles.toggleActive]}
        onPress={() => onChange("joined")}
      >
        <Text
          style={[
            styles.toggleText,
            value === "joined" && styles.toggleTextActive,
          ]}
        >
          Since joining
        </Text>
      </Pressable>
      <Pressable
        style={[styles.toggleOption, value === "month" && styles.toggleActive]}
        onPress={() => onChange("month")}
      >
        <Text
          style={[
            styles.toggleText,
            value === "month" && styles.toggleTextActive,
          ]}
        >
          Last 30 days
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.peach,
  },
  header: {
    backgroundColor: Colors.peach,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    gap: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "800",
    color: Colors.text,
  },
  spacer: {
    width: 48,
  },
  toggle: {
    flexDirection: "row",
    backgroundColor: Colors.inputBg,
    borderRadius: 999,
    padding: 4,
  },
  toggleOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 999,
  },
  toggleActive: {
    backgroundColor: Colors.card,
  },
  toggleText: {
    fontSize: 16,
    color: Colors.textMuted,
  },
  toggleTextActive: {
    fontWeight: "700",
    color: Colors.text,
  },
  scroll: {
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
    gap: 28,
  },
  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    gap: 12,
  },
  summaryText: {
    flex: 1,
    gap: 4,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  total: {
    fontSize: 36,
    fontWeight: "900",
    color: Colors.text,
  },
  summarySub: {
    fontSize: 16,
    color: Colors.text,
  },
  coins: {
    width: 80,
    height: 80,
  },
  coinBig: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.accent,
    borderWidth: 4,
    borderColor: Colors.offerBg,
  },
  coinSmall: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.accent,
    borderWidth: 3,
    borderColor: Colors.offerBg,
  },
  section: {
    gap: 14,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.text,
  },
  footerNote: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    color: Colors.textMuted,
  },
});
