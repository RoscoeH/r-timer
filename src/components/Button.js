/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button as ThemeUiButton, IconButton } from "theme-ui";
import Icon from "./Icon";

const TYPES = {
  icon: "icon",
};

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

const DEFAULT_ICON_SIZE = 24;

export default function MyButton({ type = "primary", icon, color, children }) {
  const renderContent = CONTENT[type] || renderTextButton;
  const Component = type === TYPES.icon ? IconButton : ThemeUiButton;
  const colorProps = color
    ? {
        bg: `accent.${color}`,
        sx: {
          "&:hover": { borderColor: `accent.hover.${color}` },
          "&:active": { borderColor: "dark" },
        },
      }
    : {};
  return (
    <Component variant={type} {...colorProps}>
      {renderContent({ type, icon, color, children })}
    </Component>
  );
}
