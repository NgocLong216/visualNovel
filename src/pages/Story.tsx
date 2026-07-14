import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { stories } from "../data";

import Background from "../components/Background";
import CharacterSprite from "../components/CharacterSprite";
import DialogueBox from "../components/DialogueBox";
import type { TypewriterHandle } from "../components/Typewriter";
import { AnimatePresence } from "framer-motion";
import ChoiceBox from "../components/ChoiceBox";
import type { Choice } from "../types/story";
import { endings } from "../data/endings";
import type { EndingData } from "../types/Ending";
import Ending from "./Ending";
import SoundManager from "../utils/SoundManager";

import correctImg from "../assets/ui/correct.png";
import wrongImg from "../assets/ui/wrong.png";

type CharacterKey = keyof typeof endings;

export default function Story() {
    const { character } = useParams();
    const characterKey = character as CharacterKey;

    const story = stories[character as keyof typeof stories];

    const [currentId, setCurrentId] = useState(1);

    const dialogue = story.find(item => item.id === currentId)!;

    const [emoteImage, setEmoteImage] = useState<string | null>(null);

    const typewriterRef = useRef<TypewriterHandle>(null);

    const [ending, setEnding] = useState<EndingData | null>(null);

    const [score, setScore] = useState(0);

    const showEnding = () => {
        if (score >= 80) {
            setEnding(endings[characterKey].good);
        } else if (score >= 50) {
            setEnding(endings[characterKey].normal);
        } else {
            setEnding(endings[characterKey].bad);
        }

    };

    const handleChoice = (choice: Choice) => {

        setScore(prev => prev + (choice.score ?? 0));

        if ((choice.score ?? 0) >= 10) {
            setEmoteImage(correctImg);
            console.log(correctImg);
            SoundManager.correct.play();
        } else {
            setEmoteImage(wrongImg);
            SoundManager.wrong.play();
        }

        setTimeout(() => {

            setEmoteImage(null);

            setCurrentId(choice.nextId);

        }, 1200);

    };

    const next = () => {
        SoundManager.click.play();

        const typewriter = typewriterRef.current;

        if (!typewriter?.isFinished()) {
            typewriter?.skip();
            return;
        }

        if (dialogue.choices) {
            return;
        }

        if (dialogue.nextId) {
            setCurrentId(dialogue.nextId);
        } else {
            showEnding();
        }
    };

    useEffect(() => {

        SoundManager.bgm.play();

        return () => {
            SoundManager.bgm.stop();
        };

    }, []);

    if (ending) {
        return (
            <Ending
                ending={ending}
                score={score}
                onRestart={() => {
                    setEnding(null);
                    setCurrentId(1);
                    setScore(0);
                }}
            />
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
                        position={character.position as "left" | "center" | "right"}
                        active={character.id === dialogue.speaker}
                        emoteImage={character.id === dialogue.speaker ? emoteImage : null}
                    />
                ))}
            </AnimatePresence>

            <DialogueBox
                ref={typewriterRef}
                speaker={dialogue.speaker}
                text={dialogue.text}
            />

            {
                dialogue.choices &&
                typewriterRef.current?.isFinished() && (
                    <ChoiceBox
                        choices={dialogue.choices}
                        onSelect={handleChoice}
                    />
                )}

        </div>

    );

}