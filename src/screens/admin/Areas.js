import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Area from "../../components/Area";

export default function Areas({ navigation }) {
  const [modal, setModal] = useState(false);
  const areaData = [
    {
      title: "Piscina Olímpica",
      subtitle: "Esporte",
      info: `Comprimento: 50 metros\n\nLargura: 25 metros\n\nProfundidade: 3 metros\n\nTemperatura da água: 25°C\n\nNúmero de raias: 8`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/pool.png"),
    },
    {
      title: "Churrasqueira",
      subtitle: "Lazer",
      info: `Peso: 2,8kg\n\nAltura: 60 cm\n\nLargura: 30 cm\n\nProfundidade: 38 cm\n\nFabricante: ouro de minas`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/barbecue.png"),
    },
    {
      title: "Refeitório",
      subtitle: "Alimentação",
      info: `Capacidade: 250 pessoas\n\nTemperatura: 20°C\n\nEspaço: 596,96m2\n\nBanheiros: Masculinx e Femininx\n\nCozinha: Restrita`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/food.png"),
    },
    {
      title: "Salão de Festas",
      subtitle: "Lazer",
      info: `Camarim - Projetor\n\nLocal Próprio\n\nCapacidade: 50 pessoas\n\nSala de DJ\n\nMesas e Cadeiras`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/party.png"),
    },
    {
      title: "Parquinho",
      subtitle: "Lazer",
      info: `- Gangorra\n\n- Balanços\n\n- Escorregadores\n\n- Casinhas\n\n- Trapézios`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/playground.png"),
    },
    {
      title: "Quadra de Basquete",
      subtitle: "Esporte",
      info: `- Piso de madeira\n\n- 21 x 42 x 7 m\n\n- Rede de proteção\n\n- Bancos\n\n- Arquibancadas`,
      admin: "Administrador",
      edit: true,
      image: require("../../../assets/court.png"),
    },
  ];

  const confirm = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Áreas Cadastradas</Text>
        <Text style={styles.subtitle}>
          Visualize e remova áreas cadastradas!
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.upperText}>Confirmar Exclusão</Text>
                <Text style={styles.modalText}>
                  Ei! Você realmente deseja excluir a área selecionada?
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 10 }}>
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={confirm}
                  >
                    <Text style={styles.confirmTextStyle}>Sim!</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity
                    style={styles.denyButton}
                    onPress={() => setModal(!modal)}
                  >
                    <Text style={styles.denyTextStyle}>Não!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "#rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    margin: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmButton: {
    borderRadius: 2,
    borderColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#000",
  },
  denyButton: {
    borderRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  upperText: {
    fontSize: 10,
    color: "#656F77",
    paddingBottom: 10,
  },
  modalText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  confirmTextStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  denyTextStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});
