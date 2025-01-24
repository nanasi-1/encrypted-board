import Cipher from "@/components/ui/cipher";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { DEFAULT_KEYS, KeyDetails } from "@/lib/default-keys/encrypt";

function DefaultKey({ publicKey, privateKey, digest }: KeyDetails) {
  return (
    <div>
      <p><Cipher>{digest}</Cipher></p>
      <p><Cipher>{publicKey}</Cipher></p>
      <p><Cipher>{privateKey}</Cipher></p>
    </div>
  )
}

export default function DefaultKeysModal() {
  return (
    <div>
      <ModalTitle>デフォルト鍵</ModalTitle>
      <p className="mb-5">
        自分で暗号化用の鍵を生成する代わり、ここにある鍵を使用できます。<br />
        暗号掲示板内での暗号文の投稿にのみ利用可能です。
      </p>
      <div>
        {DEFAULT_KEYS.map(key => <DefaultKey key={key.digest} {...key} />)}
      </div>
    </div>
  )
}