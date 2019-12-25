import { OpenAPISpec, OpenAPISchema } from '../types';
import fs from 'fs';
// import { resolve } from 'url';
import yaml from 'js-yaml';

type PathLike = string | URL;

export class TsOpenAPI {
  // specFile: string | URL;
  // openAPISpec: OpenAPISpec;

  // constructor(specFile: string | URL, openAPISpec: OpenAPISpec) {
  //   this.specFile = specFile;
  //   this.parse(this.specFile);
  // }

  /*
   * parse is cast string to OpenAPISpec types 
   */
  parse(specFile: string| URL): OpenAPISpec {
    const openAPISpec = yaml.safeLoad(fs.readFileSync(specFile as string, 'utf8')) as OpenAPISpec;

    if(openAPISpec.components.schemas) {
      Object.keys(openAPISpec.components.schemas).forEach((key) => {
        let schemas = openAPISpec.components.schemas[key] as OpenAPISchema;
        console.log(key + ' is ', schemas);
      });
    }

    return openAPISpec;
  }

  /*
   * validate is cast string to OpenAPISpec types 
   */
  validate(path: PathLike, callback: (err: NodeJS.ErrnoException | null, data: OpenAPISpec) => void): void {
    // validate(callback: (err: NodeJS.ErrnoException | null, data: OpenAPISpec) => void): void {
    const spec = this.parse(path);

    if (spec.openapi === undefined) {
      throw new Error('Document must be valid OpenAPI 3.0.0 definition');
    };

    callback(null, spec);
  }

}


/*
 * parse is cast string to OpenAPISpec types 
 */
export class Components {
  constructor() {
  }
}

