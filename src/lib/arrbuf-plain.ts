export function plainTextToArrayBuffer(plainText: string): ArrayBuffer {
  return new TextEncoder().encode(plainText);
}

export function arrayBufferToPlainText(buffer: ArrayBuffer): string {
  return new TextDecoder().decode(buffer);
}