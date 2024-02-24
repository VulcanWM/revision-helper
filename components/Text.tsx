//@ts-nocheck
"use client";
import 'regenerator-runtime/runtime'
import { FC } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface TextProps {}

const Text: FC<TextProps> = ({}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <p>
        <span>generated text:</span>
        {transcript}
      </p>
        <p>Microphone: {listening ? 'Listing to your voice..' : 'off'}</p>
      <div className="flex gap-3">
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};

export default Text;