import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const FocusHistory: React.FC<{ history: string[] }> = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your foucsed history -</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default FocusHistory;
const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    color: colors.white,
  },
  heading: {
    fontSize: fontSizes.lg,
    color: "inherit",
  },
  item: {
    fontSize: fontSizes.md,
    marginBottom: spacing.sm,
    color: "inherit",
  },
});
