import { State } from "./state";
import * as storeType from "./storeTypes";
import { GetterTree } from "vuex";

export default {
  tasks(state) {
    return state.columns.reduce((acc, column) => {
      return acc.concat(column.tasks);
    }, [] as storeType.task[]);
  },
} as GetterTree<State, State>;
