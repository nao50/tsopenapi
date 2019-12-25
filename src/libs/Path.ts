import { OpenAPIPath, OpenAPIOperation, OpenAPIServer, Referenced, OpenAPIParameter } from '../types';

/*
 * OpenAPIPath
 */
export class Path {
  summary?: string;
  description?: string;
  get?: OpenAPIOperation;
  put?: OpenAPIOperation;
  post?: OpenAPIOperation;
  delete?: OpenAPIOperation;
  options?: OpenAPIOperation;
  head?: OpenAPIOperation;
  patch?: OpenAPIOperation;
  trace?: OpenAPIOperation;
  servers?: OpenAPIServer[];
  parameters?: Array<Referenced<OpenAPIParameter>>;

  constructor(init?: Partial<OpenAPIPath>) {
    Object.assign(this, init);
  }
}
