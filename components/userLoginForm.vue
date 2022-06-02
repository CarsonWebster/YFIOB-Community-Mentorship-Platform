<!-- <script setup lang="ts">
const {user, isLoggedIn, loginWithEmail, loginWithSocialProvider} = useAuth();
const email = ref('')

function accessWithEmail() {
  loginWithEmail(email.value)
  console.log('🎹 login with email:', email.value)
}
</script> -->

<!-- <template>
  <div>
    <form class="px-5 py-7">
      <h1 class="font-bold text-center text-2xl mb-5">
        Top Nuxt 3 Login
      </h1>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Access with email (no password)</span>
        </label>
        <input v-model="email" type="email" placeholder="Type your email"
               class="input input-bordered">
      </div>

      <label for="login-modal" class="btn btn-primary w-full mt-3" @click="accessWithEmail">
        <icon class="mr-2 w-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#1362d6">
            <path
                d="M 2.5371094 6 L 13.810547 16.521484 C 14.477547 17.145484 15.523453 17.145484 16.189453 16.521484 L 27.462891 6 L 2.5371094 6 z M 1 7.3007812 L 1 24 L 29 24 L 29 7.3007812 L 17.554688 17.982422 C 16.837688 18.651422 15.919 18.986328 15 18.986328 C 14.081 18.986328 13.162312 18.651422 12.445312 17.982422 L 1 7.3007812 z"
                fill="currentColor"/>
          </svg>
        </icon>
        Access with email
      </label>

    </form>
    <div class="p-5">
      <label class="label">
        <span class="label-text">Or access with a provider</span>
      </label>
      <div class="flex flex-col gap-3">

        <button type="button" class="btn" @click="loginWithSocialProvider('google')">
          <icon class="mr-2 w-4 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  fill="currentColor"/>
            </svg>
          </icon>
          Google
        </button>


      </div>
    </div>
  </div>
</template>
 -->
