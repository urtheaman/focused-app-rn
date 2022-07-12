import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton.comp";
const Focus: React.FC<{
  addSubject: Function;
}> = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  return (
    <View style={styles.focusContainer}>
      <TextInput
        style={styles.text}
        value={subject}
        onChangeText={setSubject}
        label="Enter your focused title"
      />
      <RoundedButton onPress={() => addSubject(subject)} title="+" size={50} />
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  focusContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    flex: 1,
    marginRight: 10,
  },
});
