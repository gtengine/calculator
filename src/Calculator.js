import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCalculator } from "./use-calculator";

const COLORS = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
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
        borderWidth: isSelected ? 0.6 : 0.3,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 28 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  return (
    <View style={{ flex: 1, justifyContent: "center", width: 320 }}>
      {__DEV__ && (
        <>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
        </>
      )}

      <View
        style={{
          backgroundColor: COLORS.RESULT,
          minHeight: 56,
          justifyContent: "center",
          paddingHorizontal: 4,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
            textAlign: "right",
          }}
        >
          {input}
        </Text>
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="reset"
          text={hasInput ? "C" : "AC"}
          flex={3}
          onPress={onPressReset}
        />
        <Button
          type="operator"
          text="/"
          flex={1}
          onPress={() => onPressOperator("/")}
          isSelected={currentOperator === "/"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[7, 8, 9].map((num, idx) => {
          return (
            <Button
              key={idx}
              type="num"
              text={`${num}`}
              flex={1}
              onPress={() => onPressNum(num)}
            />
          );
        })}
        <Button
          type="operator"
          text="*"
          flex={1}
          onPress={() => onPressOperator("*")}
          isSelected={currentOperator === "*"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[4, 5, 6].map((num, idx) => {
          return (
            <Button
              key={idx}
              type="num"
              text={`${num}`}
              flex={1}
              onPress={() => onPressNum(num)}
            />
          );
        })}
        <Button
          type="operator"
          text="-"
          flex={1}
          onPress={() => onPressOperator("-")}
          isSelected={currentOperator === "-"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[1, 2, 3].map((num, idx) => {
          return (
            <Button
              key={idx}
              type="num"
              text={`${num}`}
              flex={1}
              onPress={() => onPressNum(num)}
            />
          );
        })}
        <Button
          type="operator"
          text="+"
          flex={1}
          onPress={() => onPressOperator("+")}
          isSelected={currentOperator === "+"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="0" flex={2} onPress={() => onPressNum(0)} />
        <Button type="num" text="." flex={1} onPress={() => null} />
        <Button
          type="operator"
          text="="
          flex={1}
          onPress={() => onPressOperator("=")}
        />
      </View>
    </View>
  );
};
