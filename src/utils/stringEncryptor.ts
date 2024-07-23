import { notFound } from "next/navigation";
import { ShortCrypt } from "short-crypt";

const sc = new ShortCrypt("key2580");

export function encrypt(text: string) {
  const result = sc.encryptToURLComponent(text);
  return result;
}
export function decrypt(text: any): string {
  const decryptedBytes = sc.decryptURLComponent(text) as Uint8Array;
  if (!decryptedBytes) {
    notFound();
  }
  const decryptedString = new TextDecoder().decode(decryptedBytes);
  return decryptedString;
}
