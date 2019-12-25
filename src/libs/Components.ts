import { OpenAPIComponents, OpenAPISchema, OpenAPIResponse, OpenAPIParameter, OpenAPIExample, OpenAPIRequestBody, OpenAPIHeader, OpenAPISecurityScheme, OpenAPILink, OpenAPICallback } from '../types';

/*
 * OpenAPIComponents
 */
export class Components {
  schemas?: { [name: string]: OpenAPISchema };
  responses?: { [name: string]: OpenAPIResponse };
  parameters?: { [name: string]: OpenAPIParameter };
  examples?: { [name: string]: OpenAPIExample };
  requestBodies?: { [name: string]: OpenAPIRequestBody };
  headers?: { [name: string]: OpenAPIHeader };
  securitySchemes?: { [name: string]: OpenAPISecurityScheme };
  links?: { [name: string]: OpenAPILink };
  callbacks?: { [name: string]: OpenAPICallback };


  constructor(init?: Partial<OpenAPIComponents>) {
    Object.assign(this, init);
  }


}
