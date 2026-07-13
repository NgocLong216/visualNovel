import type { Character } from "../types/Character";

interface Props {
    character: Character;
    onSelect: (character: Character) => void;
}

export default function CharacterCard({
    character,
    onSelect,
}: Props) {
    return (
        <div
            onClick={() => onSelect(character)}
            className="cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:scale-105"
        >
            <div className="w-52 h-80 rounded-2xl overflow-hidden mt-20">

                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                />

            </div>

            {/* <h2 className="text-center mt-4 text-white text-xl font-bold">
                {character.name}
            </h2> */}
        </div>
    );
}