import { StatusBar as ExpoBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Provider } from "react-native-paper";
import FocusHistory from "./src/components/FocusHistory.comp";
import Focus from "./src/screens/input.screen";
import Timer from "./src/screens/timer.screen";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const HandleHistory = (sub: string) => {
    setHistory((prev) => [...prev, sub]);
  };
  return (
    <Provider>
      <SafeAreaView style={styles.notch} />
      <View style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            clearSubject={() => setCurrentSubject("")}
            onTimerEnd={HandleHistory}
            focusSubject={currentSubject}
          />
        )}
      </View>
      <ExpoBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  notch: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});
