import { OpenAPIExample } from '../types';

/*
 * OpenAPIExample
 */
export class Example {
  value: any;
  summary?: string;
  description?: string;
  externalValue?: string;


  constructor(init?: Partial<OpenAPIExample>) {
    Object.assign(this, init);
  }
}
