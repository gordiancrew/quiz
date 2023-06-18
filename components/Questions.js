import { StyleSheet, Text, View, TouchableOpacity, Image,  FlatList,ImageBackground} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { storage } from "./data";

const quests = ["quest1", "quest2", "quest3"];
export default function Questions(props) {
  const [level, setLevel] = useState(1);
  useEffect(() => {
    getData();
  }, []);

  getData = async () => {
    try {
      val = await AsyncStorage.getItem("level");
      if (val !== null) {
        // We have data!!
        setLevel(+val);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  setData = async (val) => {
    try {
      await AsyncStorage.setItem("level", val.toString());
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.butTextStyle}>{level}</Text> */}
      <Image
        style={styles.imageLocation}
        source={storage.data.quest1.location[level - 1].path}
      />
      <FlatList
        style={styles.list}
        numColumns={3}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={quests}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {}}
            style={[
              styles.question,
          
               {
                    backgroundColor: "green",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  }
               
            ]}
          >
            <Text style={styles.questTextStyle}>?</Text>
           
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.but}
        onPress={() => {
          level !== 9 ? setData(level + 1) : setData(1);
          props.navigation.navigate("QuizField", { name: "uu" });
        }}
      >
        <Text style={styles.butTextStyle}>Next level</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: "#7c422e",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    // flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#401506",
    color: "white",

    width: "80%",
    height: 50,

    borderRadius: 10,
  },
  butTextStyle: {
    color: "#e3e485",
    fontSize: 20,
  },
  questTextStyle: {
    color: "white",
    fontSize: 30,
  },
  logo: {
    width: "80%",
    height: "15%",
  },
  imageLocation: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    // backgroundColor: "green",
    width: "100%",
  },
  pointTextStyle: {
    color: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLocation: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    width: 80,
    height: 80,
    borderRadius: 20,
    margin: "5%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "grey",

   
  },
});
