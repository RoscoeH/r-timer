/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Icon as IconComponent } from "@iconify/react";
import menu from "@iconify/icons-mdi-light/menu";
import clock from "@iconify/icons-mdi-light/clock";
import flag from "@iconify/icons-mdi-light/flag";
import cancel from "@iconify/icons-mdi-light/cancel";
import check from "@iconify/icons-mdi-light/check";
import save from "@iconify/icons-mdi-light/content-save";
import deleteIcon from "@iconify/icons-mdi-light/delete";
import plus from "@iconify/icons-mdi-light/plus";
import help from "@iconify/icons-mdi-light/help";
import chevronDown from "@iconify/icons-mdi-light/chevron-down";
import chevronUp from "@iconify/icons-mdi-light/chevron-up";

const ICONS = {
  menu,
  clock,
  flag,
  cancel,
  check,
  save,
  delete: deleteIcon,
  add: plus,
  help,
  chevronUp,
  chevronDown,
};

export default function Icon({ icon = "menu", size = 24 }) {
  return <IconComponent icon={ICONS[icon]} width={size} height={size} />;
}
