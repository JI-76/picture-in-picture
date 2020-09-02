// pictureinpicture.js

// Constants for HTML elements
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Asynch Function - prompt user to select media stream, pass to Video element.
async function selectMediaStream() {
    try {
        // constant for media stream content
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // once media stream content is selected use it as a source for our Video Element <video>     
        videoElement.srcObject = mediaStream;
        // once media stream content is loaded; play
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error
        console.log('Error:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button after being clicked
    button.disabled = true;
    // Start Picture In Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// On Load
selectMediaStream();