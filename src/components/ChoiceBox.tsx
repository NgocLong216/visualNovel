interface Choice {
    text: string;
    nextId: number;
    score?: number;
  }
  
  interface Props {
    choices: Choice[];
    onSelect: (choice: Choice) => void;
  }
  
  export default function ChoiceBox({
    choices,
    onSelect,
  }: Props) {
    return (
      <div className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center">
  
        <div className="flex gap-6">
  
          {choices.map((choice) => (
  
            <button
              key={choice.text}
              onClick={() => onSelect(choice)}
              className="
                w-full
                rounded-xl
                bg-[#fff5d4]
                p-4
                text-xl
                hover:bg-blue-300
                transition
                text-[#643831]
              "
            >
              {choice.text}
            </button>
  
          ))}
  
        </div>
  
      </div>
    );
  }