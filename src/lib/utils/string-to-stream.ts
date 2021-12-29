import stream from "stream";

export interface StringToStreamProps {
  /**
   * Object to convert into a stream
   */
  objectToConvert: Record<string, unknown>;

  /**
   * Filename, like "metadata.json"
   */
  filename: string;
}

/**
 * When using Pinata's `pinFileToIPFS`, library expects to receive a file as a ReadableStream.
 * This function converts an object into JSON string and create stream compatible with
 * Pinata. The hack with `path` is important to make it work
 * @link https://github.com/PinataCloud/Pinata-SDK/issues/28#issuecomment-816439078
 */
export function stringToStream({ objectToConvert, filename }: StringToStreamProps): stream.Readable {
  const contractMetadataStream = stream.Readable.from([JSON.stringify(objectToConvert)]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (contractMetadataStream as any).path = filename;
  return contractMetadataStream;
}
