import { OpenAPIInfo, OpenAPIContact, OpenAPILicense } from '../types';

/*
 * OpenAPIInfo
 */
export class Info {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: OpenAPIContact;
  license?: OpenAPILicense;


  constructor(init?: Partial<OpenAPIInfo>) {
    Object.assign(this, init);
  }
}
