// 右下のボタンのコンテナ
import PostButton from "./create-post/post-button";
import ShowDefaultKeyButton from "./default-keys/show-button";

export default function FixedButtons(/* 各ボタンに必要なprops */) {
  return (
    <div className="fixed bottom-10 right-10 z-10 flex flex-col gap-y-4">
      <PostButton />
      <ShowDefaultKeyButton />
    </div>
  )
}