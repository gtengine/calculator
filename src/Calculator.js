import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const COLORS = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor =
    type === "reset"
      ? COLORS.RESET
      : type === "operator"
      ? COLORS.OPERATOR
      : type === "num"
      ? COLORS.NUM
      : "transparent";
  return (
    <TouchableOpacity
      style={{
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 64,
        borderWidth: 0.3,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 28 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="reset" text="AC" flex={3} onPress={() => null} />
        <Button type="operator" text="/" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="7" flex={1} onPress={() => null} />
        <Button type="num" text="8" flex={1} onPress={() => null} />
        <Button type="num" text="9" flex={1} onPress={() => null} />
        <Button type="operator" text="X" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="4" flex={1} onPress={() => null} />
        <Button type="num" text="5" flex={1} onPress={() => null} />
        <Button type="num" text="6" flex={1} onPress={() => null} />
        <Button type="operator" text="-" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="1" flex={1} onPress={() => null} />
        <Button type="num" text="2" flex={1} onPress={() => null} />
        <Button type="num" text="3" flex={1} onPress={() => null} />
        <Button type="operator" text="+" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="0" flex={2} onPress={() => null} />
        <Button type="num" text="." flex={1} onPress={() => null} />
        <Button type="operator" text="=" flex={1} onPress={() => null} />
      </View>
    </View>
  );
};
