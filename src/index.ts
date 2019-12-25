import { Spec } from './libs/Spec';
import { Schema } from './libs/Schema';
import { OpenAPISpec } from './types';
import fs from 'fs';
import yaml from 'js-yaml';


const openAPISpec = yaml.safeLoad(fs.readFileSync('./api.yaml', 'utf8')) as OpenAPISpec;
const spec = new Spec(openAPISpec);
// console.log('schemas#', spec.components.schemas.Pet);

const schemas = new Schema(spec.components.schemas);
console.log('schemasAAA#', schemas);

// import { OpenAPISchema } from './types';

// const tsOpenAPI = new TsOpenAPI();
// tsOpenAPI.validate('./api.yaml', (err, api) => {
//   if (!err) {
//     console.log(api.components.schemas);
//     // console.log(api.components.schemas);

//     if(api.components.schemas) {
//       Object.keys(api.components.schemas).forEach((key) => {
//         let schemas = api.components.schemas[key] as OpenAPISchema;
//         console.log(key + ' is ', schemas);
//       });
//     }

//   }
//   else {
//     console.error(err);
//   }
// });