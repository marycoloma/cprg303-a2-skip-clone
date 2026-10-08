import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../../components/IconButton";
import OrderCard from "../../components/OrderCard";
import SearchBar from "../../components/SearchBar";
import { Colors } from "../../constants/Colors";
import { IconName, ORDERS } from "../../data/mockData";

export default function OrdersScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "grocery">("all");

  // no grocery orders in the mock data, so that filter shows the empty message
  const search = query.toLowerCase();
  const visibleOrders =
    filter === "all"
      ? ORDERS.filter((order) =>
          order.restaurantName.toLowerCase().includes(search),
        )
      : [];

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Your Orders</Text>
          <IconButton icon="person-circle-outline" />
        </View>

        <View style={styles.chips}>
          <FilterChip
            label="All orders"
            active={filter === "all"}
            onPress={() => setFilter("all")}
          />
          <FilterChip
            label="Grocery orders"
            icon="leaf"
            active={filter === "grocery"}
            onPress={() => setFilter("grocery")}
          />
        </View>

        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search Orders"
        />
      </View>

      <Text style={styles.sectionTitle}>Order History</Text>

      {visibleOrders.length === 0 ? (
        <Text style={styles.emptyText}>No orders found</Text>
      ) : (
        <FlatList
          data={visibleOrders}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OrderCard
              restaurantName={item.restaurantName}
              initials={item.initials}
              logoColor={item.logoColor}
              date={item.date}
              orderNumber={item.orderNumber}
              status={item.status}
              total={item.total}
              onReorder={() => router.push("/restaurant")}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

// filter chip, only used on this screen so it stays in this file
interface FilterChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
  icon?: IconName;
}

function FilterChip({ label, active, onPress, icon }: FilterChipProps) {
  return (
    <Pressable
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={18}
          color={active ? Colors.card : Colors.successText}
        />
      )}
      <Text style={[styles.chipText, active && styles.chipTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.text,
  },
  chips: {
    flexDirection: "row",
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.card,
  },
  chipActive: {
    backgroundColor: Colors.text,
    borderColor: Colors.text,
  },
  chipText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
  chipTextActive: {
    color: Colors.card,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.text,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  list: {
    padding: 16,
    gap: 16,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.textMuted,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});
