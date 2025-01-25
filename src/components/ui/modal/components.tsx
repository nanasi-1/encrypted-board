// いろんなところで使い回すコンポーネント用

import { TextBox } from "../text-box"
import { ErrorModal } from "./error-modal"

// エラーの「詳細」の表示
export function Details({ title, children }: { 
  title?: React.ReactNode,
  children: React.ReactNode 
}) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title ?? "詳細"}</h3>
      <TextBox color="red-600">{children}</TextBox>
    </div>
  )
}

export function UnknownError({ children }: { children: React.ReactNode }) {
  return (
    <ErrorModal
      title="UNKNOWN ERROR!!"
      label="不明なエラー"
      message="予期せぬエラーが発生しました。"
    >
      <Details>{children}</Details>
      <hr className="border-red-600 mt-6 mb-4" />
      <p>
        未解決のエラーが発生しました。<br />
        このエラーを修正するため、
        <a className="text-secondary-400" href="https://github.com/nanasi-1/encrypted-board">GitHub</a>
        での貢献をご検討ください。<br />
      </p>
    </ErrorModal>
  )
}