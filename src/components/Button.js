/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button as ThemeUiButton, IconButton } from "theme-ui";
import Icon from "./Icon";

const TYPES = {
  primary: "primary",
  icon: "icon",
  color: "color",
};

const accent = (color) => `accent.${color}`;
const hover = (color) => `accent.hover.${color}`;

function renderTextButton({ children, icon }) {
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

const CONTENT = {
  icon: ({ icon }) => <Icon icon={icon} size={DEFAULT_ICON_SIZE} />,
};

const STYLES = {
  icon: (color) => ({
    borderColor: accent(color),
    "&:hover": { borderColor: hover(color) },
  }),
  color: (color) => ({
    bg: accent(color),
    "&:hover": { borderColor: hover(color) },
    "&:active": { borderColor: "dark" },
  }),
  primary: (color) => ({
    bg: accent(color),
    "&:hover": { bg: hover(color) },
  }),
  secondary: (color) => ({
    borderColor: accent(color),
    "&:hover": { borderColor: hover(color) },
  }),
};

const DEFAULT_ICON_SIZE = 24;

export default function MyButton({
  type = "primary",
  icon,
  color,
  children,
  ...props
}) {
  const renderContent = CONTENT[type] || renderTextButton;
  const Component = type === TYPES.icon ? IconButton : ThemeUiButton;
  const renderStyles = STYLES[type] || (() => ({}));
  return (
    <Component variant={type} sx={{ ...renderStyles(color) }} {...props}>
      {renderContent({ type, icon, color, children })}
    </Component>
  );
}
