import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Botao from "../components/Botao";
import { getCardsLength } from "../utils/helpers";

class DeckView extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    const questions = decks[deck].questions;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.mainText}>{decks[deck].title}</Text>
          <Text style={styles.subText}>
            {questions ? getCardsLength(questions) : null}
          </Text>

          <Botao
            styles={styles}
            text={"Add Card"}
            color={"#292477"}
            onPress={() =>
              this.props.navigation.navigate("AddCard", { entryId: deck })
            }
          />
          <Botao
            styles={styles}
            text={"Start Quiz"}
            color={"#E54B4B"}
            onPress={() =>
              this.props.navigation.navigate("Quiz", { entryId: deck })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 170
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center"
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#cceeff",
    alignSelf: "stretch",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.34)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: "#fff"
  },
  subText: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 160
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckView);
