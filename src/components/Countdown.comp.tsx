import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const formatTime = (time: number): string =>
  time < 10 ? `0${time}` : `${time}`;

export const Countdown: React.FC<{
  minutes: number;
  isPaused: boolean;
  onProgress: Function;
  onEnd: Function;
}> = ({ minutes, isPaused, onProgress, onEnd }) => {
  const time = minutes * 60 * 1000;
  const interval = React.useRef<any>(null);
  const [millis, setMillis] = useState(0);
  const reset = () => setMillis(time);

  useEffect(() => {
    setMillis(time);
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / time);
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  function countdown() {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current!);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  }

  const minute = formatTime(Math.floor(millis / 1000 / 60));
  const seconds = formatTime(Math.floor(millis / 1000)%60);
  return (
    <Text style={styles.text}>
      {minute}:{seconds}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});
