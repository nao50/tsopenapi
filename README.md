# tsopenapi
Typescript OpenAPI parser and validator

# usage

```typescript
import { TSOpenAPI } from './libs/TSOpenAPI';

const tsOpenAPI = new TSOpenAPI();

tsOpenAPI.loadSpec('./api.yaml', (err, apiSpec) => {
  if (err) {
    console.error(err);
  } else {
    Object.keys(apiSpec.components.schemas).forEach((key) => {
      let schema = apiSpec.components.schemas[key]
      console.log("properties: ", schema.type);
    });
  }
});
```

# status
Current status

* [ ] Load OpenAPI 3.0 spec file
* [ ] Resolve Reference object
  * [ ] Resolve #/component reference
  * [ ] Resolve other file reference
* [ ] Validation
  * [ ] Document
  * [ ] Info
  * [ ] Contact
  * [ ] License
  * [ ] Server
  * [ ] ServerVariable
  * [ ] Paths
  * [ ] PathItem
  * [ ] Operation
  * [ ] Parameter
  * [ ] RequestBody
  * [ ] Responses
  * [ ] Response
  * [ ] Callbacks
  * [ ] Callback
  * [ ] Schema
  * [ ] Example
  * [ ] MediaType
  * [ ] Header
  * [ ] Link
  * [ ] Encoding
  * [ ] Discriminator
  * [ ] XML
  * [ ] Components
  * [ ] SecurityScheme
  * [ ] OAuthFlows
  * [ ] OAuthFlow
  * [ ] SecurityRequirement
  * [ ] Tag
  * [ ] ExternalDocumentation

# TODO

* Delete `json-schema-ref-parser` and Implement it on own.
