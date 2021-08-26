import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modal,
    };
    this.confirm = this.confirm.bind(this);
  }

  confirm() {
    this.setState({ modal: !this.state.modal });
    this.props.navigation.navigate(this.props.screen);
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modal}
        onRequestClose={() => {
          this.setState({ modal: !this.state.modal });
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.upperText}>{this.props.title}</Text>
              <Text style={styles.modalText}>{this.props.subtitle}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: 10 }}>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={this.confirm}
                >
                  <Text style={styles.confirmTextStyle}>Sim!</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <TouchableOpacity
                  style={styles.denyButton}
                  onPress={() => {
                    this.setState({ modal: !this.state.modal });
                  }}
                >
                  <Text style={styles.denyTextStyle}>Não!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
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

export default withNavigation(Alert);
