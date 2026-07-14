export interface EndingDialogue {
  speaker: string;
  text: string;
  background: string;
  characters: CharacterInstance[];
}

export interface EndingData {
  title: string;
  dialogues: EndingDialogue[];
}