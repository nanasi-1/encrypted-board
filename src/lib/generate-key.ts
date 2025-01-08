// 暗号のバイト数: 文字列のTextEncoder.buffer.byteLength
// + 20 * 2（ハッシュ分）
// + 残り >= 2（最小のパディングのバイト数）
// 鍵のバイト数: 法の長さ（2048） / 8  = 256バイト

// 法の長さ2048 = 256バイトまでOK? = ひらがな44文字分

export async function generateEncryptKey() {
  const algorithm: RsaHashedKeyGenParams = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: { name: "SHA-1" }
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
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: { name: "SHA-1" }
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