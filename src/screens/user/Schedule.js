import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Area from "../../components/Area";

export default function Schedule({ navigation }) {
  const [modal, setModal] = useState(false);
  const areaData = [
    {
      id: 1,
      title: "Piscina Olímpica",
      subtitle: "Esporte",
      info: `Comprimento: 50 metros\n\nLargura: 25 metros\n\nProfundidade: 3 metros\n\nTemperatura da água: 25°C\n\nNúmero de raias: 8`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/pool.png",
    },
    {
      id: 2,
      title: "Churrasqueira",
      subtitle: "Lazer",
      info: `Peso: 2,8kg\n\nAltura: 60 cm\n\nLargura: 30 cm\n\nProfundidade: 38 cm\n\nFabricante: ouro de minas`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/barbecue.png",
    },
    {
      id: 3,
      title: "Refeitório",
      subtitle: "Alimentação",
      info: `Capacidade: 250 pessoas\n\nTemperatura: 20°C\n\nEspaço: 596,96m2\n\nBanheiros: Masculinx e Femininx\n\nCozinha: Restrita`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/food.png",
    },
    {
      id: 4,
      title: "Salão de Festas",
      subtitle: "Lazer",
      info: `Camarim - Projetor\n\nLocal Próprio\n\nCapacidade: 50 pessoas\n\nSala de DJ\n\nMesas e Cadeiras`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/party.png",
    },
    {
      id: 5,
      title: "Parquinho",
      subtitle: "Lazer",
      info: `- Gangorra\n\n- Balanços\n\n- Escorregadores\n\n- Casinhas\n\n- Trapézios`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/playground.png",
    },
    {
      id: 6,
      title: "Quadra de Basquete",
      subtitle: "Esporte",
      info: `- Piso de madeira\n\n- 21 x 42 x 7 m\n\n- Rede de proteção\n\n- Bancos\n\n- Arquibancadas`,
      admin: "Administrador",
      edit: false,
      image: "../../../assets/court.png",
    },
  ];

  const confirm = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Áreas Disponíveis</Text>
        <Text style={styles.subtitle}>
          Adicione uma nova área em sua lista de reservas!
        </Text>
      </View>
      <View style={styles.body}>
        <FlatList
          style={{ paddingHorizontal: 15 }}
          horizontal={true}
          data={areaData}
          renderItem={({ item }) => {
            return (
              <Area
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                info={item.info}
                admin={item.admin}
                edit={item.edit}
                image={item.image}
              />
            );
          }}
        />
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
