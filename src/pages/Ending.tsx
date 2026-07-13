import type { EndingData } from "../types/Ending";
import { useEffect } from "react";
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

  useEffect(() => {
    // Dừng nhạc nền
    SoundManager.bgm.stop();

    // Phát nhạc ending
    SoundManager.ending.play();

    // Cleanup khi rời trang Ending
    return () => {
      SoundManager.ending.stop();
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          {ending.title}
        </h1>

        <p className="mt-8 text-2xl">
          {ending.description}
        </p>

        <p className="mt-8 text-xl">
          Điểm: {score}
        </p>

        <button
          className="mt-10 rounded bg-blue-600 px-8 py-3 hover:bg-blue-700"
          onClick={onRestart}
        >
          Chơi lại
        </button>

      </div>

    </div>
  );
}