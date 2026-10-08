import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressRow from "../../components/AddressRow";
import CategoryItem from "../../components/CategoryItem";
import DeliveryToggle from "../../components/DeliveryToggle";
import FoodTypeTile from "../../components/FoodTypeTile";
import IconButton from "../../components/IconButton";
import RestaurantCard from "../../components/RestaurantCard";
import { Colors } from "../../constants/Colors";
import {
  CATEGORIES,
  DELIVERY_ADDRESS,
  FOOD_TYPES,
  RESTAURANTS,
} from "../../data/mockData";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* top bar */}
        <View style={styles.topBar}>
          <DeliveryToggle />
          <View style={styles.topBarRight}>
            <IconButton icon="ticket" backgroundColor={Colors.accent} />
            <IconButton icon="person-circle-outline" />
          </View>
        </View>

        {/* address and sort */}
        <View style={styles.addressRow}>
          <AddressRow address={DELIVERY_ADDRESS} />
          <Pressable style={styles.sortButton}>
            <Ionicons name="filter" size={18} color={Colors.primary} />
            <Text style={styles.sortText}>Sort</Text>
          </Pressable>
        </View>

        {/* categories row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          {CATEGORIES.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </ScrollView>

        <PromoBanner />

        {/* food types row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          {FOOD_TYPES.map((type) => (
            <FoodTypeTile
              key={type.id}
              name={type.name}
              icon={type.icon}
              color={type.color}
            />
          ))}
        </ScrollView>

        {/* restaurants */}
        <View style={styles.restaurantList}>
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              initials={restaurant.initials}
              logoColor={restaurant.logoColor}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={restaurant.deliveryFee}
              offer={restaurant.offer}
              onPress={() => router.push("/restaurant")}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// only used on home so it stays in this file
function PromoBanner() {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerText}>
        <Text style={styles.sponsored}>Sponsored</Text>
        <Text style={styles.bannerTitle}>The best BOGOs in town.</Text>
        <Text style={styles.bannerBody}>
          Buy one, get one free. Check out these tasty BOGOs near you.
        </Text>
        <Pressable style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>browse now</Text>
        </Pressable>
      </View>
      <Ionicons name="fast-food" size={80} color={Colors.primary} />
    </View>
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
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  topBarRight: {
    flexDirection: "row",
    gap: 12,
  },
  addressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  sortText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  row: {
    paddingHorizontal: 16,
    gap: 12,
  },
  banner: {
    marginHorizontal: 16,
    backgroundColor: Colors.bannerBlue,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bannerText: {
    flex: 1,
    gap: 8,
  },
  sponsored: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.text,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "800",
    fontStyle: "italic",
    color: Colors.text,
  },
  bannerBody: {
    fontSize: 14,
    color: Colors.text,
  },
  bannerButton: {
    alignSelf: "flex-start",
    backgroundColor: Colors.text,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bannerButtonText: {
    color: Colors.card,
    fontSize: 16,
    fontWeight: "800",
    fontStyle: "italic",
  },
  restaurantList: {
    gap: 16,
  },
});
