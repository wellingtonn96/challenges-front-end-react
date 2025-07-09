import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [value, setValue] = useState(0);

  function convertToMinutes(number: number) {
    const minutes = number / 60;
    setValue(minutes);
  }

  function decrementSeconds() {}

  return (
    <View style={styles.container}>
      <Text style={styles.styleFont}>React Timer</Text>
      <Text style={styles.styleFont}>{value}</Text>
      <TextInput
        style={styles.styleFont}
        placeholder="digite o valor em segundos"
        onChangeText={(value) => convertToMinutes(parseInt(value))}
      />
      <TouchableOpacity>
        <Text style={styles.styleFont}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  styleFont: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
