// round icon button, used in headers
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { IconName } from "../data/mockData";

interface IconButtonProps {
  icon: IconName;
  onPress?: () => void;
  backgroundColor?: string;
  iconColor?: string;
}

function IconButton({
  icon,
  onPress,
  backgroundColor = Colors.inputBg,
  iconColor = Colors.text,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name={icon} size={24} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});

export default IconButton;
