import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressRow from "../../components/AddressRow";
import CuisineTile from "../../components/CuisineTile";
import DeliveryToggle from "../../components/DeliveryToggle";
import IconButton from "../../components/IconButton";
import RestaurantLogo from "../../components/RestaurantLogo";
import SearchBar from "../../components/SearchBar";
import { Colors } from "../../constants/Colors";
import {
  CUISINES,
  DELIVERY_ADDRESS,
  RECENT_SEARCHES,
  RESTAURANTS,
} from "../../data/mockData";

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);

  // filtered lists come from the search text, not stored in state
  const search = query.toLowerCase();
  const filteredRestaurants = RESTAURANTS.filter((r) =>
    r.name.toLowerCase().includes(search),
  );
  const filteredCuisines = CUISINES.filter((c) =>
    c.name.toLowerCase().includes(search),
  );

  function removeSearch(term: string) {
    setRecentSearches(recentSearches.filter((item) => item !== term));
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* white header */}
        <View style={styles.header}>
          <View style={styles.topBar}>
            <DeliveryToggle />
            <IconButton icon="person-circle-outline" />
          </View>
          <AddressRow address={DELIVERY_ADDRESS} />
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search Skip"
          />
        </View>

        {/* restaurant logos */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.logoRow}
        >
          {filteredRestaurants.map((restaurant) => (
            <RestaurantLogo
              key={restaurant.id}
              name={restaurant.name}
              initials={restaurant.initials}
              logoColor={restaurant.logoColor}
              onPress={() => router.push("/restaurant")}
            />
          ))}
        </ScrollView>

        {/* cuisine grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular For Dinner</Text>
          <View style={styles.grid}>
            {filteredCuisines.map((cuisine, index) => (
              <CuisineTile
                key={cuisine.id}
                name={cuisine.name}
                color={cuisine.color}
                rank={index + 1}
              />
            ))}
          </View>
        </View>

        {/* recent searches */}
        <View style={styles.section}>
          <View style={styles.recentHeader}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            <Pressable onPress={() => setRecentSearches([])}>
              <Text style={styles.clearAll}>Clear All</Text>
            </Pressable>
          </View>

          {recentSearches.map((term) => (
            <View key={term} style={styles.recentRow}>
              <Ionicons
                name="time-outline"
                size={24}
                color={Colors.textMuted}
              />
              <Text style={styles.recentText}>{term}</Text>
              <Pressable onPress={() => removeSearch(term)}>
                <Ionicons name="close" size={24} color={Colors.textMuted} />
              </Pressable>
            </View>
          ))}

          {recentSearches.length === 0 && (
            <Text style={styles.emptyText}>No recent searches</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingBottom: 24,
    gap: 20,
  },
  header: {
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    gap: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoRow: {
    paddingHorizontal: 16,
    gap: 12,
  },
  section: {
    paddingHorizontal: 16,
    gap: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.text,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearAll: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
  recentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  recentText: {
    flex: 1,
    fontSize: 17,
    color: Colors.text,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.textMuted,
  },
});
