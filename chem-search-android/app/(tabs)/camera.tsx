import styles from "@/constants/Styles";
import { Text } from "@react-navigation/elements";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import { Button, ImageBackground, TouchableOpacity, View } from "react-native";

// TODO - WORK ON

const background = require("@/assets/images/background.jpeg");

const Cam = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [uri, setUri] = useState<string | null>(null);
  const camRef = useRef<CameraView>(null);

  if (!permission) {
    // aslong as permission != response
    return <View></View>;
  }

  if (!permission.granted) {
    // handles permission request
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={[styles.textBack, { fontSize: 20 }]}>
            We need your permission to show the camera
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              { marginHorizontal: 100, marginVertical: 20 },
            ]}
            onPress={requestPermission}
          >
            <Text style={[styles.buttonText, { fontSize: 16 }]}>
              GRANT PERMISSION
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    // handles camera flipping
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    // handles picture taking
    // TODO - invariant onCameraReady
    const picture = await camRef.current?.takePictureAsync();
    setUri(picture?.uri); // FIXME wird doch nicht ausgeführt wenn undefined?! 
    console.log(uri);
  };


  const submitPicture = () => { // TODO - work on here


  }

  const renderPicture = () => {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri }}
          contentFit="contain"
          style={{ width: 300, aspectRatio: 1 }}
        />
        <Button
          onPress={() => setUri(null)}
          title="Take another picture"
        />

        <View style={[styles.buttonContainer, {bottom:100}]}>
          <TouchableOpacity style={styles.button} onPress={submitPicture}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // if permission granted:
  const renderCamera = () => {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.textBack}>Camera</Text>
        <CameraView
          style={[
            styles.camera,
            { justifyContent: "center", alignItems: "center" },
          ]}
          facing={facing}
          ref={camRef}
        />

        <View style={[styles.buttonContainer, { bottom: 1 }]}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Take a Picture</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, { top: 50 }]}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "red", padding: 1, height: 40 },
            ]}
            onPress={toggleCameraFacing}
          >
            <Text style={[styles.buttonText, { fontSize: 18 }]}>
              Flip Camera
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  return <View style={styles.container}>
    {uri ? renderPicture() : renderCamera()}</View>;
};

export default Cam;
