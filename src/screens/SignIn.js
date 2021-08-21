import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignIn({ navigation }) {
  const [administratorOn, setAdministratorOn] = useState(false);
  const [safePassword, setSafePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(require("../../assets/eye.png"));

  const toggleSwitch = () =>
    setAdministratorOn((previousState) => !previousState);

  const login = () => {
    administratorOn
      ? navigation.navigate("AdminHome")
      : navigation.navigate("UserHome");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={10}
        extraHeight={250}
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Estamos felizes em te ver de novo! :D
          </Text>
        </View>
        <View style={styles.body}>
          <Image
            source={require("../../assets/login.png")}
            style={styles.image}
          />
          <View style={styles.row}>
            <TextInput
              style={styles.emailInput}
              placeholder="exemplo@exemplo.com"
              autoCompleteType="email"
              placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              secureTextEntry={safePassword}
              style={styles.passwordInput}
              placeholder="Senha"
              placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
              onChangeText={(password) => {
                setPassword(password);
              }}
            />
            <TouchableOpacity
              style={styles.eyeArea}
              onPress={() => {
                safePassword ? setSafePassword(false) : setSafePassword(true);
                eye == require("../../assets/eye.png")
                  ? setEye(require("../../assets/closed-eye.png"))
                  : setEye(require("../../assets/eye.png"));
              }}
            >
              <Image resizeMode="contain" style={styles.eye} source={eye} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.row}>
            <Text style={styles.text}>Administrador</Text>
            <Switch
              trackColor={{ true: "#000000", false: "#fff" }}
              thumbColor={administratorOn ? "#fff" : "#000000"}
              onValueChange={toggleSwitch}
              value={administratorOn}
            />
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={login} style={styles.loginButton}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  paddingLeft: 25,
                  paddingRight: 25,
                }}
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    maxHeight: 300,
    maxWidth: 350,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  emailInput: {
    borderBottomLeftRadius: 2,
    backgroundColor: "#fff",
    height: 40,
    width: "80%",
    paddingLeft: 10,
  },
  passwordInput: {
    borderBottomLeftRadius: 2,
    backgroundColor: "#fff",
    height: 40,
    width: "70%",
    paddingLeft: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    paddingRight: 5,
  },
  eyeArea: {
    height: 40,
    width: 30,
    backgroundColor: "#fff",
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  eye: {
    height: 40,
    width: 27,
    opacity: 0.8,
    zIndex: 8,
  },
  loginButton: {
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
