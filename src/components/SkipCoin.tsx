// orange skip coin for points, used on my skip and savings
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface SkipCoinProps {
  size?: number;
}

function SkipCoin({ size = 28 }: SkipCoinProps) {
  return (
    <View
      style={[
        styles.coin,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.letter, { fontSize: size * 0.55 }]}>S</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  coin: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    color: Colors.card,
    fontWeight: "800",
    fontStyle: "italic",
  },
});

export default SkipCoin;
