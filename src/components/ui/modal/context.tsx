'use client'

import { createContext, useContext, useRef, useState } from "react";

const ModalContext = createContext<{
  modalComponent: React.ReactNode,
  setModalComponent: (component: React.ReactNode) => void
  dialogRef: React.RefObject<HTMLDialogElement | null>
} | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalComponent, setModalComponent] = useState<React.ReactNode>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <ModalContext.Provider value={{ modalComponent, setModalComponent, dialogRef }}>
      {children}
      <dialog ref={dialogRef}>
        {modalComponent}
      </dialog>
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)
  if (context === null) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}