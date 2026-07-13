import CharacterCard from "../components/CharacterCard";

import alexei from "../assets/characters/Alexei1.png";
import james from "../assets/characters/James1.png";
import minho from "../assets/characters/Minho1.png";
import vietquoc from "../assets/characters/VietQuoc1.png";
import homeBackground from "../assets/backgrounds/Homescreen.png";
import { useNavigate } from "react-router-dom";

const characters = [
    {
        id: 1,
        name: "Alexei",
        image: alexei,
        description: "..."
    },
    {
        id: 2,
        name: "James",
        image: james,
        description: "..."
    },
    {
        id: 3,
        name: "Minho",
        image: minho,
        description: "..."
    },
    {
        id: 4,
        name: "VietQuoc",
        image: vietquoc,
        description: "..."
    }
];

export default function Home() {
    const navigate = useNavigate();

    const handleSelect = (character:any)=>{

        navigate(`/story/${character.name.toLowerCase()}`);
    
    }

    return (

        <div
            className="h-screen w-screen bg-cover bg-top bg-no-repeat"
            style={{
                backgroundImage: `url(${homeBackground})`,
            }}
        >

            <div className="flex flex-col justify-center items-center min-h-screen">

                <div className="flex gap-16">

                    {characters.map(character => (

                        <CharacterCard
                            key={character.id}
                            character={character}
                            onSelect={handleSelect}
                        />

                    ))}

                </div>

            </div>

        </div>

    );
}