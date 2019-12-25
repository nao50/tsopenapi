import { OpenAPIOperation, OpenAPIExternalDocumentation, Referenced, OpenAPIParameter, OpenAPIRequestBody, OpenAPIResponses, OpenAPICallback, OpenAPISecurityRequirement, OpenAPIServer, OpenAPIXCodeSample } from '../types';

/*
 * OpenAPIOperation
 */
export class Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: OpenAPIExternalDocumentation;
  operationId?: string;
  parameters?: Array<Referenced<OpenAPIParameter>>;
  requestBody?: Referenced<OpenAPIRequestBody>;
  responses: OpenAPIResponses;
  callbacks?: { [name: string]: Referenced<OpenAPICallback> };
  deprecated?: boolean;
  security?: OpenAPISecurityRequirement[];
  servers?: OpenAPIServer[];
  'x-code-samples'?: OpenAPIXCodeSample[];


  constructor(init?: Partial<OpenAPIOperation>) {
    Object.assign(this, init);
  }
}
