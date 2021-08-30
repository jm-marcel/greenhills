import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { TextInputMask } from "react-native-masked-text";
import firebase from "../../config/Firebase";

export default function SignUp({ navigation }) {
  const database = firebase.firestore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [administratorOn, setAdministratorOn] = useState(false);
  const [error, setError] = useState(false);

  const registered = () => {
    if (name === "" || phone === "" || email === "" || password === "") {
      setError(true);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          let user = data.user;
          database.collection("User").doc(name).set({
            uid: user.uid,
            name: name,
            phone: phone,
            admin: administratorOn,
            email: email,
            password: password,
          });
          navigation.navigate("Registered", { userId: user.uid });
        })
        .catch((error) => {
          setError(true);
        });
    }
  };

  const toggleSwitch = () =>
    setAdministratorOn((previousState) => !previousState);

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
          <Text style={styles.title}>Cadastre-se</Text>
          <Text style={styles.subtitle}>Queremos te conhecer melhor!</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.firstRow}>
            <Image
              source={require("../../../assets/register.png")}
              style={styles.image}
            />
          </View>
          {error === true ? (
            <View style={styles.alertRow}>
              <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={20}
                  color="#e33c28"
                />
                <Text style={styles.alert}>Ei! Revise seus dados!</Text>
              </View>
            </View>
          ) : (
            <View />
          )}
          <View style={styles.secondRow}>
            <View>
              <Text style={styles.text}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCompleteType="name"
                type="text"
                onChangeText={(name) => setName(name)}
                value={name}
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
              />
            </View>
            <View>
              <Text style={styles.text}>Telefone</Text>
              <TextInputMask
                type={"cel-phone"}
                style={styles.input}
                placeholder="(99) 9 9999-9999"
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
                value={phone}
                onChangeText={(phone) => {
                  setPhone(phone);
                }}
              />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View>
              <Text style={styles.text}>E-Mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@exemplo.com"
                autoCompleteType="email"
                type="text"
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
              />
            </View>
            <View>
              <Text style={styles.text}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Escolha bem, hein! ;)"
                autoCompleteType="password"
                type="text"
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.adminText}>Administrador</Text>
          <Switch
            trackColor={{ true: "#000000", false: "#fff" }}
            thumbColor={administratorOn ? "#fff" : "#000000"}
            onValueChange={toggleSwitch}
            value={administratorOn}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={registered}
            style={styles.registeredButton}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              Tudo Certo!
            </Text>
          </TouchableOpacity>
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
    paddingRight: 10,
    paddingLeft: 10,
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 30,
    paddingTop: 10,
    width: "100%",
  },
  body: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 110,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 130,
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
  contentAlert: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: 85,
  },
  alert: {
    paddingLeft: 10,
    color: "#e33c28",
  },
  alertRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  secondRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  thirdRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    borderRadius: 2,
    backgroundColor: "#fff",
    height: 40,
    width: 170,
    margin: 5,
    paddingLeft: 5,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
  adminText: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 5,
    paddingRight: 10,
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
