"use client"

import Link from "next/link"
import React, { useRef, useEffect } from "react"

import { ThemeToggleButton } from "./theme-toggle-button"

interface HeaderModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

// TODO: Block scrolling when the modal is open
function HeaderModal({ isOpen, onClose, className = "" }: HeaderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialogElement = dialogRef.current

    if (dialogElement) {
      if (isOpen) {
        dialogElement.showModal()
      } else {
        dialogElement.close()
      }

      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target === dialogElement) {
          onClose()
        }
      }

      dialogElement.addEventListener("click", handleBackdropClick)

      return () => {
        dialogElement.removeEventListener("click", handleBackdropClick)
      }
    }
  }, [isOpen, onClose])
  return (
    <dialog
      ref={dialogRef}
      className={`mt-[136px] flex h-[calc(100dvh-136px)] flex-col dark:bg-gray-900 dark:text-white ${className}`}
    >
      <Link onClick={onClose} href="/career" className="border-t-2 p-8">
        Career
      </Link>
      <div className="flex justify-center">
        <ThemeToggleButton />
      </div>
    </dialog>
  )
}

export default HeaderModal
