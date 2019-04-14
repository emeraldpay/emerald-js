/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// this generates /src/icons components from the emerald-svg-icons repository
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const camelize = require('underscore.string/camelize');
const capitalize = require('underscore.string/capitalize');

const license = "/*\n" +
  "Copyright 2019 ETCDEV GmbH\n" +
  "\n" +
  "Licensed under the Apache License, Version 2.0 (the \"License\");\n" +
  "you may not use this file except in compliance with the License.\n" +
  "You may obtain a copy of the License at\n" +
  "\n" +
  "    http://www.apache.org/licenses/LICENSE-2.0\n" +
  "\n" +
  "Unless required by applicable law or agreed to in writing, software\n" +
  "distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
  "WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
  "See the License for the specific language governing permissions and\n" +
  "limitations under the License.\n" +
  "*/\n";

const config = {
  plugins: [
    {
      removeViewBox: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      mergePaths: true,
    },
    {
      transformsWithOnePath: true,
    },
    {
      removeAttrs: {
        attrs: '(data-name)',
      },
    },
  ],
};

function findStrokeElements(ast) {
  function walk(items, strokes) {
    for (var i = 0; i < items.content.length; i++) {
      var item = items.content[i];
      if (item.content) {
        walk(item, strokes);
      }
      if (item.hasAttr('stroke')) {
        strokes.push(item);
      }
    }
    return strokes;
  }
  return walk(ast, []);
}

const svgo = new SVGO({
  plugins: config.plugins.concat([
    {
      removeWrappingSVG: {
        type: 'full', // full, perItem or perItemReverse
        description: 'Removes the wrapping SVG Element',
        parmas: {}, // arbitrary data
        fn(data) { // eslint-disable-line func-names
          // return everything inside of the SVG element
          return data.content[0];
        },
      },
    },
    {
      replaceStrokeWithCurrentColor: {
        type: 'full', // full, perItem or perItemReverse
        description: 'uses currentColor instead of specified stroke color',
        parmas: {}, // arbitrary data
        fn(data) {
          const elems = findStrokeElements(data);
          elems.forEach((elem) => {
            elem.attr('stroke').value = 'currentColor'; // eslint-disable-line no-param-reassign
          });
          return data;
        },
      },
    },
    {
      replaceStrokeWidthForReact: {
        type: 'full', // full, perItem or perItemReverse
        description: 'uses strokeWidth instead of stroke-width to appease react',
        parmas: {}, // arbitrary data
        fn(data) {
          const elems = findStrokeElements(data);
          elems.forEach((elem) => {
            const { value } = elem.attr('stroke-width'); // eslint-disable-line no-param-reassign
            elem.addAttr({
              name: 'strokeWidth',
              prefix: '',
              local: 'strokeWidth',
              value,
            });
            elem.removeAttr('stroke-width');
          });
          return data;
        },
      },
    },
    {
      replaceStrokeMiterLimitForReact: {
        type: 'full', // full, perItem or perItemReverse
        description: 'uses strokeMiterLimit instead of stroke-miterlimit to appease react',
        parmas: {}, // arbitrary data
        fn(data) {
          const elems = findStrokeElements(data);
          elems.forEach((elem) => {
            const { value } = elem.attr('stroke-miterlimit'); // eslint-disable-line no-param-reassign
            elem.addAttr({
              name: 'strokeMiterlimit',
              prefix: '',
              local: 'strokeMiterlimit',
              value,
            });
            elem.removeAttr('stroke-miterlimit');
          });
          return data;
        },
      },
    },
  ]),
});

const getOptimizedSVGForFilepath = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf8');
  return svgo.optimize(data, { path: filepath }).then((result) => {
    return result.data;
  });
}

const writeIndexFile = (names) => {
  // build src/icons3/index.js
  const templ = names.map((name) => {
    return `export { default as ${name} } from './${name}';`
  }).join('\n');
  const fp = path.resolve(__dirname, '../src/', 'index.ts');
  fs.writeFile(fp, license + templ, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log('index.ts created');
  });
}

const writeIconFile = (name, content) => {
  // build src/icons3/<IconName>.js
  return new Promise((resolve, reject) => {
    const fp = path.resolve(__dirname, '../src/', `${name}.tsx`);
    fs.writeFile(fp, license + content, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      console.log('wrote', fp);
      resolve(name);
    });
  });
}

const writeStoriesFile = (names) => {
  // build stories/icons/index.tsx
  const imports = [
    'import * as React from \'react\';',
    'import { storiesOf } from \'@storybook/react\';',
    `import { \n  ${names.join(',\n  ')} } from '../../src/';`,
  ].join('\n');

  const elements = names.map((name) => {
    return `<span title=\'${name}\'><${name} /></span>`;
  });
  const storyTemplate = `storiesOf('icons', module)\n  .add('all', () => (<div>\n    ${elements.join('\n    ')}\n</div>))`;
  const fp = path.resolve(__dirname, '../stories/icons/', 'index.tsx');
  return new Promise((resolve, reject) => {
    fs.writeFile(fp, license + imports + storyTemplate, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

const renderSVGIconTemplate = (svgPath, name) => (`import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const ${name}: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    ${svgPath}
  </SvgIcon>
);

export default ${name};
`);

const from = path.resolve(__dirname, '../node_modules/@emeraldplatform/svg-icons/icons/');
const files = glob.sync(`${from}/*.svg`);

Promise.all(files.map((filename) => {
  return getOptimizedSVGForFilepath(filename).then((data) => {
    // write icon files
    const name = camelize(capitalize(path.parse(filename).name));
    const content = renderSVGIconTemplate(data, name);
    return writeIconFile(name, content);
  });
})).then((names) => {
  writeIndexFile(names);
  writeStoriesFile(names);
});



