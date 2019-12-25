import fs from 'fs';
import yaml from 'js-yaml';
import $RefParser from "json-schema-ref-parser";
import { Spec } from './Spec';
import { Validate } from './Validate';

export class TSOpenAPI {

  constructor() {
  }

  /*
   * parse and validate entrypoint
   */
  loadSpec(filePath: string, callback: (err: NodeJS.ErrnoException | null, data: Spec) => void): void {

    const openAPISpec = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));

    $RefParser.dereference(openAPISpec, (err, resolvedSpec) => {
      if (err) {
        callback(err, null);
      } else {
        const spec = new Spec(resolvedSpec);
        // validation
        new Validate().validateAll();

        // if (spec.openapi === undefined) {
        //   err = new Error('Document must be valid OpenAPI 3.0.0 definition');
        //   callback(err, null);
        // };
        

        callback(null, spec);
      }
    });
  }

}

