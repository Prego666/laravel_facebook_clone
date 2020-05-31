export default {
    state: {
        title: 'Welcome'
    },

    getters: {
        pageTitle: state => {
            return state.title;
        }
    },

    actions: {
        setPageTitle: ({commit, state}, title) => {
            commit('setTitle', title);
        }
    },

    mutations: {
        setTitle: (state, title) => {
            state.title = title + ' | Facebook';
            document.title = state.title;
        }
    }
}
