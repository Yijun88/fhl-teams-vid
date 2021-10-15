//const canvas = document.createElement('canvas');
//
//function onResults(results) {
////  canvasCtx.save();
////  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
////  canvasCtx.drawImage(
////      results.image, 0, 0, canvasElement.width, canvasElement.height);
//    const canvasCts = canvas.getContext('2d')
//    if (results.multiFaceLandmarks) {
//        for (const landmarks of results.multiFaceLandmarks) {
//          drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
//                         {color: '#C0C0C070', lineWidth: 1});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: '#FF3030'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {color: '#FF3030'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: '#30FF30'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {color: '#30FF30'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
//          drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {color: '#E0E0E0'});
//    }
//  }
//  canvasCtx.restore();
//}
//
//const faceMesh = new FaceMesh({locateFile: (file) => {
//  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
//}});
//faceMesh.setOptions({
//  maxNumFaces: 1,
//  refineLandmarks: true,
//  minDetectionConfidence: 0.5,
//  minTrackingConfidence: 0.5
//});
//faceMesh.onResults(onResults);

function initialize() {
    microsoftTeams.initialize(() => {}, [
        "https://Yijun88.github.io/fhl-teams-vid/",
    ]);//change to https://fhl.local:3000 for local dev
    microsoftTeams.appInitialization.notifySuccess();
    registerHandlers();
}

function registerHandlers() {
    microsoftTeams.video.registerForVideoEffect(effectParameterChanged);
    microsoftTeams.video.registerForVideoFrame(videoFrameHandler, {
        format: "NV12",
    });
}

function notifyEffectChange() {
    microsoftTeams.video.notifySelectedVideoEffectChanged("EffectChanged");
}

function notifyEffectDisable() {
    microsoftTeams.video.notifySelectedVideoEffectChanged("EffectDisabled");
}

function effectParameterChanged(effectName) {
    console.log(`Parameter changed. ${effectName}`);
}

function videoFrameHandler(videoFrame, notifyVideoProcessed) {
    try{
         var mat = cv.matFromImageData(videoFrame.data);

//        const normalArray = Array.from(videoFrame.data);
//        //nest the pixel channels
//        const channels = 4 //canvas pixels contain 4 elements: RGBA
//        const nestedChannelArray = _.chunk(normalArray, channels);
//        const nestedImageArray = _.chunk(nestedChannelArray, height);
//
//        //nestedImageArray is the correct shape to be converted to matrix.
//
//        const RGBAmat = new cv.Mat(nestedImageArray, cv.CV_8UC4);
//
//        //openCV often defaults to BGR-type image matrix, so lets color convert the pixel order
//
//        const BGRAmat = RGBAmat.cvtColor(cv.COLOR_RGBA2BGRA);
//
        console.log(BGRAmat.size);
        }
    catch(e)
    {
        console.log(e);
    }

//    console.log(videoFrame.data)
//    cv.line(mat, (0,0), (10,10), [0, 255, 0, 255], 1);
//    videoFrame.data =mat;
//    for (let i = 0; i < videoFrame.data.length; i++) {
//        // Invert the colors
//        videoFrame.data[i] = 255 -videoFrame.data[i];
//
//}
    notifyVideoProcessed();
}




initialize();
