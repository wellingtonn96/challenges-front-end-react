import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home: React.FC = () => {
  const [faceDice, setFaceDice] = useState(require(`../../assets/face0.png`));

  function handleFaceDice() {
    const intervalFunc = setInterval(() => {
      switch (Math.floor(Math.random() * 6) + 1) {
        case 1:
          setFaceDice(require("../../assets/face1.png"));
          break;
        case 2:
          setFaceDice(require("../../assets/face2.png"));
          break;
        case 3:
          setFaceDice(require("../../assets/face3.png"));
          break;
        case 4:
          setFaceDice(require("../../assets/face4.png"));
          break;
        case 5:
          setFaceDice(require("../../assets/face5.png"));
          break;
        case 6:
          setFaceDice(require("../../assets/face6.png"));
          break;
      }
    }, 10);

    setTimeout(() => {
      clearInterval(intervalFunc);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFaceDice}>
        <Image source={faceDice} style={{ marginBottom: 40 }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFaceDice(require("../../assets/face0.png"))}
      >
        <Text style={styles.textReset}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textReset: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
