import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { storage } from "./data";

export default function Questions(props) {
  const [modal, setModal] = useState(false);
  const [trueModal, setTrueModal] = useState(false);
  const [falseModal, setFalseModal] = useState(false);
  const [level, setLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("7");
  const [checkAnswers, setCheckAnswers] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  getData = async () => {
    try {
      val = await AsyncStorage.getItem(`level${props.route.params.itemId}`);
      if (val !== null) {
        setLevel(+val);
      }
    } catch (error) {}
  };
  setData = async (val) => {
    try {
      await AsyncStorage.setItem(
        `level${props.route.params.itemId}`,
        val.toString()
      );
    } catch (error) {}
  };
  trueModalAction = () => {
    setTrueModal(true);
  };
  falseModalAction = () => {
    setFalseModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.butTextStyle}>
          {storage.data.quests[0].location[level - 1].locationName}
        </Text>
      </View>
      <View
        style={[
          styles.modal,
          falseModal ? { display: "flex" } : { display: "none" },
        ]}
      >
        <ImageBackground
          source={require("../assets/error.png")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View
        style={[
          styles.modal,
          trueModal ? { display: "flex" } : { display: "none" },
        ]}
      >
        <ImageBackground
          source={require("../assets/true.png")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View
        style={[
          styles.modal,
          modal ? { display: "flex" } : { display: "none" },
        ]}
      >
        <View style={styles.modalQuestionField}>
          <TouchableOpacity style={styles.back} onPress={() => setModal(false)}>
            <Text style={styles.butTextStyle}>✖</Text>
          </TouchableOpacity>
          <View style={styles.frameQuestion}>
            <Text style={styles.butTextStyle}>
              Вопрос {currentQuestion + 1}
            </Text>
          </View>
          <Text style={styles.modalTextStyle}>
            {
              storage.data.quests[0].location[level - 1].questions[
                currentQuestion
              ]
            }
          </Text>
        </View>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Введите ответ"
          style={styles.input}
          defaultValue={
            currentQuestion === 0
              ? answer1
              : currentQuestion === 1
              ? answer2
              : answer3
          }
          onChangeText={(text) => setCurrentAnswer(text)}
        />
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => {
            {
              currentQuestion === 0
                ? setAnswer1(currentAnswer)
                : currentQuestion === 1
                ? setAnswer2(currentAnswer)
                : setAnswer3(currentAnswer);
            }
            setCurrentAnswer("");
            setModal(false);
          }}
        >
          <Text style={styles.butTextStyle}>Ответить</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageLocation}
        source={storage.data.quests[0].location[level - 1].path}
      />
      <FlatList
        style={styles.list}
        numColumns={3}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={storage.data.quests[0].location[level - 1].questions}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setModal(true);
              setCurrentQuestion(index);
            }}
            style={[
              styles.question,
              (index === 0 && answer1) ||
              (index === 1 && answer2) ||
              (index === 2 && answer3)
                ? {
                    backgroundColor: "#2988bc",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  }
                : {
                    backgroundColor: "#ed8c72",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  },
            ]}
          >
            <Text style={styles.questTextStyle}>
              {(index === 0 && answer1) ||
              (index === 1 && answer2) ||
              (index === 2 && answer3)
                ? "✓"
                : "?"}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        disabled={answer1 && answer2 && answer3 ? false : true}
        style={[
          styles.buttonSubmit,
          answer1 && answer2 && answer3
            ? {
                backgroundColor: "#ed8c72",
                borderColor: "white",
                borderWidth: 2,
              }
            : { backgroundColor: "grey", display: "none" },
        ]}
        onPress={() => {
          if (
            storage.data.quests[0].location[
              level - 1
            ].answers[0].toUpperCase() === answer1.toUpperCase() &&
            storage.data.quests[0].location[
              level - 1
            ].answers[1].toUpperCase() === answer2.toUpperCase() &&
            storage.data.quests[0].location[
              level - 1
            ].answers[2].toUpperCase() === answer3.toUpperCase()
          ) {
            if (level === 9) {
              setData(level + 1);
              props.navigation.navigate("QuizField", {
                name: "uu",
                itemId: props.route.params.itemId,
              });
            } else {
              trueModalAction();
              setTimeout(() => {
                setData(level + 1);
                props.navigation.navigate("QuizField", {
                  name: "uu",
                  itemId: props.route.params.itemId,
                });
              }, 2000);
            }
          } else {
            falseModalAction();
            setAnswer1("");
            setAnswer2("");
            setAnswer3("");
            setTimeout(() => {
              setFalseModal(false);
            }, 2000);
          }
        }}
      >
        <Text style={styles.butTextStyle}>Отправить ответы</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 80,
    height: "100%",
    // flex: 1,
    backgroundColor: "#2988bc",
    alignItems: "center",
    // justifyContent: "space-around",
    position: "relative",
  },

  buttonSubmit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#401506",
    color: "white",
    marginTop: 10,
    width: 320,
    height: 70,

    borderRadius: 10,
    backgroundColor: "#ed8c72",
    borderColor: "white",
  },
  butTextStyle: {
    color: "white",
    fontSize: 20,
  },
  modalTextStyle: {
    color: "white",
    fontSize: 16,
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
    width: "100%",
  },
  pointTextStyle: {
    color: "white",
  },
  image: {
    height: "70%",
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
  modal: {
    display: "flex",
    position: "absolute",
    backgroundColor: "#2988bc",
    width: "100%",
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalQuestionField: {
    display: "flex",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "60%",
  },
  input: {
    backgroundColor: "#f4eade",
    color: "black",
    textAlign: "center",
    width: 320,
    height: 70,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 22,
  },
  frame: {
    // backgroundColor:'red',
    width: 300,
    height: 80,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
    // marginBottom: 40,
  },
  frameQuestion: {
    width: 300,
    height: 80,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: -90,
    // marginBottom: 20,
  },
  back: {
    display: "flex",

    alignItems: "center",
    position: "absolute",
    top: -40,
    right: -40,
    width: 50,
    height: 40,
    backgroundColor: "#ed8c72",
    borderRadius: 5,
  },
});
