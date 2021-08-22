import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Area from "../../components/Area";

export default function Areas({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Áreas Cadastradas</Text>
        <Text style={styles.subtitle}>
          Visualize, edite ou remova áreas cadastradas!
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={{ paddingHorizontal: 15 }} horizontal={true}>
          <Area
            title="Piscina Olímpica"
            subtitle="Esporte"
            info={`Comprimento: 50 metros\n\nLargura: 25 metros\n\nProfundidade: 3 metros\n\nTemperatura da água: 25°C\n\nNúmero de raias: 8`}
            admin="Administrador"
            image={require("../../../assets/pool.png")}
          />
          <Area
            title="Churrasqueira"
            subtitle="Lazer"
            info={`Peso: 2,8kg\n\nAltura: 60 cm\n\nLargura: 30 cm\n\nProfundidade: 38 cm\n\nFabricante: ouro de minas.`}
            admin="Administrador"
            image={require("../../../assets/barbecue.png")}
          />
          <Area
            title="Refeitório"
            subtitle="Lazer"
            info={`Capacidade: 250 pessoas\n\nTemperatura: 20°C\n\nEspaço: 596,96m2\n\nBanheiros: Masculinx e Femininx\n\nCozinha: Restrita.`}
            admin="Administrador"
            image={require("../../../assets/food.png")}
          />
          <Area
            title="Salão de Festas"
            subtitle="Lazer"
            info={`Camarim - Projetor\n\nLocal Próprio\n\nCapacidade: 50 pessoas\n\nSala de DJ\n\nMesas e Cadeiras`}
            admin="Administrador"
            image={require("../../../assets/party.png")}
          />
          <Area
            title="Parquinho"
            subtitle="Lazer"
            info={`- Gangorra\n\n- Balanços\n\n- Escorregadores\n\n- Casinhas\n\n- Trapézios`}
            admin="Administrador"
            image={require("../../../assets/playground.png")}
          />
          <Area
            title="Quadra de Basquete"
            subtitle="Esporte"
            info={`- Piso de madeira\n\n- 21 x 42 x 7 m\n\n- Rede de proteção\n\n- Bancos\n\n- Arquibancadas`}
            admin="Administrador"
            image={require("../../../assets/court.png")}
          />
        </ScrollView>
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
    paddingBottom: 20,
    width: "100%",
  },
  body: {
    flex: 9,
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
});
