/**
 * @link https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md
 */
export interface TokenMetadataTZIP12 {
  /**
   * should be a UTF-8 string giving a “display name” to the token.
   */
  name: string;

  /**
   * should be a UTF-8 string for the short identifier of the token (e.g. XTZ, EUR, ...).
   */
  symbol: string;

  /**
   * should be an integer (converted to a UTF-8 string in decimal) which defines the position of the decimal
   * point in token balances for display purposes.
   *
   * Extra: Official proposal says it should be a `string`, but it seems that it actually should be a `number`
   */
  decimals: number;
}
