import { createStore } from 'vuex'
import users from "./modules/users";
import lang from "./modules/lang";
import contact from "./modules/contact";
import create from "./modules/project_create";
import create_features from "./modules/feature_create";
import studies from "./modules/studies";
import budgets from "./modules/budgets";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    lang,
    contact,
    create,
    studies,
    budgets,
    create_features

  }
})
