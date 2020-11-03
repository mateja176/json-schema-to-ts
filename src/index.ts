import * as fs from 'fs-extra';
import { compileFromFile } from 'json-schema-to-typescript';
import { join } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Options } from 'prettier';

const style: Options = { singleQuote: true };

// compile from file
compileFromFile(join(__dirname, 'schema.json'), {
  style,
}).then((ts) => fs.writeFile('schema.ts', ts));
