"use-strict";
const fs = require('fs');
const path = require('path');
const { exec } = require("child_process");

function _log(value) { console.log(`-------> ${value}`) }

const appStructure = [
  {
    path: path.join(__dirname, 'src'),
    install: async function () { },
    children: function () {
      return [
        {
          path: path.join(this.path, 'app', 'views'),
          install: async function () { return fs.promises.mkdir(this.path); },
          children: function () {
            return [
              {
                path: path.join(this.path, 'index-deletable.ts'),
                install: function () {
                  return fs.promises.writeFile(
                    this.path,
                    `
// this file should be deleted on development proccess
// all of the main UI modules/components should be placed into app/views/
              `)
                }
              }
            ]
          }
        },
        {
          path: path.join(this.path, 'app', 'core'),
          install: function () {
            return fs.promises.mkdir(this.path);
          },
          children: function () {
            return [
              {
                path: path.join(this.path, 'animations'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the animations should be exported from here\n`
                        );
                      }
                    }
                  ]
                }
              },
              {
                path: path.join(this.path, 'api-services'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `
        export * from './base-api/base-api.service';
        // only baseAPI should be exported from here
        // all other services should be imported as a public member in BaseAPI Service
        //\n`
                        );
                      }
                    },
                    {
                      path: path.join(this.path, 'base-api'),
                      install: function () {
                        return fs.promises.mkdir(this.path)
                          .then(_ => {
                            return exec(`cd ${this.path.replace(/^[^]*src/, 'src')}; ng g s base-api`)

                          })
                      },
                    }
                  ]
                }
              },
              {
                path: path.join(this.path, 'constants'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `
        // All of the constant files should be exported from here
        export * from './app-config-constants';
        export * from './notifier-options';\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'enums'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `
        // All of the enums should be exported from here\n`
                        );
                      }
                    }
                  ];
                }
              },
              {
                path: path.join(this.path, 'guards'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the guards should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'helpers'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the helpers should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'interceptors'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the interceptors should be exported from here\n`
                        );
                      }
                    }
                  ]
                }
              },
              {
                path: path.join(this.path, 'models'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the models should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'services'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the services should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'validators'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the validators should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'modules'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the common modules should be exported from here\n`
                        )
                      }
                    },
                  ]
                }
              },

            ]
          }
        },
        {
          path: path.join(this.path, 'app', 'shared'),
          install: async function () {
            return fs.promises.mkdir(this.path);
          },
          children: function () {
            return [
              {
                path: path.join(this.path, 'components'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the shared components should be exported from here\n`
                        );
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'modals'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the shared modals should be exported from here\n`
                        );
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'pipes'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the shared pipes should be exported from here\n`
                        );
                      }
                    },
                  ]
                }
              },
              {
                path: path.join(this.path, 'directives'),
                install: async function () {
                  return fs.promises.mkdir(this.path);
                },
                children: function () {
                  return [
                    {
                      path: path.join(this.path, 'index.ts'),
                      install: function () {
                        return fs.promises.writeFile(
                          this.path,
                          `// All of the shared components should be exported from here\n`
                        );
                      }
                    },
                  ]
                }
              },
            ]
          }
        },
        {
          path: path.join(this.path, 'styles'),
          install: async function () { return fs.promises.mkdir(this.path); },
          children: function () {
            return [
              {
                path: path.join(this.path, 'styles.scss'),
                install: async function () {
                  await fs.promises.writeFile(
                    this.path,
                    `// all of the common scss files should be placed here
// and should be imported here
`                  );

                  const rootStyleFile = path.join(__dirname, 'src', 'styles.scss');
                  if (fs.existsSync(rootStyleFile)) {
                    await fs.promises.unlink(rootStyleFile);
                  }

                  const angularJSON = await getAngularJSON();
                  if (!angularJSON) { return; }

                  const stylesArray = findProperty(angularJSON, 'styles');
                  if (!stylesArray?.length) { return; }
                  stylesArray.forEach(styles => {
                    styles.push(this.path.replace(/^[^]*src/, 'src'));

                    const index = styles.indexOf('src/styles.scss');
                    if (index === -1) { return; }

                    styles.splice(index, 1);
                  })

                  await rewriteAngularJSON(angularJSON);
                }
              }
            ]
          }
        },
        {
          path: path.join(this.path, 'themes'),
          install: async function () { return fs.promises.mkdir(this.path); },
          children: function () {
            return [
              {
                path: path.join(this.path, 'themes.scss'),
                install: function () {
                  return fs.promises.writeFile(
                    this.path,
                    `// all of the themes should be defined/imported here`)
                    .then(async () => {
                      const angularJSON = await getAngularJSON();
                      if (!angularJSON) { return; }

                      const stylesArray = findProperty(angularJSON, 'styles');
                      if (!stylesArray?.length) { return; }
                      stylesArray.forEach(styles => {
                        styles.push(this.path.replace(/^[^]*src/, 'src'));
                      })

                      await rewriteAngularJSON(angularJSON);
                    })
                }
              }
            ]
          }
        }
      ]
    }
  }

];

