import { IPFSCID } from "../../types/ipfs-cid";
import { IPFSUriWithChecksum } from "../../types/ipfs-uri-with-checksum";
import { SHA256Checksum } from "../../types/sha256-checksum";

export interface GetIPFSUriWithChecksumProps {
  fileName: string;
  cid: IPFSCID;
  sha256Checksum: SHA256Checksum;
}

/**
 * Generates IPFS URI with SHA256 checksum prefix
 * @example "sha256://0xd622c47a8047ee5e897a449067c442381c56d0ab3e6489b0919164fe54a85ad8/ipfs://QmZB6Ku8285XMp98oUpmmEY7RqLGP8qVcriQvrquCRZ3pn/test-contract-contract-metadata.json"
 */
export function getIPFSUriWithChecksum({
  fileName,
  cid,
  sha256Checksum,
}: GetIPFSUriWithChecksumProps): IPFSUriWithChecksum {
  return `sha256://0x${sha256Checksum}/ipfs://${cid}/${fileName}`;
}
