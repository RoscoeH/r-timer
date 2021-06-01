/** @jsxImportSource theme-ui */
import { useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

export default function Toggle({ value, onToggle }) {
  const { theme } = useThemeUI();
  const { colors, space } = theme;
  const handleClick = () => onToggle && onToggle(value);

  const variants = {
    on: { backgroundColor: colors.primary },
    off: { backgroundColor: colors.dark },
  };
  const knobVariants = {
    on: { x: space[2] * 3 },
    off: { x: 0 },
  };

  return (
    <motion.div
      sx={{
        display: "inline-block",
        p: 1,
        borderRadius: 4,
        width: ({ space }) => space[3] * 3,
        cursor: "pointer",
      }}
      onClick={handleClick}
      initial={false}
      variants={variants}
      animate={value ? "on" : "off"}
    >
      <motion.div
        sx={{ bg: "light", width: 3, height: 3, borderRadius: 3 }}
        variants={knobVariants}
      />
    </motion.div>
  );
}
