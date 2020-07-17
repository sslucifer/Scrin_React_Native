import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { ScreenOrientation } from "expo";
import VideoPlayer from "expo-video-player";
const { width, height } = Dimensions.get("window");
export default function Play_VideO() {
  // const [orientationIsLandscape, setOrientationIsLandscape] = useState(false);

  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          alignContent: "center",
          flex: 1,
          marginTop: "10%",
        }}
      >
        {/* <Video
          // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls={true}
          isLooping={false}
          // onFullscreenUpdate={async () => {
          //   await ScreenOrientation.lockAsync(
          //     orientationIsLandscape
          //       ? ScreenOrientation.OrientationLock.PORTRAIT
          //       : ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
          //   );
          //   setOrientationIsLandscape(!orientationIsLandscape);
          // }}
          style={styles.Player}
        /> */}
        <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri:
                "http://fash1043.cloudycdn.services/slive/_definst_/ftv_pg16_adaptive.smil/playlist.m3u8",
            },
          }}
          inFullscreen={false}
          width={width}
          height={height / 3}
          showControlsOnLoad={true}
        />
        <Text style={{ textAlign: "center" }}> Video Player Is Above!! </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Player: {
    width: width,
    height: height / 3,
  },
});
