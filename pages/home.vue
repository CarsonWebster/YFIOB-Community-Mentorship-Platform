<script setup lang="ts">
// definePageMeta({
//   middleware: 'auth'
// })

// const user = useSupabaseUser()
// const {user} = useAuth();
// console.log(user);
// console.log(user.id);
const {supabase} = useSupabase();
const user = useSupabaseUser()
const { data: posts } = useAsyncData('posts', async () => {
  const { data: posts, error } = await supabase.from('posts').select('*')
    // console.log("Return data")
    // console.log(posts)
  return posts
})


</script>

<template>
    <!-- <pre v-for="post in posts" v-bind:key="post.id">{{post.title}} : {{post.content}}</pre> -->
    <div v-if="!!user">
        <TitleCard title="Community Mentorship Platform" />
        <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
            <!-- fixed-width -->
            <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div class="sticky top-0 p-4 w-full h-full">
                    <!-- leftside goes here -->
                    <FilterBox />
                </div>
            </div>
            <main role="main" class="w-full flex-grow pt-1 px-3">
                <!-- fluid-width: main content goes here -->
                <ul>
                    <li v-for="post in posts" v-bind:key="post.id">
                        <PostCard :title='post.name' :content='post.content' :author='post.author'/>
                    </li>
                </ul>
            </main>
            <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
                <!-- fixed-width -->
                <div class="flex sm:flex-col px-2">
                    <!-- sidebar goes here -->
                    <adBox />
                </div>
            </div>
        </div>
    </div>
    <loginHome v-else />
<!-- <footer class="bg-black mt-auto">
    <h1>Footer</h1>
</footer> -->
</template>

<style scoped>
@media (min-width: 640px) {
    .w-fixed {
        flex: 0 1 230px;
        min-width: 230px;
    }
}

</style>