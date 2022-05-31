<script setup lang="ts">

interface EventCardProps {
  name?: string;
}
const eventCardProps = defineProps<EventCardProps>();
</script>

<template>
    <div class="w-auto h-16 items-center flex border-b-2">
        <!-- <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white">{{name}}</h1> -->
        <p class="text-gray-400 text-opacity-90">{{name}}</p>
    </div>
</template>
