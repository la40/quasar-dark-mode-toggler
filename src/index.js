import QDarkModeToggler from "./components/QDarkModeToggler.vue";

const install = {
  install(Vue, options) {
    Vue.component("q-dark-mode-toggler", QDarkModeToggler);
  },
};
export { install as default, QDarkModeToggler };
