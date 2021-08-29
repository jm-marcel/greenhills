import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Area from "../../components/Area";
import firebase from "../../config/Firebase";

export default function Areas({ navigation }) {
  const database = firebase.firestore();

  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  const confirm = () => {
    setModal(!modal);
  };

  const getAreas = () => {
    database
      .collection("Area")
      .get()
      .then((querySnapshot) => {
        const areas = [];
        querySnapshot.forEach((doc) => {
          areas.push(doc.data());
        });
        setList(areas);
      });
    return list;
  };

  useEffect(() => {
    getAreas();
  }, []);

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
          data={list}
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
