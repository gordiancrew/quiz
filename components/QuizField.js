import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
  useWindowDimensions,
  Keyboard
} from "react-native";
import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
const image = { url: "../asses/ratusha.jpg" };
const pathLoc1 = "../assets/locations/loc1.png";
let path = "";
import { storage } from "./data";

export default function QuizField(props) {
  const { height } = useWindowDimensions();
  const count = 3;
  const [level, setLevel] = useState(1);
  const [isDescription, setIsDescription] = useState(true);
  useEffect(() => {
    getData();
  });

  setData = async (val) => {
    try {
      await AsyncStorage.setItem(
        `level${props.route.params.itemId}`,
        val.toString()
      );
    } catch (error) {}
  };
  getData = async () => {
    try {
      val = await AsyncStorage.getItem(`level${props.route.params.itemId}`);
      if (val !== null) {
        setLevel(+val);
      }
    } catch (error) {}
  };

  const translation = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;
  // const hh = pulse.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0%", "100%"],
  // });
  // const testStyle = { transform: [{ translateX: pulse }, ]};
  useEffect(() => {
    setInterval(() => {
      {
        Animated.timing(pulse, {
          toValue: 0.3,

          duration: 800,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          Animated.timing(pulse, {
            toValue: 0.0,

            duration: 800,
            useNativeDriver: true,
          }).start();
        }, 800);
      }
    }, 1600);
  }, []);

  function go() {
    isDescription
      ? Animated.timing(translation, {
          toValue: height,

          duration: 1000,
          useNativeDriver: true,
        }).start()
      : Animated.timing(translation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.noFinal,
          storage.data.quests[props.route.params.itemId].final
            ? { display: "none" }
            : {},
        ]}
      >
        <Text style={styles.butTextStyle}>
          Этот квест пока что в стадии разработки! Скоро поиграем!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.desc}
        onPress={() => {
          go();
          setIsDescription(!isDescription);
        }}
      >
        <Text style={styles.descTextStyle}>
          {isDescription ? "Описание квеста" : "Скрыть описание"}
        </Text>
      </TouchableOpacity>
      {/* <Animated.View style={[styles.test, testStyle]}></Animated.View> */}
     
      <Animated.View
        style={[
          styles.descField,
          {
            transform: [
              {
                translateY: translation,
              },
            ],
          },
        ]}
      >
        <Text style={{ color: "black", fontSize: 18, textAlign: "center" }}>
          {storage.data.quests[props.route.params.itemId].description}
        </Text>
      </Animated.View>
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
        <Text style={styles.butTextStyle}>
          Квест: "{storage.data.quests[props.route.params.itemId].name}"
        </Text>
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
          <View style={{ position: "relative", margin: "5%",display:"flex",justifyContent:'center',alignItems:'center' }}>
            <Animated.View
              style={[index!==level-1?{display:'none'}:{},
                styles.test,
                {
                  opacity: pulse,
                },
              ]}
            ></Animated.View>
            <TouchableOpacity
              disabled={level === index + 1 ? false : true}
              onPress={() => {
                path = `../assets/locations/loc${1}.png`;
                if (level === index + 1) {
                  setData(item.level);
                  props.navigation.navigate("Questions", {
                    itemId: props.route.params.itemId,
                  });
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
          </View>
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
  descTextStyle: {
    color: "white",
    fontSize: 18,

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
    // margin: "5%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "grey",
    zIndex:11,
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
  frame: {
    width: 300,
    // height: 80,
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
  desc: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed8c72",
    position: "absolute",
    zIndex: 90,
    color: "rgb(74, 9, 5)",
    width: 300,
    height: 50,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  descField: {
    // display: "none",
    opacity: 0.93,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "170%",
    // height: "150%",
    // bottom: 0,
    top: "-170%",
    left: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noFinal: {
    opacity: 0.9,
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "170%",
    // height: "150%",
    // bottom: 0,
    top: 0,
    left: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // test: {
  //   position: "absolute",
  //   backgroundColor: "red",
  //   width: 100,
  // },
  test: {
    position: "absolute",
    // // opacity:1,
    // top: 300,

    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius:50,
    zIndex: 9,
  },
});
