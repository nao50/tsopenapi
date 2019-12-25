import { TSOpenAPI } from './libs/TSOpenAPI';

const tsOpenAPI = new TSOpenAPI();

tsOpenAPI.validate('./api.yaml', (err, apiSpec) => {
  if (err) {
    console.error(err);
  } else {
    Object.keys(apiSpec.components.schemas).forEach((key) => {
      let schema = apiSpec.components.schemas[key]
      console.log("properties: ", schema.properties);
    });
  }
});