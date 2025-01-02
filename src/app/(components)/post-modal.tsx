'use client'

import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { FormEventHandler } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  console.log(event)
  debugger
}

export default function PostModal() {
  return (
    <>
      <ModalTitle>投稿</ModalTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">平文</label>
          <input type="text" required />
        </div>
        <div>
          <label htmlFor="">公開鍵</label>
          <input type="text" required />
        </div>
        <button type="submit">投稿</button>
      </form>
    </>
  )
}
