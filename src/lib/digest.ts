import { arrayBufferToBase64 } from "./arrbuf-b64"
import { plainTextToArrayBuffer } from "./arrbuf-plain"
import { exportPublicKey, importPrivateKey } from "./import-export-key"

export async function calcPublicKeyByPrivate(privateKey: CryptoKey) {
  const algorithm: RsaHashedKeyGenParams = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: {
      name: "SHA-256"
    }
  }

  const exported = await globalThis.crypto.subtle.exportKey('jwk', privateKey)
  const jwk: JsonWebKey = {
    kty: 'RSA',
    e: exported.e,
    n: exported.n,
    ext: true,
  }
  const publicKey = await globalThis.crypto.subtle.importKey(
    'jwk', 
    jwk,
    algorithm,
    true,
    ['encrypt']
  )
  return publicKey
}

/** 秘密鍵か検証鍵のハッシュ計算にはこれを使う */
export async function calcPrivateDigest(privateKeyStr: string) {
  const privateKey = await importPrivateKey(privateKeyStr, true)
  const publicKey = await calcPublicKeyByPrivate(privateKey)
  return calcDigest(await exportPublicKey(publicKey))
}

/** 普通の文字列、公開鍵、署名鍵のハッシュ計算に使う */
export async function calcDigest(text: string) {
  const buf = plainTextToArrayBuffer(text)
  return calcDigestByBuffer(buf)
}

export async function calcDigestByBuffer(buf: ArrayBuffer) {
  const HASH_ALGORITHM = 'SHA-1'
  const exported = await globalThis.crypto.subtle.digest(HASH_ALGORITHM, buf)
  return arrayBufferToBase64(exported)
}