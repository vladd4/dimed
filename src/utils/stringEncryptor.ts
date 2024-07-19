// import * as crypto from "crypto";

// const algorithm = "aes-256-ctr"; // AES algorithm with 256-bit key in Counter mode

// // Function to encrypt a string using AES
// export function encrypt(text: string, key = "key"): string {
//   const cipher = crypto.createCipher(algorithm, key);
//   let encrypted = cipher.update(text, "utf8", "hex");
//   encrypted += cipher.final("hex");
//   return encrypted;
// }

// // Function to decrypt an AES-encrypted string back to the original
// export function decrypt(encryptedText: string, key = "key"): string {
//   const decipher = crypto.createDecipher(algorithm, key);
//   let decrypted = decipher.update(encryptedText, "hex", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// }
import { ShortCrypt } from "short-crypt";

const sc = new ShortCrypt("key2580");

export function encrypt(text: string) {
  const result = sc.encryptToURLComponent(text);
  return result;
}
export function decrypt(text: any): string {
  const decryptedBytes = sc.decryptURLComponent(text) as Uint8Array;
  if (!decryptedBytes) {
    throw new Error("Decryption failed or returned empty");
  }
  const decryptedString = new TextDecoder().decode(decryptedBytes);
  return decryptedString;
}
