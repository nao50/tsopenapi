import { OpenAPIXCodeSample } from '../types';

/*
 * OpenAPIXCodeSample
 */
export class XCodeSample {
  lang: string;
  label?: string;
  source: string;

  constructor(init?: Partial<OpenAPIXCodeSample>) {
    Object.assign(this, init);
  }
}
