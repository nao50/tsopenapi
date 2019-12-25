import { OpenAPIParameter, OpenAPIParameterLocation, OpenAPIParameterStyle, Referenced, OpenAPISchema, OpenAPIExample, OpenAPIMediaType } from '../types';

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
  schema?: Referenced<OpenAPISchema>;
  example?: any;
  examples?: { [media: string]: Referenced<OpenAPIExample> };
  content?: { [media: string]: OpenAPIMediaType };


  constructor(init?: Partial<OpenAPIParameter>) {
    Object.assign(this, init);
  }
}
