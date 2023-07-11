import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
const image = { url: "../asses/ratusha.jpg" };
const pathLoc1 = "../assets/locations/loc1.png";
let path = "";
import { storage } from "./data";

export default function QuizField(props) {
  const count = 3;
  const [level, setLevel] = useState(1);
  useEffect(() => {
    getData();
  });

  setData = async (val) => {
    try {
      await AsyncStorage.setItem("level", val.toString());
    } catch (error) {}
  };
  getData = async () => {
    try {
      val = await AsyncStorage.getItem("level");
      if (val !== null) {
        setLevel(+val);
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.modal,
          level === 10 ? { display: "flex" } : { display: "none" },
        ]}
      >
        <Image
          source={require("../assets/end.jpg")}
          resizeMode="cover"
          style={styles.imageEnd}
        ></Image>
        <TouchableOpacity
          style={styles.but}
          onPress={() => {
            setData(1);
            setLevel(1);
          }}
        >
          <Text style={styles.butTextStyle}>Перезапустить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frame}>
        <Text style={styles.butTextStyle}>Квест: "{storage.data.quests[props.route.params.itemId].name}"</Text>
      </View>
      <FlatList
        style={styles.list}
        numColumns={3}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={storage.data.quests[props.route.params.itemId].location}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            disabled={level === index + 1 ? false : true}
            onPress={() => {
              path = `../assets/locations/loc${1}.png`;
              if (level === index + 1) {
                setData(item.level);
                props.navigation.navigate("Questions");
              }
            }}
            style={[
              styles.point,
              level > index + 1
                ? {
                    disabled: "disabled",
                  }
                : level === index + 1
                ? {
                    backgroundColor: "#ed8c72",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  }
                : {},
            ]}
          >
            <ImageBackground
              source={
                index + 1 <= level ? item.path : require("../assets/lock.png")
              }
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 70,
    paddingBottom: 70,
    display: "flex",
    // flex: 1,
    backgroundColor: "#2988bc",
    alignItems: "center",
    // justifyContent: "space-around",
  },

  butTextStyle: {
    color: "white",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
  },
  logo: {
    width: "80%",
    height: "15%",
  },
  point: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: "5%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "grey",
  },
  // list: {
  //   backgroundColor: "green",

  // },
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
  frame: {
    width: 300,
    height: 80,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  modal: {
    display: "none",
    position: "absolute",
    backgroundColor: "#2988bc",
    width: "100%",
    // height: "150%",
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageEnd: {
    height: "50%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  but: {
    marginTop: 30,
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed8c72",
    color: "rgb(74, 9, 5)",
    width: "80%",
    height: 30,
    borderRadius: 10,
  },
});
