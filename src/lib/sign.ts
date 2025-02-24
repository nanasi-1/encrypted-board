import { arrayBufferToBase64, base64ToArrayBuffer } from "./arrbuf-b64";
import { plainTextToArrayBuffer } from "./arrbuf-plain";

const algorithm = {
  name: 'RSA-PSS',
  saltLength: 32,
} as const satisfies RsaPssParams;

export async function sign(plainText: string, signKey: CryptoKey): Promise<string> {
  const textBuf = plainTextToArrayBuffer(plainText);
  const signatureBuf = await globalThis.crypto.subtle.sign(
    algorithm,
    signKey,
    textBuf,
  );
  return arrayBufferToBase64(signatureBuf);
}

export async function verify(plainText: string, signature: string, verifyKey: CryptoKey): Promise<boolean> {
  const textBuf = plainTextToArrayBuffer(plainText);
  const signatureBuf = base64ToArrayBuffer(signature);
  return globalThis.crypto.subtle.verify(
    algorithm,
    verifyKey,
    signatureBuf,
    textBuf,
  );
}