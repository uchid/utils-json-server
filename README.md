# utils-json-server

This is API mock server optimized [JSON Server](https://github.com/typicode/json-server) just a little for myself. In case needed instantly and simple server responds dummy data to http request in the process of developing.

# Environment

- npm or yarn
- Node.js
- [JSON Server](https://github.com/typicode/json-server)
- [faker.js](https://github.com/marak/Faker.js)

# Development

```
#Setup
  git clone
  npm install     # (or yarn install) install dependencies
  npm run dummy:generate     # (or yarn run~) generate resources *if needed, pass argument for resource name
  # or write directly resources you want to respond db.json file
  npm run start     # (or yarn run~) start server on the port set in json-server.json file

#Script
  npm run start:with-converter # (or yarn run~) start server with middleware returns object not array in case single resource
```

# Supplement

## generate fake data

In this project, use [faker.js](https://github.com/marak/Faker.js) for generating dummy data.
Modify scripts/dummy-data-generator.js according to dummy data set you want.
Please refer to [documents](https://github.com/marak/Faker.js) for details.

## when want to return object in case single resource result

In some cases, you will probably want to return single object when filtered one result, but json-server will return when used filter with query string such as `/resources?id=1` not with path such as `/resources/1`.  
Therefore, prepare middleware for handling the cases. As with it, should probably optimize routing configuration in routes.json file. [reference issue](https://github.com/typicode/json-server/issues/541)
