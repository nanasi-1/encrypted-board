export async function plainTextToArrayBuffer(plainText: string): Promise<ArrayBuffer> {
  return new TextEncoder().encode(plainText);
}

export async function arrayBufferToPlainText(buffer: ArrayBuffer): Promise<string> {
  return new TextDecoder().decode(buffer);
}