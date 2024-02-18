import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState(Camera.Constants.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        flashMode={flash}
      >
        <Image
          style={styles.object}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  object: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});

export default CameraView;
