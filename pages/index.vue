<script setup lang="ts">
const {user, isLoggedIn, loginWithSocialProvider} = useAuth();

definePageMeta({
  layout: false,
  middleware: 'auth'
});

// function handleGoogleSignIn() {
//   try {
//     console.log("Trying handleGoogleSignIn")
//     // const {user, error} = loginWithSocialProvider('github')
//     // if (error) throw error
//     //   alert('Check your email for the login link!')
//   } catch (error) {
//     console.log("handleGOogleSignIn Error")
//   } finally {

//   }
// }

</script>

<template>
  <!-- <NuxtLayout name="default"> -->
    <!-- <template #header> Some header template content </template> -->

  <!-- <div class="flex items-center justify-center h-screen">
    
    <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      Centered Content
    </div>
	
  </div> -->
  <!-- <LoginForm /> -->
  <!-- </NuxtLayout> -->
  <!-- Top Header -->
  <Header />
  <div class="bg-[#5b50dd] w-auto h-48 flex justify-center items-center">
        <h1 class="font-mono font-extrabold text-center text-4xl antialiased text-white">YFIOB Community Mentorship Program</h1>
    </div>
    <!-- Main container -->
  <div class="container mx-auto">
    <!-- Center everything div -->
    <div class="justify-center items-center">
      <!-- Welcome text -->
      <h1 class="py-24 font-mono font-extrabold text-center text-4xl antialiased text-[#5b50dd]">Welcome !</h1>
      <p class="py-8 font-mono font-extralight text-center text-2xl antialiased text-black">Create your account</p>
      <div class="flex justify-center items-center">
        <button @click="loginWithSocialProvider('google')" type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Sign in with Google
        </button>
        <p>is user logged in: {{ isLoggedIn() }}</p>
      </div>
      <!-- Sign up buttons box -->
      <div class="py-24 flex justify-center items-center">
        <student-login-modal />
        <p class="px-8 font-mono font-extralight text-center text-2xl antialiased text-black">OR</p>
        <mentor-login-modal />
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="bg-[#5b50dd] w-auto h-48 flex justify-center items-center">
      <!-- <h1 class="font-mono font-extrabold text-center text-4xl antialiased text-white"> </h1> -->
  </footer>
</template>

