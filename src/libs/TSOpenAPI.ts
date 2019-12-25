import fs from 'fs';
import yaml from 'js-yaml';
import $RefParser from "json-schema-ref-parser";
import { Spec } from './Spec';

export class TSOpenAPI {

  constructor() {
  }

  /*
   * validate is cast string to OpenAPISpec types 
   */
  validate(filePath: string, callback: (err: NodeJS.ErrnoException | null, data: Spec) => void): void {

    const openAPISpec = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));

    $RefParser.dereference(openAPISpec, (err, resolvedSpec) => {
      if (err) {
        callback(err, null);
      } else {
        const spec = new Spec(resolvedSpec);
        // validation
        if (spec.openapi === undefined) {
          callback(err, null);
          throw new Error('Document must be valid OpenAPI 3.0.0 definition');
        };
        callback(null, spec);
      }
    });
  }

}

