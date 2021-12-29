import { IPFSCID } from "../../types/ipfs-cid";
import { IPFSUri } from "../../types/ipfs-uri";

export interface GetIPFSUriProps {
  fileName: string;
  cid: IPFSCID;
}

/**
 * Generates proper IPFS URI out of a hash and a file name
 * @example "ipfs://QmP64LPaLLtzNwdUrNGggNw77BXEn4qC528uBXrfS4YVwQ/test-contract-contract-metadata.json"
 */
export function getIPFSUri({ fileName, cid }: GetIPFSUriProps): IPFSUri {
  return `ipfs://${cid}/${fileName}`;
}
