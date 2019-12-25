import { OpenAPIPaths, OpenAPIPath } from '../types';

/*
 * OpenAPIPaths
 */
export class Paths {
  [path: string]: OpenAPIPath;


  constructor(init?: Partial<OpenAPIPaths>) {
    Object.assign(this, init);
  }
}
