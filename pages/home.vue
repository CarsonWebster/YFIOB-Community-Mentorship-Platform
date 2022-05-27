<script setup>
// definePageMeta({
//   middleware: 'auth'
// })

</script>

<template>
    <TitleCard title="Community Mentorship Platform" />
    <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <!-- fixed-width -->
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
        <div class="sticky top-0 p-4 w-full h-full">
            <!-- nav goes here -->
            <FilterBox />
        </div>
    </div>
    <main role="main" class="w-full flex-grow pt-1 px-3">
        <!-- fluid-width: main content goes here -->
        <ul>
            <li><PostCard /></li>
            <li><PostCard /></li>
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