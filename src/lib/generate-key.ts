export async function generateEncryptKey() {
  const algorithm: RsaHashedKeyGenParams = {
    name: "RSA-OAEP",
    modulusLength: 1024,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: { name: "SHA-256" }
  }
  const pair = await globalThis.crypto.subtle.generateKey(
    algorithm,
    true,
    ['encrypt', 'decrypt']
  )
  return pair
}

export async function generateSignKey() {
  const algorithm: RsaHashedKeyGenParams = {
    name: "RSA-PSS",
    modulusLength: 1024,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: { name: "SHA-256" }
  }
  const pair = await globalThis.crypto.subtle.generateKey(
    algorithm,
    true,
    ['sign', 'verify']
  )
  return {
    signKey: pair.privateKey,
    verifyKey: pair.publicKey
  }
}