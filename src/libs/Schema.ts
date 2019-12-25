import { OpenAPISchema, OpenAPIExternalDocumentation, OpenAPIDiscriminator } from '../types';

/*
 * OpenAPISchema
 */
export class Schema {
  $ref?: string;
  type?: string;
  properties?: { [name: string]: OpenAPISchema };
  additionalProperties?: boolean | OpenAPISchema;
  description?: string;
  default?: any;
  items?: OpenAPISchema;
  required?: string[];
  readOnly?: boolean;
  writeOnly?: boolean;
  deprecated?: boolean;
  format?: string;
  externalDocs?: OpenAPIExternalDocumentation;
  discriminator?: OpenAPIDiscriminator;
  nullable?: boolean;
  oneOf?: OpenAPISchema[];
  anyOf?: OpenAPISchema[];
  allOf?: OpenAPISchema[];
  not?: OpenAPISchema;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  enum?: any[];
  example?: any;

  constructor(init?: Partial<OpenAPISchema>) {
    Object.assign(this, init);
  }

}