function getAngularJSON() {
  const angularJsonPath = path.join(__dirname, 'angular.json');

  if (!fs.existsSync(angularJsonPath)) {
    console.log('angular.json file not found');
    return null;
  }

  return fs.promises
    .readFile(angularJsonPath, 'utf-8')
    .then(response => JSON.parse(response))
    .catch(() => null);
}

function rewriteAngularJSON(json) {
  const angularJsonPath = path.join(__dirname, 'angular.json');

  if (!fs.existsSync(angularJsonPath)) {
    console.log('angular.json file not found');
    return null;
  }

  return fs.promises
    .writeFile(angularJsonPath, JSON.stringify(json, null, 2))
    .catch(() => console.log('angular.json file was not changes'))
}

function findProperty(object, property) {
  var result = [];
  function recursivelyFindProp(o, keyToBeFound) {
    Object.keys(o).forEach(function (key) {
      if (key === keyToBeFound) result.push(o[key]);

      if (typeof o[key] === 'object') {
        recursivelyFindProp(o[key], keyToBeFound);
      }
    });
  }
  recursivelyFindProp(object, property);
  return result;
}

(async function init() {
  await initTSConfig();
  await initREADME();
  await initLinter();

  await initAppStructure();
})();

async function initAppStructure() {
  return installChildren(appStructure)
    .then(() => { _log('App Structure generates successfully') })
    .catch(error => { console.log(error); });
}

async function installChildren(children) {
  for (let i = 0; i < children.length; i++) {
    const item = children[i];
    if (!fs.existsSync(item.path)) {
      await item.install();
    }
    if (item.children) {
      await installChildren(item.children());
    }
  }
}

async function initTSConfig() {
  const filePath = path.join(__dirname, 'tsconfig.json');
  const content = await fs.promises
    .readFile(filePath, 'utf-8')
    .catch(e => { _log(`TS Config was not changed because of ${e}`); });
  if (!content) { return; }
  const splitedConent = content.split('\n');
  const firstLineComment = splitedConent.splice(0, 1)[0];

  let config = JSON.parse(splitedConent.join('\n'));

  // change the conpilation config
  config = {
    ...config,
    compilerOptions: {
      ...config.compilerOptions,
      paths: {
        "@env": ["src/environments/environment"],
        "@core/*": ["app/core/*"],
        "@shared/*": ["app/shared/*"],
        "@views/*": ["app/views/*"]
      }
    }
  }

  const writableConfig = `${firstLineComment}\n${JSON.stringify(config, null, 2)}\n`;

  // override the updated file
  await fs.promises
    .writeFile(filePath, writableConfig)
    .then(() => _log(`TS Config was changed successfully`))
    .catch(err => _log(`TS Config was not changed because of ${err}`));

}



async function initLinter() {
  _log('The linter should be configured later')
}


