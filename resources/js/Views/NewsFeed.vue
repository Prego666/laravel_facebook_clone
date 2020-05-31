<template>
    <div class="flex flex-col items-center py-4">
        <NewPost/>

        <p v-if="newsStatus === 'loading'">Loading posts...</p>
        <Post v-else v-for="(post, postKey) in posts.data" :key="postKey" :post="post"/>
    </div>
</template>

<script>
    import NewPost from '../components/NewPost';
    import Post from '../components/Post';
    import {mapGetters} from 'vuex';

    export default {
        name: "NewsFeed",

        components: {
            NewPost,
            Post,
        },
        computed: {
            ...mapGetters({
                posts: 'posts',
                newsStatus: 'newsStatus'
            })
        },
        mounted() {
            this.$store.dispatch('fetchNewsPosts')
        }
    }
</script>

<style scoped>

</style>
