import stream from "stream";

import { Blockstore, importer } from "ipfs-unixfs-importer";

import { IPFSCID } from "../../types/ipfs-cid";

/**
 * When using Pinata and wrapping files within a directory we will only get a CID of the directory.
 * So we need a way to also figure out what is a CID of the file itself. This is what this function does.
 * Inspired by https://github.com/alanshaw/ipfs-only-hash/blob/master/index.js
 */
export async function getIPFSCID(input: stream.Readable): Promise<IPFSCID> {
  let lastCID;

  for await (const { cid } of importer([{ content: input }], {} as Blockstore, { onlyHash: true })) {
    lastCID = cid.toString();
  }

  if (!lastCID) throw new Error(`Couldn't retrieve CID`);

  return lastCID;
}
