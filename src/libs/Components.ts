import { OpenAPIComponents, Referenced, OpenAPISchema, OpenAPIResponse, OpenAPIParameter, OpenAPIExample, OpenAPIRequestBody, OpenAPIHeader, OpenAPISecurityScheme, OpenAPILink, OpenAPICallback } from '../types';

/*
 * OpenAPIComponents
 */
export class Components {
  schemas?: { [name: string]: Referenced<OpenAPISchema> };
  responses?: { [name: string]: Referenced<OpenAPIResponse> };
  parameters?: { [name: string]: Referenced<OpenAPIParameter> };
  examples?: { [name: string]: Referenced<OpenAPIExample> };
  requestBodies?: { [name: string]: Referenced<OpenAPIRequestBody> };
  headers?: { [name: string]: Referenced<OpenAPIHeader> };
  securitySchemes?: { [name: string]: Referenced<OpenAPISecurityScheme> };
  links?: { [name: string]: Referenced<OpenAPILink> };
  callbacks?: { [name: string]: Referenced<OpenAPICallback> };


  constructor(init?: Partial<OpenAPIComponents>) {
    Object.assign(this, init);
  }


}
