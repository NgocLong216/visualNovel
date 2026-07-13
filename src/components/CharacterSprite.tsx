import { motion } from "framer-motion";


interface Props {
    image: string;
    position: "left" | "center" | "right";
    active: boolean;
    emoteImage?: string | null;
}

export default function CharacterSprite({
    image,
    position,
    active,
    emoteImage,
}: Props) {
    const left =
        position === "left"
            ? "20%"
            : position === "center"
                ? "50%"
                : "80%";

    return (
        <div
            className="absolute"
            style={{
                left,
                transform: "translateX(-50%)",
            }}
        >
            {emoteImage && (
                <motion.img
                src={emoteImage}
                className="
                    absolute
                    z-50
                    left-80
                    -translate-x-1/2
                    top-1
                    w-24
                "
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: -10,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                />
            )}
            <motion.img
                src={image}
                className="h-[150vh] object-contain"
                style={{
                    left,
                    x: "-10%",
                }}
                initial={{
                    opacity: 0,
                    scale: 0.9,
                }}
                animate={{
                    opacity: active ? 1 : 0.45,
                    scale: active ? 1 : 0.95,
                    y: active ? [0, -10, 0] : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            />
        </div>
    );
}