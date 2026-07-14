import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Background from "../components/Background";
import CharacterSprite from "../components/CharacterSprite";
import DialogueBox from "../components/DialogueBox";
import type { TypewriterHandle } from "../components/Typewriter";

import type { EndingData } from "../types/Ending";

import SoundManager from "../utils/SoundManager";

interface Props {
  ending: EndingData;
  score: number;
  onRestart: () => void;
}

export default function Ending({
  ending,
  score,
  onRestart,
}: Props) {

  const [index, setIndex] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const typewriterRef = useRef<TypewriterHandle>(null);

  const dialogue = ending.dialogues[index];

  useEffect(() => {

    SoundManager.bgm.stop();

    SoundManager.ending.play();

    return () => {
      SoundManager.ending.stop();
    };

  }, []);

  const next = () => {

    SoundManager.click.play();

    const typewriter = typewriterRef.current;

    if (!typewriter?.isFinished()) {
      typewriter?.skip();
      return;
    }

    if (index < ending.dialogues.length - 1) {

      setIndex(index + 1);

    } else {

      setShowResult(true);

    }

  };

  if (showResult) {

    return (

      <motion.div
        className="absolute inset-0 bg-black flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            The End
          </h1>

          <h2 className="mt-8 text-4xl">
            {ending.title}
          </h2>

          <p className="mt-8 text-2xl">
            Điểm: {score}
          </p>

          <button
            onClick={onRestart}
            className="
              mt-12
              rounded-xl
              bg-blue-600
              px-8
              py-3
              text-xl
              hover:bg-blue-700
              transition
            "
          >
            Chơi lại
          </button>

        </div>

      </motion.div>

    );

  }

  return (

    <div
      className="relative w-screen h-screen overflow-hidden"
      onClick={next}
    >

      <Background image={dialogue.background} />

      <AnimatePresence mode="wait">

        {dialogue.characters.map((character) => (

          <CharacterSprite
            key={character.id}
            image={character.image}
            position={character.position}
            active={character.id === dialogue.speaker}
          />

        ))}

      </AnimatePresence>

      <DialogueBox
        ref={typewriterRef}
        speaker={dialogue.speaker}
        text={dialogue.text}
      />

    </div>

  );

}