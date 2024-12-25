// By https://zenn.dev/spacemarket/articles/9357ba7de0c9d3

/**
 * ArrayBufferをbase64にencodeする
 */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const str = String.fromCharCode.apply(
    null,
    new Uint8Array(buffer) as unknown as number[],
  );

  return window.btoa(str);
}

/**
 * 公開鍵をbase64にencodeする
 */
async function publicKeyToBase64(publicKey: CryptoKey): Promise<string> {
  const key = await window.crypto.subtle.exportKey('spki', publicKey);

  return arrayBufferToBase64(key);
}