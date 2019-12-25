import { OpenAPIOperation, OpenAPIExternalDocumentation, OpenAPIParameter, OpenAPIRequestBody, OpenAPIResponses, OpenAPICallback, OpenAPISecurityRequirement, OpenAPIServer } from '../types';

/*
 * OpenAPIOperation
 */
export class Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: OpenAPIExternalDocumentation;
  operationId?: string;
  parameters?: OpenAPIParameter[];
  requestBody?: OpenAPIRequestBody;
  responses: OpenAPIResponses;
  callbacks?: { [name: string]: OpenAPICallback };
  deprecated?: boolean;
  security?: OpenAPISecurityRequirement[];
  servers?: OpenAPIServer[];


  constructor(init?: Partial<OpenAPIOperation>) {
    Object.assign(this, init);
  }
}
