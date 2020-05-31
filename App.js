import React, {useState} from 'react';
import styled from 'styled-components';
import {RNCamera} from 'react-native-camera';

import constnats from './constants';
import constants from './constants';

const Container = styled.View`
  height: ${constnats.height};
  width: ${constants.width};
  background: blue;
  position: absolute;
`;

const ControlContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  width: 100%
  height: 200;
`;

//width: constants.width;
const EmptyContainer = styled.View`
  background: red;
  height: 100;
  width: ${constnats.width}

  left: 0;
  top: 0;
  position: absolute;
`;

const Text = styled.Text``;

const Button = styled.View`
  width: 100;
  height: 100;
  border-radius: 50;
  margin-left: 20;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-top: 20;
`;

const Touchable = styled.TouchableOpacity``;
const CameraRef = React.createRef();

const App = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [CameraIds, setCameraIds] = useState([]);

  const [cameraZoom, setCameraZoom] = useState(0);
  const [cameraLeft, setCameraLeft] = useState(0);
  const [cameraTop, setCameraTop] = useState(0);

  const loopCamera = () => {
    if (cameraZoom < 1) {
      setCameraZoom((p) => p + 0.1);
    } else {
      setCameraZoom(0);
    }
    console.log(cameraZoom);
  };

  const leftCamera = () => {
    setCameraLeft((p) => p - 100);
    console.log('Camera Left: ', cameraLeft);
  };

  const rightCamera = () => {
    setCameraLeft((p) => p + 100);
    console.log('Camera Left: ', cameraLeft);
  };

  return (
    <Container>
      <RNCamera
        ref={CameraRef}
        ratio="1:1"
        style={{
          top: cameraTop,
          left: cameraLeft,
          width: constnats.width,
          height: 500,
        }}
        type={RNCamera.Constants.Type.back}
        zoom={cameraZoom}
        captureAudio={false}
      />
      <EmptyContainer />
      <ControlContainer>
        <Touchable onPress={leftCamera}>
          <Button>
            <Text>Left</Text>
          </Button>
        </Touchable>
        <Touchable onPress={loopCamera}>
          <Button>
            <Text>Zoom</Text>
          </Button>
        </Touchable>
        <Touchable onPress={rightCamera}>
          <Button>
            <Text>Right</Text>
          </Button>
        </Touchable>
      </ControlContainer>
    </Container>
  );
};

/**
 * 
      <ControlContainer>
        <Text>Test</Text>
        <Touchable onPress={loopCamera}>
          <Button />
        </Touchable>
      </ControlContainer>
 */

/**
  const onCameraStatusChange = async (s) => {
    let ids = [];
    let cameraId = null;

    if (s.cameraStatus == 'READY') {
      try {
        ids = await this.camera.getCameraIdsAsync();

        if (ids.length) {
          //  cameraId = ids[0].id;
          console.log(ids);
        }
      } catch (err) {
        console.error('Failed to get camera ids', err.meeage || err);
      }
    }
  };

   */

export default App;
