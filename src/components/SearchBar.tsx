// search bar used on search, orders and restaurant screens
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

function SearchBar({ value, onChangeText, placeholder }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color={Colors.primary} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.inputBg,
    borderRadius: 999,
    paddingHorizontal: 18,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: Colors.text,
  },
});

export default SearchBar;
