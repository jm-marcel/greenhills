import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import firebase from "../config/Firebase";

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaId: this.props.id,
      userId: "",
      title: this.props.title,
      subtitle: this.props.subtitle,
      info: this.props.info,
      admin: this.props.admin,
      edit: this.props.edit,
      image: this.props.image,
    };
  }

  render() {
    const database = firebase.firestore();

    const { currentUser } = firebase.auth();

    let form = this.state;
    form.userId = currentUser?.uid;

    function findSrcImg(image) {
      switch (image) {
        case "pool":
          return require("../../assets/pool.png");
        case "barbecue":
          return require("../../assets/barbecue.png");
        case "food":
          return require("../../assets/food.png");
        case "party":
          return require("../../assets/party.png");
        case "playground":
          return require("../../assets/playground.png");
        case "court":
          return require("../../assets/court.png");
      }
    }

    function addSchedule() {
      database.collection("Schedule").doc(form.title).set(form);
    }

    function deleteSchedule() {
      database.collection("Schedule").doc(form.title).delete();
    }

    return this.props.edit === true ? (
      <View style={styles.area}>
        <View style={styles.image}>
          <Image style={styles.png} source={findSrcImg(this.props.image)} />
        </View>
        <View style={styles.info}>
          <View style={styles.infoHeader}>
            <Text style={{ color: "#656F77", paddingBottom: 10 }}>
              {this.props.subtitle}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.infoBody}>
            <Text>{this.props.info}</Text>
          </View>
          <View style={styles.infoFooter}>
            <Image
              style={{ maxHeight: 30, maxWidth: 30 }}
              source={require("../../assets/admin.png")}
            />
            <Text>{this.props.admin}</Text>
            <TouchableOpacity onPress={deleteSchedule}>
              <Image
                style={{ maxHeight: 30, maxWidth: 30 }}
                source={require("../../assets/dumpster.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.area}>
        <View style={styles.image}>
          <Image style={styles.png} source={findSrcImg(this.props.image)} />
        </View>
        <View style={styles.info}>
          <View style={styles.infoHeader}>
            <Text style={{ color: "#656F77", paddingBottom: 10 }}>
              {this.props.subtitle}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.infoBody}>
            <Text>{this.props.info}</Text>
          </View>
          <View style={styles.infoFooter}>
            <Image
              style={{ maxHeight: 30, maxWidth: 30 }}
              source={require("../../assets/admin.png")}
            />
            <Text>{this.props.admin}</Text>
            <TouchableOpacity onPress={addSchedule}>
              <Image
                style={{ maxHeight: 30, maxWidth: 30 }}
                source={require("../../assets/add.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    height: "90%",
    width: 270,
    borderRadius: 10,
    backgroundColor: "#e8eef3",
    margin: 15,
  },
  image: {
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight: "40%",
  },
  png: {
    maxHeight: 200,
    maxWidth: 200,
  },
  info: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    maxHeight: "60%",
  },
  infoHeader: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingBottom: 15,
  },
  infoBody: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 15,
  },
  infoFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingTop: 25,
    paddingBottom: 22,
  },
});

export default withNavigation(Area);
