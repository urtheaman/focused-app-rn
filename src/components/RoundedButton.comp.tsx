import {
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { colors } from "../utils/colors";

const RoundedButton: React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: Object;
  textStyle?: Object;
  size?: number;
}> = ({ title, style, textStyle, size = 125, onPress, ...others }) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
const styles = (size: number) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: { color: colors.white, fontSize: size / 3 },
});
