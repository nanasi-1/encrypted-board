import Cipher from "@/components/ui/cipher";
import { Icones, KeyIcon } from "@/components/ui/icons";
import { ModalTitle } from "@/components/ui/modal/ModalUI";
import { DEFAULT_KEYS, KeyDetails } from "@/lib/default-keys/encrypt";
import KeyBox from "./key-box";

function DefaultKey({ publicKey, privateKey, digest }: KeyDetails) {
  return (
    <div>
      <h3 className="mb-3">
        <Icones Icon={KeyIcon} position="left-of-text" />
        <Cipher>{digest}</Cipher>
      </h3>
      <KeyBox label="公開鍵" className="mb-3">{publicKey}</KeyBox>
      <KeyBox label="秘密鍵">{privateKey}</KeyBox>
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
      <div className="flex flex-col gap-y-7">
        {DEFAULT_KEYS.map(key => <DefaultKey key={key.digest} {...key} />)}
      </div>
    </div>
  )
}