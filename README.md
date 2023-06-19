# sqlite-typescript
Get started with SQLite database in a TypeScript project

# Installation

```bash
github-app -u mooninlearn -e initRepo -n sqlite-typescript -d "Get started with SQLite database in a TypeScript project"

cd sqlite-typescript
npm init -y

# typescript 사용시
touch tsconfig.json
npm i -D @types/node

mkdir src
cd src
touch index.ts
```

> `/.gitignore`
```
node_modules/
*.db
```

> `/pacakge.json`

```json
  "author": "Moon In Learn <mooninlearn@gmail.com>",
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc --build",
    "clean": "tsc --build --clean"
  },
  "type": "module"
```

```json
{
  "compilerOptions": {
    "lib": ["es5", "es6"],
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "rootDir": "src",
    "outDir": "./dist",
    "sourceMap": true,
    "noImplicitAny": false,
    "module": "esnext",
    "target": "es6",
    "moduleResolution": "node",
    "typeRoots": ["node_modules/@types"],
  },
  "type": "module",
  "include": ["src/**/*"],
  "exclude": ["node_modules"],
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  }
}
```


```bash
npm install sqlite3 && npm install --save-dev @types/sqlite3
```

# Create / Edit

> index.js
```js
import sqlite3 from 'sqlite3'

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');

// Fetch a random integer between -99 and +99
db.get(
  'SELECT RANDOM() % 100 as result',
  (_, res) => console.log(res)
);
```

## 변경 사항
```js
// * BEFORE
import { Database } from 'sqlite3';

// Open a SQLite database, stored in the file db.sqlite
const db = new Database('db.sqlite');

// * AFTER
import sqlite3 from 'sqlite3'

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');
```

=====

# Creating a database schema

## BUG!
### MESSAGE
```
ReferenceError: __dirname is not defined in ES module scope
    at file:///C:/MoonDev/withTool/inSqlite/learning/Web/sagot/sqlite-typescript/src/index.ts:8:25  
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
```

### SOL
```ts
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
```

## exec

```bash
npm run dev

# result
[]
```

=====

## exec

```bash
npm run dev

# result
[ { title: 'Last article' }, { title: 'First article' } ]
