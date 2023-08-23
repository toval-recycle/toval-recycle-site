import MUIModal from '@mui/material/Modal';

interface ModalProps {
  open: boolean;
  children: JSX.Element;
  handleClose: (value: boolean) => void;
}

function Modal({ open, handleClose, children }: ModalProps) {
  return (
    <MUIModal
      open={open}
      onClose={() => handleClose(false)}
      className="flex justify-center items-center bg-[rgba(0,0,0,0.6)] p-3"
    >
      {children}
    </MUIModal>
  );
}

export default Modal;
