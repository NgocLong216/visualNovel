import type { CharacterOnScene } from "./story";

export interface EndingDialogue {
  speaker: string;
  text: string;
  background: string;
  characters: CharacterOnScene[];
}

export interface EndingData {
  title: string;
  dialogues: EndingDialogue[];
}