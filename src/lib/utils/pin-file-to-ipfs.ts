import fs from "fs";
import path from "path";

import { PinataClient, PinataPinOptions } from "@pinata/sdk";

import { IPFSFileInfo } from "../../types/ipfs-file-info";

import { getIPFSCID } from "./get-ipfs-cid";
import { getIPFSUri } from "./get-ipfs-uri";
import { getIPFSUriWithChecksum } from "./get-ipfs-uri-with-checksum";
import { getSHA256Checksum } from "./get-sha256-checksum";

export interface PinFileToIPFSProps {
  pinataClient: PinataClient;
  filePath: string;
}

export async function pinFileToIPFS({ pinataClient, filePath }: PinFileToIPFSProps): Promise<IPFSFileInfo> {
  const fileName = path.basename(filePath);

  const options: PinataPinOptions = {
    pinataMetadata: {
      name: fileName,
    },
    pinataOptions: {
      wrapWithDirectory: true,
    },
  };

  const fileCID = await getIPFSCID(fs.createReadStream(filePath));

  const fileSHA256Checksum = await getSHA256Checksum(fs.createReadStream(filePath));

  const result = await pinataClient.pinFromFS(filePath, options);

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
    fileSHA256Checksum,
    directoryCID: result.IpfsHash,
    ipfsUriWithChecksum: ipfsUriWithChecksum,
  };
}
