'use client'

import { createContext, useContext, useState } from "react";

const ModalContext = createContext<{
  modalComponent: React.ReactNode,
  setModalComponent: (component: React.ReactNode) => void
}>({
  modalComponent: null,
  setModalComponent: () => {}
})

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalComponent, setModalComponent] = useState<React.ReactNode>(null)

  return (
    <ModalContext.Provider value={{ modalComponent, setModalComponent }}>
      {children}
      {modalComponent}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  return useContext(ModalContext)
}