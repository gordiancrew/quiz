import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Developers({ navigation }) {
  const data = ["1", "2", "3", "4", "5"];
  const count = 3;
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item, index) => item?.index}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.point,
              count > index ? { backgroundColor: "black" } :count===index?{ backgroundColor: "yellow" }: {},
            ]}
          >
            <Text style={styles.pointTextStyle}>{item} </Text>
          </View>
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
    padding: 20,
    textAlign: "center",
  },
  logo: {
    width: "80%",
    height: "15%",
  },
  point: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 20,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  list: {
    width: 200,
    backgroundColor: "green",
  },
  pointTextStyle: {
    color: "white",
  },
});
