import Vuex from "vuex";

import defaultState from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions'

const isDev = process.env.NODE_ENV === 'development';

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
  });
};
