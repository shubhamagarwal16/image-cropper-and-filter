let captureMethod = ''
const videoTag = document.getElementById('videoTag')

function setCaptureMethod(val) {
    captureMethod = val
    document.getElementById("buttonsContainer").classList.toggle('d-none')
    console.log(val)
    if (val === 'captureImage') {
        startCamera()
        return;
    }
    ImageUploader()
}
// --------------------------------------------------CAMERA--------------------------------------
function startCamera() {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        const startCamera = navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                height: {
                    ideal: 720
                },
                width: {
                    ideal: 1280
                }
            }
        })
        startCamera.then(stream => {
            document.getElementById('captureImageContainer').classList.toggle('d-none')
            videoTag.width = .6 * window.innerWidth
            window.stream = stream
            videoTag.srcObject = stream
            videoTag.play()
        })

    }
    else alert("[Error in accessing camera]")
}
function captureImage(data) {
    const canvas = document.getElementById('imageCanvas')
    document.getElementById('canvasContainer').classList.toggle('d-none')
    const ctx = canvas.getContext('2d')
    ctx.drawImage(data, 0, 0)

}
// --------------------------------------------------CAMERA--------------------------------------
//---------------------------------- IMAGE UPLOAD----------------------------------
function ImageUploader() {
    document.getElementById("uploadImageContainer").classList.toggle("d-none")
}
function startImageUploader() {
    const image = document.forms['uploadFileForm']['upload'].files[0]
    console.log(image)
    captureImage(image.name)
}
//---------------------------------- IMAGE UPLOAD----------------------------------