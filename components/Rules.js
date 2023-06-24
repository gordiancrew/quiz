import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Rules({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.butTextStyle}>
        Игра содержит в себе отдельные( на данный момент один) квесты городского
        формата. В каждом квесте 9 локаций, каждая локация содержит три вопроса
        по ней. В начале игры доступна локация номер 1, остальные находятся под
        замком. Доступ ко второй локации вы получаете при успешных ответах на 3
        вопроса по первой локации, к третьей при ответе на вопросы по второй и т
        д. В каждой локации вы вводите свои ответ в боксы вопросов, когда ответ
        дан бокс меняет цвет с жёлтого на цвет фона и знак вопроса превращается
        в галочку. После ввода всех трёх версий появляется кнопка
        "отправить ответы" . Нажав на нее вы проверяете правильность ваших
        версий. Если один или несколько ответов не верны- вы получите
        соответствующее сообщение и останетесь на той же локации пока не дадите
        3 верных ответа. Какой ответ был неверным в игре не говорится, чтобы не
        было возможности подбирать варианты по отдельности. Каждый квест
        рассчитан на 3-4 часа по времени прохождения, и 7-8 км пешего хода по
        городу. Мы рады любым предложениям и отзывам по игре и с удовольствием
        ждём вашей обратной связи. Хорошего времяпровождения в нашей игре!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,

    // flex: 1,
    backgroundColor: "#2988bc",
    // alignItems: "center",
    // justifyContent: "space-around",

    height: "100%",
    width: "100%",
    // overflow: 'scroll'
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
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  logo: {
    width: "80%",
    height: "15%",
  },
});
