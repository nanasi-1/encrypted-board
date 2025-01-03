import { arrayBufferToBase64, base64ToArrayBuffer } from "./arrbuf-b64";
import { plainTextToArrayBuffer, arrayBufferToPlainText } from "./arrbuf-plain";

const algorithm = {
  name: 'RSA-OAEP'
} as const satisfies RsaOaepParams

export async function encrypt(plainText: string, publicKey: CryptoKey): Promise<string> {
  const textBuf = plainTextToArrayBuffer(plainText);
  const cipherBuf = await globalThis.crypto.subtle.encrypt(
    algorithm,
    publicKey,
    textBuf,
  );
  return arrayBufferToBase64(cipherBuf);
}

export async function decrypt(cipherText: string, privateKey: CryptoKey): Promise<string> {
  const cipherBuf = base64ToArrayBuffer(cipherText);
  const textBuf = await globalThis.crypto.subtle.decrypt(
    algorithm,
    privateKey,
    cipherBuf,
  );
  return arrayBufferToPlainText(textBuf);
}