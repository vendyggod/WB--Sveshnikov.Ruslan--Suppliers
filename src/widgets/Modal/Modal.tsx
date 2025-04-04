import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick.ts";
import { StyledModal, Overlay, Button } from "./Modal.styles";

type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: ReactNode;
};

type OpenProps = {
  children: ReactElement;
};

type WindowProps = {
  children: ReactElement;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Open must be used within a Modal");
  }
  const { openModal } = context;

  return cloneElement(children, {
    onClick: openModal,
  });
}

function Window({ children }: WindowProps) {
  const context = useContext(ModalContext);
  const ref = useOutsideClick(() => context?.closeModal());

  if (!context) {
    throw new Error("Window must be used within a Modal");
  }
  const { isOpen, closeModal } = context;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={closeModal}>
          <img src="/images/icon-close.svg" alt="Close modal window icon" />
        </Button>
        {cloneElement(children, {
          onCloseModal: closeModal,
        })}
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
