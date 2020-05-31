export default {
    state: {
        posts: null,
        postsStatus: null,
        postMessage: ''
    },

    getters: {
        posts: state => state.posts,
        newsStatus: state => state.postsStatus,
        postStatus: state => state.postsStatus,
        postMessage: state => state.postMessage,
    },

    actions: {
        fetchNewsPosts: ({commit}) => {
            commit('setPostsStatus', 'loading');
            axios.get('/api/posts')
                .then(res => {
                    commit('setPosts', res.data);
                    commit('setPostsStatus', 'success')
                })
                .catch(error => {
                    commit('setPostsStatus', 'error')
                });
        },
        fetchUserPosts: ({commit, state, dispatch}, userId) => {
            commit('setPostsStatus', 'loading');
            axios.get('/api/users/' + userId + '/posts')
                .then(res => {
                    commit('setPosts', res.data);
                    commit('setPostsStatus', 'success');
                })
                .catch(error => {
                    commit('setPostsStatus', 'error');
                });
        },
        postMessage: ({commit, state}) => {
            commit('setPostsStatus', 'loading');
            axios.post('/api/posts', {body: state.postMessage})
                .then(res => {
                    commit('pushPost', res.data);
                    commit('setPostsStatus', 'success');
                    commit('updateMessage', '');
                })
                .catch(error => {
                });
        },
        likePost: ({commit, state}, data) => {
            axios.post('/api/posts/' + data.postId + '/like')
                .then(res => {
                    commit('pushLikes', {likes: res.data, postKey: data.postKey});
                })
                .catch(error => {
                });
        },
        commentPost: ({commit, state}, data) => {
            axios.post('/api/posts/' + data.postId + '/comment', {body: data.body, })
                .then(res => {
                    commit('pushComments', {comments: res.data, postKey: data.postKey});
                })
                .catch(error => {
                });
        }
    },

    mutations: {
        setPosts: (state, posts) => {
            state.posts = posts;
        },
        setPostsStatus: (state, status) => {
            state.postsStatus = status;
        },
        updateMessage: (state, message) => {
            state.postMessage = message;
        },
        pushPost: (state, post) => {
            state.posts.data.unshift(post);
        },
        pushLikes: (state, data) => {
            state.posts.data[data.postKey].data.attributes.likes = data.likes;
        },
        pushComments: (state, data) => {
            state.posts.data[data.postKey].data.attributes.comments = data.comments;
        }
    },
}
