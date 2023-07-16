import { StyleSheet, Text, TouchableOpacity, View,FlatList } from "react-native";
import { storage } from "./data";

export default function Game({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={[styles.butTextStyle,{marginBottom:20}]}>КВЕСТЫ:</Text>
      {/* <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("QuizField")}
      >
        <Text style={styles.butTextStyle}>Квест 1: "От ратуши"</Text>
      </TouchableOpacity> */}
      <FlatList
        style={styles.list}
        // numColumns={3}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={storage.data.quests}
        renderItem={({ item, index }) => (
          <TouchableOpacity
          style={styles.but}
          onPress={() => navigation.navigate("QuizField",{itemId:index})}
        >
          <Text style={styles.butTextStyle}>{item.name}</Text>
        </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: "#2988bc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    // flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed8c72",
    color: "rgb(74, 9, 5)",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop:20,
  },
  butTextStyle: {
    color: "#f4eade",
    fontSize: 20,
    fontWeight:700,
  },
  list: {
    width: 700,
  },
});
