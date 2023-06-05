import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./components/Main";
import Game from "./components/Game";
import Rules from "./components/Rules";
import Developers from "./components/Developers";
import QuizField from "./components/QuizField";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Developers" component={Developers} />
        <Stack.Screen name="QuizField" component={QuizField} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    marginTop: 50,
    marginBottom: 50,

    flex: 1,
    backgroundColor: "#7c422e",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#401506",
    color: "white",

    width: "80%",
    height: 30,

    borderRadius: 10,
  },
  butTextStyle: {
    color: "#e3e485",
    fontSize: 20,
  },
  logo: {
    width: "80%",
    height: "15%",
  },
});
