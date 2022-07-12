import {
  View,
  Text,
  StyleSheet,
  Vibration,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import { fontSizes, spacing } from "../utils/sizes";
import { Countdown } from "../components/Countdown.comp";
import { ProgressBar } from "react-native-paper";
import { colors } from "../utils/colors";
import RoundedButton from "../components/RoundedButton.comp";
import Timing from "../components/Timing.comp";
import { useKeepAwake } from "expo-keep-awake";

const singleVibrateDuration = 1000;
const PATTERN = [
  1 * singleVibrateDuration,
  1 * singleVibrateDuration,
  1 * singleVibrateDuration,
  1 * singleVibrateDuration,
  1 * singleVibrateDuration,
];

const Timer: React.FC<{
  focusSubject: string;
  onTimerEnd: Function;
  clearSubject: (event: GestureResponderEvent) => void;
}> = ({ focusSubject, clearSubject, onTimerEnd }) => {

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(1/60);

  useKeepAwake();
  const onEnd = (reset: Function) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="back" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
});
