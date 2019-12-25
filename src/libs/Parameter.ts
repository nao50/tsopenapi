import { OpenAPIParameter, OpenAPIParameterLocation, OpenAPIParameterStyle, OpenAPISchema, OpenAPIExample, OpenAPIMediaType } from '../types';

/*
 * OpenAPIParameter
 */
export class Parameter {
  name: string;
  in?: OpenAPIParameterLocation;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: OpenAPIParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: OpenAPISchema;
  example?: any;
  examples?: { [media: string]: OpenAPIExample };
  content?: { [media: string]: OpenAPIMediaType };


  constructor(init?: Partial<OpenAPIParameter>) {
    Object.assign(this, init);
  }
}
