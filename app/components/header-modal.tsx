"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";

interface HeaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

// TODO: Block scrolling when the modal is open
function HeaderModal({ isOpen, onClose, className = "" }: HeaderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (dialogElement) {
      if (isOpen) {
        dialogElement.showModal();
      } else {
        dialogElement.close();
      }

      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target === dialogElement) {
          onClose();
        }
      };

      dialogElement.addEventListener("click", handleBackdropClick);

      return () => {
        dialogElement.removeEventListener("click", handleBackdropClick);
      };
    }
  }, [isOpen, onClose]);
  return (
    <dialog ref={dialogRef} className={`h-[calc(100dvh-136px)] mt-[136px] flex flex-col ${className}`}>
      <Link href="/" className="p-8 border-t-2">
        Home
      </Link>
    </dialog>
  );
}

export default HeaderModal;
