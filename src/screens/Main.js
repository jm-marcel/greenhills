import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Main({ navigation }) {
  const signUp = () => {
    navigation.navigate("SignUp");
  };

  const signIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Condomínio Colinas</Text>
        <Text style={styles.title}>Verdejantes</Text>
        <Text style={styles.subtitle}>
          Reserve áreas de lazer, piscinas e muito mais!
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          source={require("../../assets/greenhills.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={signUp} style={styles.signUpButton}>
            <Text style={{ color: "#fff" }}>Cadastro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={signIn} style={styles.signInButton}>
            <Text style={{ color: "#191d21", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
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
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 50,
  },
  body: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  subtitle: {
    color: "#656F77",
    paddingTop: 20,
  },
  image: {
    maxHeight: 350,
    maxWidth: 350,
  },
  button: {
    margin: 10,
    marginTop: 100,
    width: "45%",
  },
  signUpButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#191d21",
    alignItems: "center",
    justifyContent: "center",
  },
  signInButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
