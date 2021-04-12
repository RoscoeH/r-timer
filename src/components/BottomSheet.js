/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Sheet from "react-modal-sheet";

export default function BottomSheet({ header, children, isOpen, onClose }) {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[420]}>
      <Sheet.Container>
        {header ? header() : <Sheet.Header />}
        <Sheet.Content>
          <div sx={{ px: 3 }}>{children}</div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={onClose} />
    </Sheet>
  );
}
