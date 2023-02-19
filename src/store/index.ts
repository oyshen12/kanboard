import { State } from "./storeTypes";
import { createStore, Store } from "vuex";
import { state } from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  getters,
  mutations,
  actions,
});
