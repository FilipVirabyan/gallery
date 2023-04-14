# README

  1. [Getting Started](#getting-started)
  2. [Reference Setup](#reference-setup)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Directory Structure](#directory-structure)
  6. [Troubleshooting](#troubleshooting)
  7. [Maintainers](#maintainers)
  8. [Future Scope](#future-scope)


## Getting Started

--------------------------------------------------------------------------------

## Reference Setup

**Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://www.npmjs.com/get-npm)**

If you don't have Angular, run this command to install it:
```sh
npm install -g @angular/cli
```

## Installation

At the start, you need to install project dependencies by:
```sh
npm install
```

## Usage

- **Run the Project** -  
Run the `ng serve --open` command for a run dev server. Navigate to **`http://localhost:4200/`**. The app will automatically reload if you change any of the source files.
- **Generate Angular Resources by CLI** - Run `ng generate directive|pipe|service|class|guard|interface|enum|module {resource_name}` - command with apropriate **resource_type** and **resource_name** to generate new Angular resource
- **Build the Project** - Run `ng build` command to build the project. The build artifacts will be stored in the **`dist/`** directory.
- **Running Unit Tests** - Run `ng test` command to execute the unit tests via [Karma](https://karma-runner.github.io).
- **Running E2E Tests** - Run `ng e2e` command to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
- **Angular CLI Command Help** - To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Directory Structure

Here is the base Project Structure:

```sh
src
├── app
│   ├── core
│   │   ├── animations
│   │   ├── api-services
│   │   ├── constants
│   │   ├── enums
│   │   ├── guards
│   │   ├── helpers
│   │   ├── interceptors
│   │   ├── models
│   │   ├── modules
│   │   ├── services
│   │   └── validators
│   ├── shared
│   │   ├── components
│   │   ├── directives
│   │   ├── modals
│   │   └── pipes
│   └── views
├── styles
└── themes
```

### Core/Animations 

1. All of the animations placed into `src/app/core/animations` directory
2. Animations should be imported from `@core/animations`
3. The generated/created animation files 
should be exported from `src/app/core/animations/index` file

### Core/API-Services

1. All of the API services placed into `src/app/core/api-services` directory
2. All of the services should be defined as public in the `BaseAPIService` 
3. In the components should be imported only `BaseAPIService` Service

### Core/Constants

1. All of the constants placed into `src/app/core/constants` directory
2. Animations should be imported from `@core/constants`
3. The generated/created constants files 
should be exported from `src/app/core/constants/index` file

###  Core/Enums 

1. All of the enums placed into `src/app/core/enums` directory
2. Enums should be imported from `@core/enums`
3. The generated/created enum files 
should be exported from `src/app/core/enums/index` file

### Core/Guards

1. All of the guars placed into `src/app/core/guards` directory
2. Guards should be imported from `@core/guards`
3. The generated/created guard files 
should be exported from `src/app/core/guards/index` file

### Core/Helpers

1. All of the helper classes placed into `src/app/core/helpers` directory
2. Helpers should be imported classes from `@core/helpers`
3. The generated/created helper class files 
should be exported from `src/app/core/helpers/index` file

### Core/Interceptors

1. All of the interceptors classes placed into `src/app/core/interceptors` directory
2. Helpers should be imported classes from `@core/interceptors`
3. The generated/created interceptors class files 
should be exported from `src/app/core/interceptors/index` file

### Core/Models

1. All of the models placed into `src/app/core/models` directory
2. Models should be imported from `@core/models`
3. The generated/created model files 
should be exported from `src/app/core/models/index` file

### Core/Modules

1. All of the modules placed into `src/app/core/modules` directory
2. Models should be imported from `@core/modules`
3. The generated/created modules files 
should be exported from `src/app/core/modules/index` file

### Core/Services

1. All of the services placed into `src/app/core/services` directory
2. Models should be imported from `@core/services`
3. The generated/created services files 
should be exported from `src/app/core/services/index` file

### Core/Validators

1. All of the validators placed into `src/app/core/validators` directory
2. Validators should be imported from `@core/validators`
3. The created validator files 
should be exported from `src/app/core/validators/index` file

### Shared/Components

1. All of the shared components placed into `src/app/shared/components` directory
2. Shared components should be imported from `@core/components`
3. The generated/created shared component files 
should be exported from `src/app/shared/components/index` file

### Shared/Modals

1. All of the shared modals placed into `src/app/shared/modals` directory
2. Shared modals should be imported from `@core/modals`
3. Imported and exported from `SharedModule`
4. The generated/created modals
should be exported from `src/app/shared/modals/index`
5. The generated/created shared modals should be imported into `SharedModule`

### Shared/Directives

1. All of the shared directives placed into `src/app/shared/directives` directory
2. Shared directives should be imported from `@core/directives`
3. Imported and exported from `SharedModule`
4. The generated/created directive files 
should be exported from `src/app/shared/directives/index` file
5. The generated/created directives should be imported into `SharedModule`

### Shared/Pipes

1. All of the shared pipes placed into `src/app/shared/pipes` directory
2. Pipes should be imported from `@core/pipes`
3. Imported and exported from `SharedModule`
4. The generated/created pipe files 
should be exported from `src/app/shared/pipes/index` file
5. The generated/created pipes should be import into `SharedModule`


## Maintainers

- [Filip VIrabyan - Angular Developer](https://git.dpllc.co/FilipVirabyan)

## Future Scope

