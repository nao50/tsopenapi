# tsopenapi
Typescript OpenAPI parser and validator

# usage

```typescript
import { TsOpenAPI } from '';

TsOpenAPI.validate(YOUR_YAML_FILE_PATH, (err, api) => {
  if (!err) {
    console.log("API name: %s, Version: %s", api.info.title, api.info.version);
  }
  else {
    console.error(err);
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