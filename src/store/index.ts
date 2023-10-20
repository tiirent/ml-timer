import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      groups: [] as any[],
    };
  },
});

export default store;
