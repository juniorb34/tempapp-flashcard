import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import DeckList from "../containers/DeckList";
import DeckView from "../containers/DeckView";
import AddCard from "../containers/AddCard";
import Quiz from "../containers/Quiz";
import CriarBaralho from "../containers/CriarBaralho";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Baralhos",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="animation-outline"
            size={34}
            color={tintColor}
          />
        )
      }
    },
    CriarBaralho: {
      screen: CriarBaralho,
      navigationOptions: {
        tabBarLabel: "Adicionar Baralho",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="plus-box-outline"
            size={34}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#292477",
      style: {
        height: 58,
        backgroundColor: "#fff"
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        title: "Info",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#292477"
        }
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: "Adicionar Carta",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#292477"
        }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: "Questionário",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#292477"
        }
      }
    }
  }
});

export default createAppContainer(AppNavigator);
