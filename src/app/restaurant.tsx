import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/IconButton";
import MenuItemCard from "../components/MenuItemCard";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants/Colors";
import { MENU_ITEMS, RESTAURANTS } from "../data/mockData";

export default function RestaurantScreen() {
  const router = useRouter();
  const restaurant = RESTAURANTS[0];
  const [query, setQuery] = useState("");

  // filter the menu by the search text
  const search = query.toLowerCase();
  const filteredItems = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search),
  );
  const orderAgain = filteredItems.filter((item) => item.lastOrdered);
  const popular = filteredItems.filter((item) => !item.lastOrdered);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* top bar */}
      <View style={styles.topBar}>
        <IconButton
          icon="chevron-back"
          backgroundColor={Colors.card}
          onPress={() => router.back()}
        />
        <View style={styles.searchWrap}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search for an item"
          />
        </View>
        <IconButton icon="ellipsis-horizontal" backgroundColor={Colors.card} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* placeholder color instead of a food photo */}
        <View
          style={[styles.banner, { backgroundColor: restaurant.logoColor }]}
        >
          <Ionicons name="fast-food" size={96} color={Colors.overlay} />
          <View style={styles.bannerLogo}>
            <Text
              style={[styles.bannerLogoText, { color: restaurant.logoColor }]}
            >
              {restaurant.initials}
            </Text>
          </View>
        </View>

        {/* restaurant info */}
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Ionicons
              name="information-circle-outline"
              size={32}
              color={Colors.primary}
            />
          </View>

          <View style={styles.metaRow}>
            <Ionicons name="star" size={18} color={Colors.primary} />
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <View style={styles.line} />
            <Text style={styles.meta}>{restaurant.area}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.meta}>{restaurant.deliveryTime}</Text>
            <View style={styles.dot} />
            <Text style={styles.meta}>
              ${restaurant.deliveryFee.toFixed(2)} Delivery Fee
            </Text>
          </View>

          <View style={styles.plusPill}>
            <View style={styles.plusIcon}>
              <Text style={styles.plusIconText}>S+</Text>
            </View>
            <Text style={styles.plusText}>$0 Delivery Fee Over $15</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.link}>Service fees apply</Text>
            <View style={styles.dot} />
            <Text style={styles.link}>Allergens & Disclaimers</Text>
          </View>
        </View>

        {restaurant.offer && <OfferTicket title={restaurant.offer} />}

        {/* order again */}
        {orderAgain.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Again</Text>
            {orderAgain.map((item) => (
              <MenuItemCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                lastOrdered={item.lastOrdered}
              />
            ))}
          </View>
        )}

        {/* popular items */}
        <View style={styles.section}>
          <View style={styles.titleRow}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <View style={styles.titleIcon}>
              <Ionicons name="ribbon-outline" size={20} color={Colors.text} />
            </View>
          </View>
          <Text style={styles.sectionSub}>
            Check out the most popular items on the menu.
          </Text>
          {popular.map((item) => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
          {filteredItems.length === 0 && (
            <Text style={styles.emptyText}>No items found</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// offer ticket, only used on this screen so it stays in this file
interface OfferTicketProps {
  title: string;
}

function OfferTicket({ title }: OfferTicketProps) {
  return (
    <View style={styles.ticket}>
      <View style={styles.ticketIcon}>
        <Ionicons name="fast-food" size={32} color={Colors.primary} />
      </View>
      <View style={styles.ticketLine} />
      <View style={styles.ticketText}>
        <Text style={styles.ticketTitle}>{title}</Text>
        <Text style={styles.ticketLink}>Show Items</Text>
      </View>

      {/* half circles cut out of the edges so it looks like a ticket */}
      <View style={[styles.notch, styles.notchTop]} />
      <View style={[styles.notch, styles.notchBottom]} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchWrap: {
    flex: 1,
  },
  content: {
    paddingTop: 8,
    paddingBottom: 32,
    gap: 24,
  },
  banner: {
    marginHorizontal: 16,
    height: 220,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerLogo: {
    position: "absolute",
    left: 16,
    bottom: 16,
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerLogoText: {
    fontSize: 24,
    fontWeight: "900",
  },
  info: {
    paddingHorizontal: 16,
    gap: 10,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    flexShrink: 1,
    fontSize: 32,
    fontWeight: "800",
    color: Colors.text,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
  line: {
    width: 1,
    height: 16,
    backgroundColor: Colors.border,
  },
  meta: {
    fontSize: 16,
    color: Colors.textMuted,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.textMuted,
  },
  plusPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.peach,
    borderRadius: 999,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 14,
  },
  plusIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIconText: {
    color: Colors.card,
    fontSize: 12,
    fontWeight: "900",
    fontStyle: "italic",
  },
  plusText: {
    fontSize: 16,
    color: Colors.text,
  },
  link: {
    fontSize: 15,
    color: Colors.text,
    textDecorationLine: "underline",
  },
  ticket: {
    marginHorizontal: 16,
    backgroundColor: Colors.offerBg,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 16,
  },
  ticketIcon: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  ticketLine: {
    width: 2,
    alignSelf: "stretch",
    backgroundColor: Colors.overlay,
  },
  ticketText: {
    flex: 1,
    gap: 6,
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.text,
  },
  ticketLink: {
    fontSize: 16,
    color: Colors.text,
    textDecorationLine: "underline",
  },
  notch: {
    position: "absolute",
    left: 81,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  notchTop: {
    top: -12,
  },
  notchBottom: {
    bottom: -12,
  },
  section: {
    paddingHorizontal: 16,
    gap: 14,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.text,
  },
  titleIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.bannerBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionSub: {
    fontSize: 16,
    color: Colors.text,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.textMuted,
  },
});
