export default {
    state: {
        user: null,
        userStatus: null
    },

    getters: {
        authUser: state => {
            return state.user;
        }
    },

    actions: {
        fetchAuthUser: ({commit, state}) => {
            axios.get('/api/auth_user')
                .then(res => {
                    commit('setAuthUser', res.data);
                })
                .catch(err => {
                    console.log('Unable to fetch');
                });
        }
    },

    mutations: {
        setAuthUser: (state, user) => {
            state.user = user;
        }
    },
}
