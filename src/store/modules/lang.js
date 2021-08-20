export default {
    state: {
        locale: localStorage.getItem('locale') || 'en',
    },
    getters: {
        getLocale(state) {
            return state.locale
        },
    },
    mutations: {
        setLocale(state, locale) {
            state.locale = locale
        },
    },
    actions: {
        changeLocale({commit}, locale) {
            commit('setLocale', locale)
        },
    }
}