<template>
  <q-toggle
    @update:model-value="update"
    size="xl"
    v-model="model"
    color="primary"
    :checked-icon="outlinedDarkMode"
    :unchecked-icon="outlinedLightMode"
  />
</template>

<script>
import { QToggle, useQuasar } from "quasar";
import { useCookies } from "vue3-cookies";
import { stringToBoolean } from "@la40/js-helpers";
import { outlinedDarkMode,  outlinedLightMode} from "@quasar/extras/material-icons-outlined";


const COOKIE_KEY = "dark-mode";

export default {
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
</script>
