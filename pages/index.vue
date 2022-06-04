<script setup lang="ts">
const {user, isLoggedIn } = useAuth();

// definePageMeta({
//   // layout: false,
//   middleware: 'auth'
// });


function log() {
  console.log(user)
  console.log(isLoggedIn())
}
console.log('ahhh')
console.log(user.value)
console.log(isLoggedIn())
</script>

<template>
<div>
  <!-- <Header /> -->
  <loginHome v-if='!isLoggedIn()' />
  <home v-else />
 
  <!-- Footer -->
  <!-- <footer class="bg-[#5b50dd] w-auto h-48 flex justify-center items-center">
  </footer> -->
</div>
</template>

