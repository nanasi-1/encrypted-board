import { arrayBufferToBase64 } from "./arrbuf-b64"
import { plainTextToArrayBuffer } from "./arrbuf-plain"

const HASH_ALGORITHM = 'SHA-1'

export async function calcDigest(text: string) {
  const buf = plainTextToArrayBuffer(text)
  return calcDigestByBuffer(buf)
}

export async function calcDigestByBuffer(buf: ArrayBuffer) {
  const exported = await globalThis.crypto.subtle.digest(HASH_ALGORITHM, buf)
  return arrayBufferToBase64(exported)
}