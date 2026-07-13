// types/story.ts

export interface Choice {
  text: string;
  nextId: number;
  score?: number;
}

export type CharacterPosition = "left" | "center" | "right";

export interface CharacterOnScene {
  id: string;
  image: string;
  position: CharacterPosition;
}

export interface Dialogue {
  id: number;

  nextId?: number;

  speaker: string;

  text: string;

  background: string;

  characters: CharacterOnScene[];

  choices?: Choice[];
}