async function initREADME() {
  const readME = `# README

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
\`\`\`sh
npm install -g @angular/cli
\`\`\`

## Installation

At the start, you need to install project dependencies by:
\`\`\`sh
npm install
\`\`\`

## Usage

- **Run the Project** -  
Run the \`ng serve --open\` command for a run dev server. Navigate to **\`http://localhost:4200/\`**. The app will automatically reload if you change any of the source files.
- **Generate Angular Resources by CLI** - Run \`ng generate directive|pipe|service|class|guard|interface|enum|module {resource_name}\` - command with apropriate **resource_type** and **resource_name** to generate new Angular resource
- **Build the Project** - Run \`ng build\` command to build the project. The build artifacts will be stored in the **\`dist/\`** directory.
- **Running Unit Tests** - Run \`ng test\` command to execute the unit tests via [Karma](https://karma-runner.github.io).
- **Running E2E Tests** - Run \`ng e2e\` command to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
- **Angular CLI Command Help** - To get more help on the Angular CLI use \`ng help\` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Directory Structure

Here is the base Project Structure:

\`\`\`sh
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
\`\`\`

### Core/Animations 

1. All of the animations placed into \`src/app/core/animations\` directory
2. Animations should be imported from \`@core/animations\`
3. The generated/created animation files 
should be exported from \`src/app/core/animations/index\` file

### Core/API-Services

1. All of the API services placed into \`src/app/core/api-services\` directory
2. All of the services should be defined as public in the \`BaseAPIService\` 
3. In the components should be imported only \`BaseAPIService\` Service

### Core/Constants

1. All of the constants placed into \`src/app/core/constants\` directory
2. Animations should be imported from \`@core/constants\`
3. The generated/created constants files 
should be exported from \`src/app/core/constants/index\` file

###  Core/Enums 

1. All of the enums placed into \`src/app/core/enums\` directory
2. Enums should be imported from \`@core/enums\`
3. The generated/created enum files 
should be exported from \`src/app/core/enums/index\` file

### Core/Guards

1. All of the guars placed into \`src/app/core/guards\` directory
2. Guards should be imported from \`@core/guards\`
3. The generated/created guard files 
should be exported from \`src/app/core/guards/index\` file

### Core/Helpers

1. All of the helper classes placed into \`src/app/core/helpers\` directory
2. Helpers should be imported classes from \`@core/helpers\`
3. The generated/created helper class files 
should be exported from \`src/app/core/helpers/index\` file

### Core/Interceptors

1. All of the interceptors classes placed into \`src/app/core/interceptors\` directory
2. Helpers should be imported classes from \`@core/interceptors\`
3. The generated/created interceptors class files 
should be exported from \`src/app/core/interceptors/index\` file

### Core/Models

1. All of the models placed into \`src/app/core/models\` directory
2. Models should be imported from \`@core/models\`
3. The generated/created model files 
should be exported from \`src/app/core/models/index\` file

### Core/Modules

1. All of the modules placed into \`src/app/core/modules\` directory
2. Models should be imported from \`@core/modules\`
3. The generated/created modules files 
should be exported from \`src/app/core/modules/index\` file

### Core/Services

1. All of the services placed into \`src/app/core/services\` directory
2. Models should be imported from \`@core/services\`
3. The generated/created services files 
should be exported from \`src/app/core/services/index\` file

### Core/Validators

1. All of the validators placed into \`src/app/core/validators\` directory
2. Validators should be imported from \`@core/validators\`
3. The created validator files 
should be exported from \`src/app/core/validators/index\` file

### Shared/Components

1. All of the shared components placed into \`src/app/shared/components\` directory
2. Shared components should be imported from \`@core/components\`
3. Imported and exported from \`SharedModule\`
4. The generated/created shared component files 
should be exported from \`src/app/shared/components/index\` file
5. The generated/created shared components should be imported into \`SharedModule\`

### Shared/Modals

1. All of the shared modals placed into \`src/app/shared/modals\` directory
2. Shared modals should be imported from \`@core/modals\`
3. Imported and exported from \`SharedModule\`
4. The generated/created modals
should be exported from \`src/app/shared/modals/index\`
5. The generated/created shared modals should be imported into \`SharedModule\`

### Shared/Directives

1. All of the shared directives placed into \`src/app/shared/directives\` directory
2. Shared directives should be imported from \`@core/directives\`
3. Imported and exported from \`SharedModule\`
4. The generated/created directive files 
should be exported from \`src/app/shared/directives/index\` file
5. The generated/created directives should be imported into \`SharedModule\`

### Shared/Pipes

1. All of the shared pipes placed into \`src/app/shared/pipes\` directory
2. Pipes should be imported from \`@core/pipes\`
3. Imported and exported from \`SharedModule\`
4. The generated/created pipe files 
should be exported from \`src/app/shared/pipes/index\` file
5. The generated/created pipes should be import into \`SharedModule\`

### Translation strategy

1. each component has its own object into \`/src/assets/i18n/{lang}.json\` 
by component name as kebak case like this

\`\`\`json
{
    "child_component": {
        "title": "title translated text"
    },
    "another_component": {
        "title_of_some_details": "simple text"
    }
}
\`\`\`

### Theming strategy

1. On the project uses Angular material Theming strategy for more info about it check here [Material Theming](https://material.angular.io/guide/theming).
#### Ways for add new theme to the project
1. if needed to use custom colors which doesn't exists in material pallets
- 1. you need to create file in \`/src/themes/\` directory with name: \`{theme_name}-theme-colors.scss\`
- 2. generate the neccessary colors pallette and put it into \`{theme_name}-theme-colors.scss\`
- 3. you can easily generate and take colors from here [Material Color Generator](http://mcg.mbitson.com)
2. if needed to use existing material pallettes you can just use it like this {$mat-color_name}. check the bottom of this link for see all of the material pallettes [Material Existing Pallettes](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)

## Troubleshooting

Let's use [GitLab Issue Tracker](https://git.dpllc.co/digital-pomegranate/angular/angular-base-project/-/issues) for this project

## Maintainers

- [Ashot Aleqsanyan - Angular Developer](https://git.dpllc.co/Ashot)

## Future Scope

`;

  const filePath = path.join(__dirname, 'README.md');

  // override the updated file
  await fs.promises
    .writeFile(filePath, readME)
    .then(() => _log(`README was changed successfully`))
    .catch(err => _log(`README was not changed because of ${err}`));
}