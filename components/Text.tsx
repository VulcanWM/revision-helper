//@ts-nocheck
"use client";
import 'regenerator-runtime/runtime'
import { FC, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from './ui/button';

interface TextProps {
  onTranscriptChange: (transcript: string) => void;
}

const Text: FC<TextProps> = ({ onTranscriptChange }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  // Call the callback function whenever the transcript changes
  if (transcript !== "") {
    onTranscriptChange(transcript);
  }

  return (
    <div>
      <p>
        <span>generated text:</span>
        {transcript}
      </p>
      <p>Microphone: {listening ? 'Listening to your voice..' : 'off'}</p>
      <div className="flex gap-4">
        <Button onClick={SpeechRecognition.startListening}>Start</Button>
        <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
        <Button onClick={resetTranscript}>Reset</Button>
      </div>
    </div>
  );
};

export default Text;