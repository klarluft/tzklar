import { IPFSCID } from "./ipfs-cid";
import { IPFSUri } from "./ipfs-uri";
import { IPFSUriWithChecksum } from "./ipfs-uri-with-checksum";
import { SHA256Checksum } from "./sha256-checksum";

export interface IPFSFileInfo {
  ipfsUri: IPFSUri;
  ipfsUriWithChecksum: IPFSUriWithChecksum;
  directoryCID: IPFSCID;
  fileCID: IPFSCID;
  fileSHA256Checksum: SHA256Checksum;
  sizeInBytes: number;
}
