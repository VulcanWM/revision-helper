//@ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

interface TextRecognitionProps {
  onRecognizedTextChange: (newRecognizedText: string) => void;
}

const TextRecognition: React.FC<TextRecognitionProps> = ({ onRecognizedTextChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage);
        const newRecognizedText = result.data.text;
        setRecognizedText(newRecognizedText);

        // Notify the parent component (IndexPage) about the recognized text change
        onRecognizedTextChange(newRecognizedText);
      }
    };

    recognizeText();
  }, [selectedImage, onRecognizedTextChange]);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      <h2>Recognized Text:</h2>
      <p>{recognizedText}</p>
    </div>
  );
};

export default TextRecognition;