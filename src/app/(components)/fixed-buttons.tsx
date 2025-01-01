// 右下のボタンのコンテナ
import PostButton from "./post-button/post-button";

export default function FixedButtons(/* 各ボタンに必要なprops */) {
  return (
    <div className="fixed bottom-10 right-10 z-10">
      <PostButton />
    </div>
  )
}