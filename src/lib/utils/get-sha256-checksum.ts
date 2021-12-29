import crypto from "crypto";
import stream from "stream";

import { SHA256Checksum } from "../..";

export async function getSHA256Checksum(inputStream: stream.Readable): Promise<SHA256Checksum> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    inputStream.on("error", (err) => reject(err));
    inputStream.on("data", (chunk) => hash.update(chunk));
    inputStream.on("end", () => resolve(hash.digest("hex")));
  });
}
