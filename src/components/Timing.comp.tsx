import { View, StyleSheet } from "react-native";
import React from "react";
import RoundedButton from "./RoundedButton.comp";

const Timing: React.FC<{ onChangeTime: Function }> = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="30" size={75} onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

export default Timing;
const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
