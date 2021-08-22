import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";

class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          this.props.navigation.navigate(this.props.screen);
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{this.props.title}</Text>
          <Text style={{ color: "rgba(25, 29, 33, 0.5)" }}>
            {this.props.subtitle}
          </Text>
        </View>
        <Image style={styles.image} source={this.props.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default withNavigation(Card);
