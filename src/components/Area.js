import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";

class Area extends React.Component {
  render() {
    return (
      <View style={styles.area}>
        <View style={styles.image}>
          <Image style={styles.png} source={this.props.image} />
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
            <TouchableOpacity>
              <Image
                style={{ maxHeight: 30, maxWidth: 30 }}
                source={require("../../assets/pencil.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ maxHeight: 30, maxWidth: 30 }}
                source={require("../../assets/dumpster.png")}
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
