import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInputMask } from "react-native-masked-text";

export default function SignUp({ navigation }) {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const registered = () => {
    navigation.navigate("Registered");
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
          <View style={styles.secondRow}>
            <View>
              <Text style={styles.text}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCompleteType="name"
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
              />
            </View>
            <View>
              <Text style={styles.text}>Data de Nascimento</Text>
              <TextInputMask
                style={styles.input}
                placeholder={"DD/MM/AAAA"}
                placeholderTextColor={"rgba(25, 29, 33, 0.5)"}
                type={"datetime"}
                options={{
                  format: "DD/MM/YYYY",
                }}
                value={date}
                onChangeText={(date) => {
                  setDate(date);
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
        </View>
        <View style={styles.footer}>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 40,
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
  firstRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  secondRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
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
