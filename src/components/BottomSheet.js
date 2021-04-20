/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Sheet from "react-modal-sheet";

export default function BottomSheet({ header, children, isOpen, onClose }) {
  const { theme } = useThemeUI();
  return (
    <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[420]}>
      <Sheet.Container style={{ background: theme.colors.background }}>
        {header ? header() : <Sheet.Header />}
        <Sheet.Content>
          <div sx={{ px: 3 }}>{children}</div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
