import fs from "fs";
import path from "path";

import { compile } from "json-schema-to-typescript";

import tzip16SchemaJSON from "../tzip16/schema.json";
import tzip21SchemaJSON from "../tzip21/schema.json";

interface FileToProcess {
  inputJSON: Record<string, unknown>;
  schemaTitle: string;
  outputPath: string;
}

/**
 * Using a `String` title in the schema is breaking `json-schema-to-typescript`. It confuses it with a `string`.
 * That's why I'm changing the title here to `StringExpression`.
 */
const tzip16ExpressionsWithFixedStringExpression = tzip16SchemaJSON.definitions[
  "micheline.tzip-16.expression"
].oneOf.map((expression) => {
  if (expression.title === "String")
    return {
      ...expression,
      title: "StringExpression",
    };

  return expression;
});

const fixedTZIP16SchemaJSON = {
  ...tzip16SchemaJSON,
  definitions: {
    ...tzip16SchemaJSON.definitions,
    "micheline.tzip-16.expression": {
      ...tzip16SchemaJSON.definitions["micheline.tzip-16.expression"],
      oneOf: tzip16ExpressionsWithFixedStringExpression,
    },
  },
};

const filesToProcess: FileToProcess[] = [
  /**
   * @link https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-16/metadata-schema.json
   */
  {
    inputJSON: fixedTZIP16SchemaJSON,
    schemaTitle: "ContractMetadataTZIP16",
    outputPath: "../tzip16/tzip16.ts",
  },
  /**
   * @link https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-21/metadata-schema.json
   */
  {
    inputJSON: tzip21SchemaJSON,
    schemaTitle: "TokenMetadataTZIP21",
    outputPath: "../tzip21/tzip21.ts",
  },
];

/**
 * This file takes JSON schemas defined in TZIPs and convert them into useful TypeScript types definition files
 */
async function processJSONSchema() {
  for (const fileToProcess of filesToProcess) {
    console.log(`processing and generating types for ${fileToProcess.schemaTitle}`);

    /**
     * Original schemas are incompatible with `json-schema-to-typescript`.
     * In order to make them work we need to move `$ref` into a `properties` attribute
     */
    const compatibleSchema = {
      $schema: fileToProcess.inputJSON.$schema,
      properties: {
        $ref: `${fileToProcess.inputJSON.$ref}/properties`,
      },
      title: fileToProcess.schemaTitle,
      definitions: fileToProcess.inputJSON.definitions,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const types = await compile(compatibleSchema as any, fileToProcess.schemaTitle);
    await fs.promises.writeFile(path.join(__dirname, fileToProcess.outputPath), types);
  }
}

processJSONSchema().finally(() => console.log("processJSONSchema finished"));
