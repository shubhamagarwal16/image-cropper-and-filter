import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const ImageCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(props)
      props.history.push('/tool', { imageSrc })
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <div onClick={capture} className="overlayContainer">
        <div className="overlay captureTxt text-center">
          Click on screen to capture image
        </div>
      </div>
    </>
  );
}

export default ImageCapture;