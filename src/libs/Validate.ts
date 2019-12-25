import { Spec } from './Spec';
import { Info } from './Info';

export class Validate {
  
  constructor() {
  }

  validateAll(): Error | null {
    new Spec().validateAll();
    new Info().validateAll();

    return null
  }
}