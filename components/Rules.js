import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

// import Mapbox from "@rnmapbox/maps";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYW5kcmVpcGF2bG92IiwiYSI6ImNsa2R1YnNuYTBkbXkzZm1tZ25sNjZlcGwifQ.SHu_jGOP_fRgECuMqWIHlQ"
);

const Rules = () => {
  // const [calloutVisible, setCalloutVisible] = useState(false);

  // const [coordinates] = useState([-5, 55]);

  // const onMarkerPress = () => {
  //   setCalloutVisible(true);
  // };

  // const loadAnnotationUK = () => {
  //   return (
  //     <Mapbox.PointAnnotation
  //       key="annotationUK"
  //       id="annotationUK"
  //       coordinate={[0.1, 51.5]}
  //       onSelected={onMarkerPress}
  //     >
  //       <View
  //         style={{
  //           height: 20,

  //           width: 20,

  //           backgroundColor: "green",

  //           borderColor: "black",

  //           borderWidth: 2,

  //           borderRadius: 50,
  //         }}
  //       ></View>

  //       <Mapbox.Callout
  //         title="Welcome to London!"
  //         contentStyle={{ borderRadius: 5 }}
  //       ></Mapbox.Callout>
  //     </Mapbox.PointAnnotation>
  //   );
  // };

  return (
    <View style={styles.page}>
      {/* <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera zoomLevel={4} centerCoordinate={coordinates} />

          <Mapbox.PointAnnotation id="uk" coordinate={coordinates} />

          <View>{loadAnnotationUK()}</View>
        </Mapbox.MapView>
      </View> */}
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default Rules;

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  container: {
    height: "100%",

    width: "100%",
  },

  map: {
    flex: 1,
  },
});
