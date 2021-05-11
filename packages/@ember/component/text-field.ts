import { EMBER_MODERNIZED_BUILT_IN_COMPONENTS } from '@ember/canary-features';
import { deprecate } from '@ember/debug';

if (EMBER_MODERNIZED_BUILT_IN_COMPONENTS) {
  deprecate(
    `Using Ember.TextField or importing from 'TextField' has been deprecated, install the ` +
      `\`@ember/legacy-built-in-components\` addon and use \`import { TextField } from ` +
      `'@ember/legacy-built-in-components';\` instead`,
    false,
    {
      id: 'ember.built-in-components.import',
      until: '4.0.0',
      for: 'ember-source',
      since: {
        enabled: '3.27.0',
      },
      url: 'https://deprecations.emberjs.com/v3.x#toc_ember-built-in-components-import',
    }
  );
}

export { TextField as default } from '@ember/-internals/glimmer';
