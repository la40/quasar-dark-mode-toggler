'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quasar = require('quasar');
var vue3Cookies = require('vue3-cookies');
var jsHelpers = require('@la40/js-helpers');
var materialIconsOutlined = require('@quasar/extras/material-icons-outlined');
var vue = require('vue');

const COOKIE_KEY = "dark-mode";

var script = {
  name: "QDarkModeToggler",
  components: {
    "q-toggle": quasar.QToggle,
  },
  data() {
    return {
      model: null,
    };
  },
  setup() {
    const quasar$1 = quasar.useQuasar();
    const { cookies } = vue3Cookies.useCookies();
    return {
      quasar: quasar$1,
      cookies,
      outlinedDarkMode: materialIconsOutlined.outlinedDarkMode,
      outlinedLightMode: materialIconsOutlined.outlinedLightMode
    };
  },
  beforeMount() {
    if (this.cookies.isKey(COOKIE_KEY)) {
      const state = jsHelpers.stringToBoolean(this.cookies.get(COOKIE_KEY));
      this.model = state;
      this.quasar.dark.set(state);
    } else {
      this.model = this.quasar.dark.isActive;
    }
  },
  methods: {
    update(state) {
      this.quasar.dark.set(state);
      this.cookies.set(COOKIE_KEY, state);
    },
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toggle = vue.resolveComponent("q-toggle");

  return (vue.openBlock(), vue.createBlock(_component_q_toggle, {
    "onUpdate:modelValue": [
      $options.update,
      _cache[0] || (_cache[0] = $event => (($data.model) = $event))
    ],
    size: "xl",
    modelValue: $data.model,
    color: "primary",
    "checked-icon": $setup.outlinedDarkMode,
    "unchecked-icon": $setup.outlinedLightMode
  }, null, 8 /* PROPS */, ["onUpdate:modelValue", "modelValue", "checked-icon", "unchecked-icon"]))
}

script.render = render;
script.__file = "src/components/QDarkModeToggler.vue";

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
const install = {
  install(Vue, options) {
    Vue.component("q-dark-mode-toggler", script);
  }
};

exports.QDarkModeToggler = script;
exports.default = install;
