import React, { useRef, useState } from 'react';

const Scanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [imageData, setImageData] = useState(null);

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Votre navigateur ne supporte pas l'accès à la caméra.");
      return;
    }
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: 'environment' } }, // 'exact' demande spécifiquement la caméra arrière
      });
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
        setIsCameraOn(true);
      };
    } catch (err) {
      console.error("Erreur d'accès à la caméra :", err);
      alert("Impossible d'accéder à la caméra arrière. Vérifiez les paramètres de votre appareil.");
    }
  };
  
  

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  const takePicture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        setImageData(blob);
      }, 'image/jpeg');
      
      stopCamera();
    }
  };

  const sendImageToAPI = async () => {
    if (!imageData) return;

    const formData = new FormData();
    formData.append('file', imageData, 'snapshot.jpg');

    try {
      const response = await fetch('https://your-api-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image successfully uploaded!');
      } else {
        console.error('Image upload failed');
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi de l'image à l'API :", err);
      alert("Échec de l'envoi de l'image. Veuillez réessayer.");
    }
  };

  return (
    <section id="scanner" className="w-screen min-h-screen">
      <div className="max-container flex justify-center items-center gap-0 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col">
        <div className="flex-1 w-full">
          <div className='my-1 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <p className='text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>FOOD SCANNER</p>
            <h1>SCAN YOUR FOOD HERE</h1>
            {!isCameraOn && (
              <button onClick={startCamera} className="py-2 px-5 text-xl group relative text-white bg-[orangered] rounded-sm">
                Start Camera
              </button>
            )}
          </div>
          <video
            ref={videoRef}
            autoPlay
            className="object-cover object-center max-lg:w-full"
            style={{ display: isCameraOn ? 'block' : 'none' }}
          ></video>
          <canvas ref={canvasRef} className="object-cover object-center max-lg:w-full" style={{ display: imageData ? 'block' : 'none' }}></canvas>
        </div>
        <div>
          {isCameraOn && (
            <button onClick={takePicture} className="py-4 px-4 text-xl group relative text-white bg-[orangered] rounded-sm">
              Take Picture
            </button>
          )}
          {imageData && (
            <button onClick={sendImageToAPI} className="py-4 px-4 mx-2 text-xl group relative text-white bg-[orangered] rounded-sm">
              Send to API
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Scanner;
