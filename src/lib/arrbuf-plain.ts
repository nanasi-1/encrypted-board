export function plainTextToArrayBuffer(plainText: string): ArrayBuffer {
  return new TextEncoder().encode(plainText) as unknown as ArrayBuffer; // by-pass type check
}

export function arrayBufferToPlainText(buffer: ArrayBuffer): string {
  return new TextDecoder().decode(buffer);
}