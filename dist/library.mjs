import { QToggle, useQuasar } from 'quasar';
import { useCookies } from 'vue3-cookies';
import { stringToBoolean } from '@la40/js-helpers';
import { outlinedDarkMode, outlinedLightMode } from '@quasar/extras/material-icons-outlined';
import { resolveComponent, openBlock, createBlock } from 'vue';

const COOKIE_KEY = "dark-mode";

var script = {
  name: "QDarkModeToggler",
  components: {
    "q-toggle": QToggle,
  },
  data() {
    return {
      model: null,
    };
  },
  setup() {
    const quasar = useQuasar();
    const { cookies } = useCookies();
    return {
      quasar,
      cookies,
      outlinedDarkMode,
      outlinedLightMode
    };
  },
  beforeMount() {
    if (this.cookies.isKey(COOKIE_KEY)) {
      const state = stringToBoolean(this.cookies.get(COOKIE_KEY));
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
  const _component_q_toggle = resolveComponent("q-toggle");

  return (openBlock(), createBlock(_component_q_toggle, {
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

export { script as QDarkModeToggler, install as default };
