import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserHome({ navigation }) {
  const exit = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={styles.title}>Página Inicial</Text>
          <TouchableOpacity style={styles.backdoor} onPress={exit}>
            <Image
              style={styles.backdoor}
              source={require("../../assets/door.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>
            Por aqui, você pode visualizar todas as opções!
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Perfil</Text>
              <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
                Visualize e edite
              </Text>
              <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
                seus dados!
              </Text>
            </View>
            <Image
              style={styles.image}
              source={require("../../assets/profile.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Minhas Reservas</Text>
              <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
                Visualize, edite ou
              </Text>
              <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
                remova reservas!
              </Text>
            </View>
            <Image
              style={styles.image}
              source={require("../../assets/scheduled.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: 15,
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Reservar Área</Text>
              <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
                Reserve uma nova área!
              </Text>
            </View>
            <Image
              style={styles.image}
              source={require("../../assets/schedule.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              height: "85%",
              width: "40%",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 7,
            }}
          >
            <Image
              style={styles.bells}
              source={require("../../assets/bells.png")}
            />
          </View>
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 10,
  },
  body: {
    flex: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    paddingRight: 105,
  },
  subtitle: {
    color: "#656F77",
    paddingTop: 10,
  },
  backdoor: {
    maxHeight: 40,
    maxWidth: 40,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderRadius: 3,
  },
  row: {
    flex: 5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    height: "85%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  image: {
    maxHeight: 170,
    maxWidth: 135,
  },
  bells: {
    maxHeight: 150,
    maxWidth: 150,
  },
});
