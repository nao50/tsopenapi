import { OpenAPIServerVariable } from '../types';

/*
 * OpenAPIServerVariable
 */
export class ServerVariable {
  enum?: string[];
  default: string;
  description?: string;


  constructor(init?: Partial<OpenAPIServerVariable>) {
    Object.assign(this, init);
  }
}
