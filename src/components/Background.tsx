import { motion } from "framer-motion";

interface Props {
  image: string;
}

export default function Background({
  image,
}: Props) {
  return (
    <motion.div
      key={image}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}