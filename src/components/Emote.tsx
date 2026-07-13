import { motion, AnimatePresence } from "framer-motion";

interface Props {
  emoji: string | null;
}

export default function Emote({ emoji }: Props) {
  return (
    <AnimatePresence>
      {emoji && (
        <motion.div
          key={emoji}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: -20, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl"
        >
          {emoji}
        </motion.div>
      )}
    </AnimatePresence>
  );
}