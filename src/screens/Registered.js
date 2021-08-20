import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Registered({ navigation }) {
  const registered = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro em Análise</Text>
        <Text style={styles.subtitle}>
          Entraremos em contato contigo em breve!
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          source={require("../../assets/registered.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={registered} style={styles.registeredButton}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            Ok!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191d21",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 35,
    paddingTop: 10,
    width: "100%",
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  subtitle: {
    color: "#656F77",
    paddingTop: 10,
  },
  image: {
    maxHeight: 350,
    maxWidth: 350,
  },
  registeredButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#191d21",
    alignItems: "center",
    justifyContent: "center",
  },
});
