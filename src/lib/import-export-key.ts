import { arrayBufferToBase64, base64ToArrayBuffer } from "./arrbuf-b64";

const algorithm = { 
  name: 'RSA-OAEP', 
  hash: 'SHA-256' 
} as const satisfies RsaHashedImportParams;

export async function exportPublicKey(key: CryptoKey): Promise<string> {
  const exported = await crypto.subtle.exportKey('spki', key);
  return arrayBufferToBase64(exported);
}

export async function exportPrivateKey(key: CryptoKey): Promise<string> {
  const exported = await crypto.subtle.exportKey('pkcs8', key);
  return arrayBufferToBase64(exported);
}

export async function importPublicKey(base64: string): Promise<CryptoKey> {
  const keyData = base64ToArrayBuffer(base64);
  return crypto.subtle.importKey(
    'spki',
    keyData,
    algorithm,
    true,
    ['encrypt']
  );
}

export async function importPrivateKey(base64: string): Promise<CryptoKey> {
  const keyData = base64ToArrayBuffer(base64);
  return crypto.subtle.importKey(
    'pkcs8',
    keyData,
    algorithm,
    true,
    ['decrypt']
  );
}