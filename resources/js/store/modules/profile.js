export default {
    state: {
        user: null,
        userStatus: null
    },

    getters: {
        user: state => state.user,
        friendship: state => state.user.data.attributes.friendship,
        status: state => {
            return {
                user: state.userStatus,
                posts: state.postsStatus
            };
        },
        friendButtonText: (state, getters, rootState) => {
            if(rootState.User.user.data.user_id === state.user.data.user_id) {
                return '';
            } else if (getters.friendship === null) {
                return 'Add friend';
            } else if (getters.friendship.data.attributes.confirmed_at === null &&
                getters.friendship.data.attributes.friend_id !== rootState.User.user.data.user_id) {
                return 'Pending request';
            } else if (getters.friendship.data.attributes.confirmed_at !== null) {
                return '';
            }

            return 'Accept'
        },

    },

    actions: {
        fetchUser: ({commit, state, dispatch}, userId) => {
            commit('setUserStatus', 'loading');

            axios.get('/api/users/' + userId)
                .then(res => {
                    commit('setUser', res.data);
                    commit('setUserStatus', 'success');
                })
                .catch(err => {
                    console.log('Unable to load');
                    commit('setUserStatus', 'error');
                });
        },
        sendFriendRequest: ({commit, getters}, friendId) => {
            if(getters.friendButtonText !== 'Add friend') {
                return ;
            }
            axios.post('/api/friend-request', {'friend_id': friendId})
                .then(res => {
                    commit('setUserFriendship', res.data);
                })
                .catch(err => {
                });
        },
        acceptFriendRequest: ({commit, state}, userId) => {
            axios.post('/api/friend-request-response', {'user_id': userId, 'status': 1})
                .then(res => {
                    commit('setUserFriendship', res.data);
                })
                .catch(err => {
                });
        },
        ignoreFriendRequest: ({commit, state}, userId) => {
            axios.delete('/api/friend-request-response/delete', {data: {'user_id': userId}})
                .then(res => {
                    commit('setUserFriendship', null);
                })
                .catch(err => {
                });
        },
    },

    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
        setUserStatus: (state, status) => {
            state.userStatus = status;
        },
        setUserFriendship: (state, friendship) => {
            state.user.data.attributes.friendship = friendship;
        }
    },
}
