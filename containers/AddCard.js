import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { addCardDeck } from "../utils/api";
import { connect } from "react-redux";
import { addCard } from "../actions";
import BotaoEnvio from "../components/BotaoEnvio";

import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text
} from "react-native";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    correctAnswer: ""
  };

  enviarCarta = deck => {
    const { question, answer, correctAnswer } = this.state;

    if (question && answer) {
      this.props.dispatch(addCard({ question, answer, correctAnswer, deck }));
      addCardDeck(deck, { question, answer, correctAnswer });
      this.setState({ question: "", answer: "", correctAnswer: "" });
      this.props.navigation.dispatch(NavigationActions.back({ key: null }));
    }
  };

  render() {
    const nomeBaralho = this.props.navigation.state.params.entryId;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Qual é a pergunta?</Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />

          <Text style={styles.titulo}>Qual é a resposta?</Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />

          <Text style={styles.titulo}>Está certo ou errado?</Text>
          <TextInput
            style={styles.input}
            onChangeText={correctAnswer => this.setState({ correctAnswer })}
            value={this.state.correctAnswer}
          />

          <BotaoEnvio
            style={styles.submitBtn}
            onPress={() => this.enviarCarta(nomeBaralho)}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    fontSize: 34,
    color: "#292477"
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center"
  },

  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    backgroundColor: "#f26f28",
    borderRadius: 7,
    overflow: "hidden"
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 20,
    borderRadius: 7
  }
});

export default connect()(AddCard);
