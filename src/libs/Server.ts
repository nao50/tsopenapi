import { OpenAPIServer, OpenAPIServerVariable } from '../types';

/*
 * OpenAPIServer
 */
export class Server {
  url: string;
  description?: string;
  variables?: { [name: string]: OpenAPIServerVariable };


  constructor(init?: Partial<OpenAPIServer>) {
    Object.assign(this, init);
  }
}
