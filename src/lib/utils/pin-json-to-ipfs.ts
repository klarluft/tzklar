import { PinataClient, PinataPinOptions } from "@pinata/sdk";

import { IPFSFileInfo } from "../../types/ipfs-file-info";

import { getIPFSCID } from "./get-ipfs-cid";
import { getIPFSUri } from "./get-ipfs-uri";
import { getIPFSUriWithChecksum } from "./get-ipfs-uri-with-checksum";
import { getSHA256Checksum } from "./get-sha256-checksum";
import { stringToStream } from "./string-to-stream";

export interface PinJSONToIPFSProps {
  pinataClient: PinataClient;
  fileName: string;
  jsonObject: Record<string, unknown>;
}

export async function pinJSONToIPFS({ pinataClient, fileName, jsonObject }: PinJSONToIPFSProps): Promise<IPFSFileInfo> {
  const options: PinataPinOptions = {
    pinataMetadata: {
      name: fileName,
    },
    pinataOptions: {
      wrapWithDirectory: true,
    },
  };

  const getStream = () => stringToStream({ objectToConvert: jsonObject, filename: fileName });

  const fileCID = await getIPFSCID(getStream());

  const fileSHA256Checksum = await getSHA256Checksum(getStream());

  const result = await pinataClient.pinFileToIPFS(getStream(), options);

  const ipfsUri = getIPFSUri({ cid: result.IpfsHash, fileName });

  const ipfsUriWithChecksum = getIPFSUriWithChecksum({
    cid: result.IpfsHash,
    fileName,
    sha256Checksum: fileSHA256Checksum,
  });

  return {
    ipfsUri,
    sizeInBytes: result.PinSize,
    fileCID,
    directoryCID: result.IpfsHash,
    fileSHA256Checksum,
    ipfsUriWithChecksum,
  };
}
