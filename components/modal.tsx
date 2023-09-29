import React, { useEffect, useState } from "react";
import { SlClose } from "react-icons/sl";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  const [display, setDisplay] = useState("hidden");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      if (isOpen) {
        setDisplay("");
      } else {
        setDisplay("hidden");
      }
    }, 250);
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`z-50 overflow-x-hidden bg-black bg-opacity-60 transition duration-300 flex justify-center fixed  overflow-y-auto items-center inset-0 ${display}`}
    >
      <div className="flex flex-col relative bg-white h-5/6 w-5/6 rounded-md shadow-md overflow-hidden relative">
        <div
          className="absolute cursor-pointer right-1 top-1 "
          onClick={onClose}
        >
          <SlClose size="20" color="black" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
