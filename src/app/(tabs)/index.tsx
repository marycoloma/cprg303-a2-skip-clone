import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
  },
});
