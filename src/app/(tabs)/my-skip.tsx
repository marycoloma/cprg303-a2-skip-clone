import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../../components/IconButton";
import OfferCard from "../../components/OfferCard";
import SkipCoin from "../../components/SkipCoin";
import { Colors } from "../../constants/Colors";
import { OFFERS, POINTS, POINTS_VALUE, TOTAL_SAVED } from "../../data/mockData";

const TABS = ["My Offers", "Partnerships", "History"];

export default function MySkipScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("My Offers");

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* peach header (solid color instead of the gradient) */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.logo}>SKIP+</Text>
              <Text style={styles.manage}>Manage Membership</Text>
            </View>
            <IconButton
              icon="person-circle-outline"
              backgroundColor={Colors.overlay}
            />
          </View>

          <View style={styles.cardsWrap}>
            {/* points card */}
            <View style={styles.infoCard}>
              <View style={styles.pointsRow}>
                <Text style={styles.bigNumber}>{POINTS.toLocaleString()}</Text>
                <SkipCoin size={32} />
                <Text style={styles.bigNumber}>Pts</Text>
                <Ionicons
                  name="information-circle-outline"
                  size={28}
                  color={Colors.text}
                />
              </View>
              <Text style={styles.cardSub}>
                Points value: ${POINTS_VALUE.toFixed(2)}
              </Text>
            </View>

            {/* savings card */}
            <View style={[styles.infoCard, styles.savingsCard]}>
              <View style={styles.savingsText}>
                <Text style={styles.bigNumber}>${TOTAL_SAVED.toFixed(2)}</Text>
                <Text style={styles.cardSub}>Saved with Skip+ and offers</Text>
              </View>
              <Link href="/savings" asChild>
                <Pressable style={styles.detailsButton}>
                  <Text style={styles.detailsText}>Details</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>

        {/* tabs */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <Pressable
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {activeTab === "My Offers" ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Partnership exclusive offers
            </Text>
            {OFFERS.map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                description={offer.description}
                endsIn={offer.endsIn}
                onPress={() => router.push("/restaurant")}
              />
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>Nothing here yet</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.peach,
  },
  scroll: {
    backgroundColor: Colors.background,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    backgroundColor: Colors.peach,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 24,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logo: {
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    color: Colors.primary,
  },
  manage: {
    fontSize: 16,
    color: Colors.text,
    textDecorationLine: "underline",
  },
  cardsWrap: {
    backgroundColor: Colors.overlay,
    borderRadius: 24,
    padding: 12,
    gap: 12,
  },
  infoCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    gap: 6,
  },
  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bigNumber: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.text,
  },
  cardSub: {
    fontSize: 16,
    color: Colors.text,
  },
  savingsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  savingsText: {
    gap: 6,
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  detailsText: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.text,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: Colors.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 4,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textMuted,
  },
  tabTextActive: {
    color: Colors.text,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.text,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.textMuted,
    padding: 16,
  },
});
