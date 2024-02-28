# NextJs Repo to demonstrate attempting to use AsyncLocalStorage with Middleware

Start up the server:
```
npm install
npm run dev
```

Hit the server:

```
curl http://localhost:3000
```

Expected the `[LOG]` statements to include a uuid, however they do not:

```
<raw console.log>: context.getStore().get(uuid): 888294796
retrieved store:  undefined
[LOG] [undefined]: begin request
retrieved store:  undefined
[LOG] [undefined]: request finished
```