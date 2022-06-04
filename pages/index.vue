<script setup lang="ts">
const {user, isLoggedIn } = useAuth();

definePageMeta({
  layout: false,
  // middleware: 'auth'
});


function log() {
  console.log(user)
  console.log(isLoggedIn())
}

</script>

<template>
  <Header />
  <loginHome />
 
  <!-- Footer -->
  <footer class="bg-[#5b50dd] w-auto h-48 flex justify-center items-center">
      <!-- <h1 class="font-mono font-extrabold text-center text-4xl antialiased text-white"> </h1> -->
  </footer>
</template>

