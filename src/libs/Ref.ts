import { OpenAPIRef } from '../types';

/*
 * OpenAPIRef
 */
export class Ref {
  $ref: string;

  constructor(init?: Partial<OpenAPIRef>) {
    Object.assign(this, init);
  }
}
