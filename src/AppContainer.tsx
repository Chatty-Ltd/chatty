import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Camera, CameraType } from 'expo-camera';
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
import Reanimated from 'react-native-reanimated';
// import { useRef } from 'react';
import { useCallback } from 'react';

const AppContainer = () => {
  const devices = useCameraDevices();
  const camera = useRef<Camera>(null)
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('front');
  // const [faces, setFaces] = React.useState<Face[]>();

  const device = devices[cameraPosition];

  useEffect(() => {
    getPermission();
  }, [device]);  

  const getPermission = useCallback(async () => {
    await Camera.requestCameraPermission();
    await Camera.requestMicrophonePermission()
  }, []);

  const handleSwitchTypeCamera = useCallback(() => {
    if (cameraPosition === 'back') {
      setCameraPosition('front');
    } else {
      setCameraPosition('back');
    }
  }, [cameraPosition]);

  const takePhoto = useCallback(async () => {
    if (camera) {
      const photo = await camera?.current?.takePhoto()
      console.log('photo =====>', photo)
    }
  }, []);

   const frameProcessor = useFrameProcessor((frame) => {
      'worklet'
      // console.log('frame =====>', JSON.stringify(frame));
      // takePhoto();
  }, [])

  const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
    Reanimated.addWhitelistedNativeProps({
    zoom: true,
  });
  

  return (
    <View>
      {device && (
        <View style={styles.container}>
          <ReanimatedCamera
            style={styles.cameraContainer}
            device={device}
            isActive
            ref={camera}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
            preset="high"
            photo={true}
          />
          <TouchableOpacity style={styles.switchCameraButton} onPress={handleSwitchTypeCamera}>
            <Text>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchCameraButton} onPress={takePhoto}>
            <Text>Take</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  switchCameraButton: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppContainer;
