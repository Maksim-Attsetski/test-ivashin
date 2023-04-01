# Ivashin Test Frontend application

This application is React project.

### Hierarchy

- `README.md` - project description
- `.git` - git repository
- `package.json` - the main project configuration with all dependencies, scripts and pathes
- `package-lock.json` - automatically generated file by yarn package manager
- `tsconfig.json` - file with typescrypt configuration
- `src` - directory with all project files
  - `src/hooks` - directory custom hooks
  - `src/navigation` - directory with navigation component
  - `src/pages` - directory with all pages
  - `src/UI` - directory with all custom UI components
  - `src/widgets` - directory with separated entityies (modules)
    - `${Entity}` - for example `User`
      - `components` - directory with all components
      - `service.ts` - file with all interactions with backend (for this entity)
      - `state.ts` - file with state for this entity
      - `types.ts` - file with types for this entity
      - `index.ts` - file for connect all in this entity
  - `src/shared` - directory with all other services, types, states and etc.
  - `src/store.js` - the main Redux (store) file
  - `src/index.js` - the main file

### How do I get set up it locally in DEV mode?

- Install the last versions of `node` to your OS
- Install all dependencies via `npm i`
- Run the project via `npm run start`

### How do I can build it manually?

- Install the last versions of `node` to your OS
- Create build via `npm run build`

---

## In this project set up CI/CD flow

### -MASTER- branch:

##### After the code merges to the master it is automatically deployed.
