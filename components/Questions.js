import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function Questions({ navigation }) {
    const [level, setLevel] = useState(0)
    useEffect(() => { getData() }, [])

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

    return (
        <View style={styles.container}>
            <Text style={styles.butTextStyle}>{level}</Text>
            <TouchableOpacity
                style={styles.but}
                onPress={() => {
                    navigation.goBack()

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
