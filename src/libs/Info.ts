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


  constructor(private init?: Partial<OpenAPIInfo>) {
    Object.assign(this, init);
  }

  validateAll(): Error | null {
    console.log('HELLO OpenAPIInfo', this.init);
    return null;
  }
}
