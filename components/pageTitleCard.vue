<script setup lang="ts">
// props: ['title']

// interface PageTitleCardprops {
//   title?: string;
// }
// const PageTitleCardprops = defineProps<PageTitleCardprops>();

const pageTitleCardroute = useRoute();
const pageTitleCardroutename = pageTitleCardroute.params.name;
</script>

<template>
    <div class="bg-[#5b50dd] w-auto h-20 flex justify-center items-center">
        <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white">{{pageTitleCardroutename}}</h1>
    </div>
</template>
