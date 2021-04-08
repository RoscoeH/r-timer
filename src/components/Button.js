/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button as ThemeUiButton, IconButton } from "theme-ui";
import Icon from "./Icon";

const TYPES = {
  icon: "icon",
};

const DEFAULT_ICON_SIZE = 24;

export default function MyButton({ type = "primary", icon, children }) {
  const content =
    type === TYPES.icon ? (
      <Icon icon={icon} size={DEFAULT_ICON_SIZE} />
    ) : (
      children
    );
  const Component = type === TYPES.icon ? IconButton : ThemeUiButton;

  return <Component variant={type}>{content}</Component>;
}
