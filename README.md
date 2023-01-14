# Quasar Dark Mode Toggler

Simple dark mode toggler made with q-toggle. It use the 'vue3-cookies' to save the state in cookies.

![Demo](https://github.com/la40/demo-media/blob/main/gifs/quasar-dark-mode-toggler-demo.gif?raw=true)

## Install

##### Via npm

```bash
$ npm i -S @la40/quasar-dark-mode-toggler
```

##### Via yarn

```bash
$ yarn add @la40/quasar-dark-mode-toggler
```

## Use

##### Globally via Vue.use

```javascript
//boot/components.js
import QDarkModeToggler from "@la40/quasar-dark-mode-toggler";

export default boot(({ app }) => {
  app.use(QDarkModeToggler);
});

//layouts/MainLayout.vue
<template>
  ...
  <span class="fixed-top-right">
    <q-dark-mode-toggler></q-dark-mode-toggler>
  </span>
  ...
</template>;
```

##### Locally via components

```javascript
//layouts/MainLayout.vue
<template>
  ...
  <span class="fixed-top-right">
    <QDarkModeToggler></QDarkModeToggler>
  </span>
  ...
</template>;

import { QDarkModeToggler } from "@la40/quasar-dark-mode-toggler";

export default {
  components: {
    QDarkModeToggler,
  },
};
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Security

If you discover any security related issues, please email lachezar@grigorov.website instead of using the issue tracker.

## Credits

- [Lachezar Grigorov](http://grigorov.website)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
