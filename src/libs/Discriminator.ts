import { OpenAPIDiscriminator } from '../types';

/*
 * OpenAPIDiscriminator
 */
export class Discriminator {
  propertyName: string;
  mapping?: { [name: string]: string };

  constructor(init?: Partial<OpenAPIDiscriminator>) {
    Object.assign(this, init);
  }
}
