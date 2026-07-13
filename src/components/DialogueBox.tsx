import { forwardRef } from "react";
import Typewriter from "./Typewriter";
import type { TypewriterHandle } from "./Typewriter";

import chatbox from "../assets/ui/chatbox.png";

interface Props {
  speaker: string;
  text: string;
}

const DialogueBox = forwardRef<TypewriterHandle, Props>(
  ({ speaker, text }, ref) => {
    return (
      <div className="absolute -bottom-30 left-0 w-full flex justify-center pb-4">

        <div className="relative w-[90%] max-w-[1000px]">

          {/* Background Chatbox */}
          <img
            src={chatbox}
            alt="Chatbox"
            className="w-full select-none pointer-events-none"
          />

          {/* Nội dung */}
          <div className="absolute inset-0 px-12 py-8 flex flex-col">

            {/* Tên nhân vật */}
            <div className="inline-block w-fit rounded-lg px-5 py-2 text-xl font-bold text-[#3c170f] mt-15 ml-15">
              {speaker}
            </div>

            {/* Nội dung */}
            <div className="mt-6 flex-1 text-2xl leading-relaxed text-[#643831]">
              <Typewriter
                ref={ref}
                text={text}
              />
            </div>

            {/* Click */}
            <div className="self-end text-[#643831] text-lg animate-pulse mb-35">
              ▶ Click để tiếp tục
            </div>

          </div>

        </div>

      </div>
    );
  }
);

DialogueBox.displayName = "DialogueBox";

export default DialogueBox;