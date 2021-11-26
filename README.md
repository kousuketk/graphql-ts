# graphql-ts

### run server
```
yarn nodemon --ext ts,yaml,graphql --exec 'ts-node' src/params/index.ts
```

### input sample query
```
query {
  chapter(param:{no:2}) {
    no
    name
    version
    original
    postDate
  }
}
```

### return
```
{
  "data": {
    "chapter": {
      "no": 2,
      "name": "no2 rutern data",
      "version": "1.0.0",
      "original": true,
      "postDate": "2021-11-26T12:00:00Z"
    }
  }
}
```
