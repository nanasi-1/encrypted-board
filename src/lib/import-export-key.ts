import { arrayBufferToBase64, base64ToArrayBuffer } from "./arrbuf-b64";

const oaepAlgorithm = {
  name: 'RSA-OAEP',
  hash: 'SHA-256'
} as const satisfies RsaHashedImportParams;

const pssAlgorithm = {
  name: 'RSA-PSS',
  saltLength: 32,
} as const satisfies RsaPssParams;

async function exportKey(keyFormat: 'spki' | 'pkcs8', key: CryptoKey): Promise<string>{
  const exported = await globalThis.crypto.subtle.exportKey(keyFormat, key);
  return arrayBufferToBase64(exported);
}

function importKey(base64: string, options: {
  keyFormat: 'spki' | 'pkcs8',
  algorithm: RsaHashedImportParams | RsaPssParams,
  extractable: boolean,
  keyUsages: KeyUsage[],
}): Promise<CryptoKey> {
  const keyData = base64ToArrayBuffer(base64);
  return globalThis.crypto.subtle.importKey(
    options.keyFormat,
    keyData,
    options.algorithm,
    options.extractable,
    options.keyUsages
  );
}

export function exportPublicKey(key: CryptoKey): Promise<string> {
  return exportKey('spki', key);
}

export function exportPrivateKey(key: CryptoKey): Promise<string> {
  return exportKey('pkcs8', key);
}

// 署名でもやることは同じだが、念の為関数を分けておく
export function exportSignKey(key: CryptoKey): Promise<string> {
  return exportKey('spki', key);
}

export function exportVerifyKey(key: CryptoKey): Promise<string> {
  return exportKey('pkcs8', key);
}

export function importPublicKey(base64: string, extractable: boolean): Promise<CryptoKey> {
  return importKey(base64, {
    keyFormat: 'spki',
    algorithm: oaepAlgorithm,
    extractable,
    keyUsages: ['encrypt']
  })
}

export function importPrivateKey(base64: string, extractable: boolean): Promise<CryptoKey> {
  return importKey(base64, {
    keyFormat: 'pkcs8',
    algorithm: oaepAlgorithm,
    extractable,
    keyUsages: ['decrypt']
  })
}

export function importSignKey(base64: string, extractable: boolean): Promise<CryptoKey> {
  return importKey(base64, {
    keyFormat: 'pkcs8',
    algorithm: pssAlgorithm,
    extractable,
    keyUsages: ['sign']
  });
}

export function importVerifyKey(base64: string, extractable: boolean): Promise<CryptoKey> {
  return importKey(base64, {
    keyFormat: 'spki',
    algorithm: pssAlgorithm,
    extractable,
    keyUsages: ['verify']
  });
}