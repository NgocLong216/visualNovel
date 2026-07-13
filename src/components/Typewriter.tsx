import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import SoundManager from "../utils/SoundManager";

export interface TypewriterHandle {
  skip: () => void;
  restart: () => void;
  isFinished: () => boolean;
}

interface Props {
  text: string;
  speed?: number;
}

const Typewriter = forwardRef<TypewriterHandle, Props>(
  ({ text, speed = 35 }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // reset khi đổi text
    useEffect(() => {
      setCurrentIndex(0);
    }, [text]);

    // hiệu ứng gõ
    useEffect(() => {
      if (currentIndex >= text.length) return;

      const timeout = setTimeout(() => {
        setCurrentIndex(prev => {

          if(currentIndex % 2 === 0){

            SoundManager.type.play();
        
        }
      
          return prev + 1;
      
      });
      }, speed);

      return () => clearTimeout(timeout);
    }, [currentIndex, text, speed]);

    useImperativeHandle(ref, () => ({
      skip() {
        setCurrentIndex(text.length);
      },

      restart() {
        setCurrentIndex(0);
      },

      isFinished() {
        return currentIndex >= text.length;
      },
    }));

    return <>{text.slice(0, currentIndex)}</>;
  }
);

export default Typewriter;