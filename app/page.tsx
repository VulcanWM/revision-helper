"use client"

import React, { useState } from "react";
import dynamic from "next/dynamic";
import TextRecognition from "@/components/TextRecognition";
import { Button } from "@/components/ui/button";

const Text = dynamic(() => import("../components/Text"), {
  ssr: false,
});

export default function IndexPage() {
  const [transcript, setTranscript] = useState("");
  const [recognizedText, setRecognizedText] = useState("");

  // Callback function to update the transcript state
  const handleTranscriptChange = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  // Callback function to update the recognized text state
  const handleRecognizedTextChange = (newRecognizedText: string) => {
    setRecognizedText(newRecognizedText);
  };

  function check(){
    console.log(transcript)
    console.log(recognizedText)
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Revision Helper
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          What do you know?
        </p>
      </div>
      <Text onTranscriptChange={handleTranscriptChange} />
      <TextRecognition onRecognizedTextChange={handleRecognizedTextChange} />
      <Button onClick={check}>Check</Button>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
      <div>
        <h2>Recognized Text:</h2>
        <p>{recognizedText}</p>
      </div>
    </section>
  );
}