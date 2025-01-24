'use client'

import { ErrorModalWrapper } from "."
import { useModalContext } from "../context"

export function useErrorModal() {
  const { setModalComponent, dialogRef } = useModalContext()
  const openErrorModal = (children: React.ReactNode) => {
    setModalComponent(<ErrorModalWrapper>{children}</ErrorModalWrapper>)
    dialogRef.current?.showModal()
  }
  return { openErrorModal }
}