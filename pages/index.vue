<template>
  <NuxtLayout name="default">
    <!-- <template #header> Some header template content. Bitch </template> -->

  <div class="flex items-center justify-center h-screen">
    
    <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      Centered Content
    </div>
	
  </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>