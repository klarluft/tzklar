/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface TokenMetadataTZIP21 {
  /**
   * General notes, abstracts, or summaries about the contents of an asset.
   */
  description?: string;
  /**
   * The tz address responsible for minting the asset.
   */
  minter?: string;
  /**
   * The primary person, people, or organization(s) responsible for creating the intellectual content of the asset.
   */
  creators?: string[];
  /**
   * The person, people, or organization(s) that have made substantial creative contributions to the asset.
   */
  contributors?: string[];
  /**
   * The person, people, or organization(s) primarily responsible for distributing or making the asset available to others in its present form.
   */
  publishers?: string[];
  /**
   * A date associated with the creation or availability of the asset.
   */
  date?: string;
  /**
   * Chain block level associated with the creation or availability of the asset.
   */
  blockLevel?: number;
  /**
   * A broad definition of the type of content of the asset.
   */
  type?: string;
  /**
   * A list of tags that describe the subject or content of the asset.
   */
  tags?: string[];
  /**
   * A list of genres that describe the subject or content of the asset.
   */
  genres?: string[];
  /**
   * The language of the intellectual content of the asset as defined in RFC 1776.
   */
  language?: string;
  /**
   * A string or number used to uniquely identify the asset. Ex. URL, URN, UUID, ISBN, etc.
   */
  identifier?: string;
  /**
   * A statement about the asset rights.
   */
  rights?: string;
  /**
   * Links to a statement of rights.
   */
  rightUri?: string;
  /**
   * A URI to the asset.
   */
  artifactUri?: string;
  /**
   * A URI to an image of the asset. Used for display purposes.
   */
  displayUri?: string;
  /**
   * A URI to an image of the asset for wallets and client applications to have a scaled down image to present to end-users. Reccomened maximum size of 350x350px.
   */
  thumbnailUri?: string;
  /**
   * A URI with additional information about the subject or content of the asset.
   */
  externalUri?: string;
  /**
   * All tokens will be transferable by default to allow end-users to send them to other end-users. However, this field exists to serve in special cases where owners will not be able to transfer the token.
   */
  isTransferable?: boolean;
  /**
   * Describes whether an account can have an amount of exactly 0 or 1. (The purpose of this field is for wallets to determine whether or not to display balance information and an amount field when transferring.)
   */
  isBooleanAmount?: boolean;
  /**
   * Allows wallets to decide whether or not a symbol should be displayed in place of a name.
   */
  shouldPreferSymbol?: boolean;
  formats?: Format[];
  /**
   * Custom attributes about the subject or content of the asset.
   */
  attributes?: Attribute[];
  /**
   * Facilitates the description of collections and other types of resources that contain multiple assets.
   */
  assets?: Asset[];
  [k: string]: unknown;
}
export interface Format {
  /**
   * A URI to the asset represented in this format.
   */
  uri?: string;
  /**
   * A checksum hash of the content of the asset in this format.
   */
  hash?: string;
  /**
   * Media (MIME) type of the format.
   */
  mimeType?: string;
  /**
   * Size in bytes of the content of the asset in this format.
   */
  fileSize?: number;
  /**
   * Filename for the asset in this format. For display purposes.
   */
  fileName?: string;
  /**
   * Time duration of the content of the asset in this format.
   */
  duration?: string;
  /**
   * Dimensions of the content of the asset in this format.
   */
  dimensions?: {
    value: string;
    unit: string;
  };
  /**
   * Data rate which the content of the asset in this format was captured at.
   */
  dataRate?: {
    value: number;
    unit: string;
  };
}
export interface Attribute {
  /**
   * Name of the attribute.
   */
  name: string;
  /**
   * Value of the attribute.
   */
  value: string;
  /**
   * Type of the value. To be used for display purposes.
   */
  type?: string;
}
export interface Asset {
  /**
   * General notes, abstracts, or summaries about the contents of an asset.
   */
  description?: string;
  /**
   * The tz address responsible for minting the asset.
   */
  minter?: string;
  /**
   * The primary person, people, or organization(s) responsible for creating the intellectual content of the asset.
   */
  creators?: string[];
  /**
   * The person, people, or organization(s) that have made substantial creative contributions to the asset.
   */
  contributors?: string[];
  /**
   * The person, people, or organization(s) primarily responsible for distributing or making the asset available to others in its present form.
   */
  publishers?: string[];
  /**
   * A date associated with the creation or availability of the asset.
   */
  date?: string;
  /**
   * Chain block level associated with the creation or availability of the asset.
   */
  blockLevel?: number;
  /**
   * A broad definition of the type of content of the asset.
   */
  type?: string;
  /**
   * A list of tags that describe the subject or content of the asset.
   */
  tags?: string[];
  /**
   * A list of genres that describe the subject or content of the asset.
   */
  genres?: string[];
  /**
   * The language of the intellectual content of the asset as defined in RFC 1776.
   */
  language?: string;
  /**
   * A string or number used to uniquely identify the asset. Ex. URL, URN, UUID, ISBN, etc.
   */
  identifier?: string;
  /**
   * A statement about the asset rights.
   */
  rights?: string;
  /**
   * Links to a statement of rights.
   */
  rightUri?: string;
  /**
   * A URI to the asset.
   */
  artifactUri?: string;
  /**
   * A URI to an image of the asset. Used for display purposes.
   */
  displayUri?: string;
  /**
   * A URI to an image of the asset for wallets and client applications to have a scaled down image to present to end-users. Reccomened maximum size of 350x350px.
   */
  thumbnailUri?: string;
  /**
   * A URI with additional information about the subject or content of the asset.
   */
  externalUri?: string;
  /**
   * All tokens will be transferable by default to allow end-users to send them to other end-users. However, this field exists to serve in special cases where owners will not be able to transfer the token.
   */
  isTransferable?: boolean;
  /**
   * Describes whether an account can have an amount of exactly 0 or 1. (The purpose of this field is for wallets to determine whether or not to display balance information and an amount field when transferring.)
   */
  isBooleanAmount?: boolean;
  /**
   * Allows wallets to decide whether or not a symbol should be displayed in place of a name.
   */
  shouldPreferSymbol?: boolean;
  formats?: Format[];
  /**
   * Custom attributes about the subject or content of the asset.
   */
  attributes?: Attribute[];
  /**
   * Facilitates the description of collections and other types of resources that contain multiple assets.
   */
  assets?: Asset[];
  [k: string]: unknown;
}
