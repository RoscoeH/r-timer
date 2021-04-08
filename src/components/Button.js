/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button as ThemeUiButton, IconButton } from "theme-ui";
import Icon from "./Icon";

const TYPES = {
  icon: "icon",
};

const DEFAULT_ICON_SIZE = 24;

function renderIconButton(icon) {
  return <Icon icon={icon} size={DEFAULT_ICON_SIZE} />;
}

function renderTextButton(children, icon) {
  return icon ? (
    <span>
      <span sx={{ verticalAlign: "middle", mr: 2 }}>
        <Icon icon={icon} inline />
      </span>
      <span sx={{ verticalAlign: "middle" }}>{children}</span>
    </span>
  ) : (
    children
  );
}

export default function MyButton({ type = "primary", icon, children }) {
  const content =
    type === TYPES.icon
      ? renderIconButton(icon)
      : renderTextButton(children, icon);
  const Component = type === TYPES.icon ? IconButton : ThemeUiButton;

  return <Component variant={type}>{content}</Component>;
}
