<script setup lang="ts">
const {supabase} = useSupabase();
// const user = useSupabaseUser()
const { user, isLoggedIn } = useAuth();
const router = useRouter()

const { data: profile } = useAsyncData('profile', async () => {
    const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .match({user_id: user.value.id})
    .limit(1)
    .single()
    if (error) throw error
    return profile
})
</script>

<template>
<div >
    <title-card title="Account Settings" />
    <!-- Page Container -->
    <div class="container mx-auto">
    <!-- Two colulms -->
    <div class="flex flex-row flex-wrap py-4">
        <!-- Sidebar -->
        <!-- <p>Asside where are you?</p> -->
        <aside class="w-full sm:w-1/3 md:w-1/4 px-2 border-r-4">
            <div class="sticky top-0 p-4 w-full">
                <!-- navigation -->
                <ul class="flex flex-col overflow-hidden">
                    <p class="font-mono text-xl text-[#5b50dd] py-6">Edit Profile</p>
                    <p class="font-mono text-xl border-b-2">Saved Posts</p>
                    <p class="font-mono text-xl border-b-2">Privacy and Saftey</p>
                    <div class="form-control">
                        <label class="label cursor-pointer border-b-2">
                            <span class="label-text font-mono text-xl">Activity Status</span>
                            <input type="checkbox" class="toggle toggle-primary" checked />
                        </label>
                    </div>
                </ul>
            </div>
        </aside>
        <!-- Main Content -->
        <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <!-- content area -->
            <!-- <pre>{{profile}}</pre> -->
            <div class="">
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Username:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="username" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="username" type="text" :placeholder='profile.username' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">First Name:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="firstname" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="firstname" type="text" :placeholder='profile.firstname' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Last Name:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="lastname" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="lastname" type="text" :placeholder='profile.lastname' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Pronouns:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="pronouns" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="pronouns" type="text" :placeholder='profile.pronouns' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Bio:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="bio" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="bio" type="text" :placeholder='profile.bio' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Graduation Year:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="gradyear" type="number" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="gradyear" type="number" :placeholder='profile.gradyear' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <span class="label-text pr-8">Profession:</span>
                    <label class="label">
                        <input v-if="!profile" v-model="profession" type="text" placeholder='' class="input input-bordered w-full max-w-xs" />
                        <input v-else v-model="profession" type="text" :placeholder='profile.profession' class="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <!-- Questionnaire Modal -->
                <label for="questionnaire-modal" class="btn modal-button">Review Questionnaire</label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="questionnaire-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Questionnaire</h3>
                        <p class="py-4">Questionnaire text body</p>
                        <div class="modal-action">
                        <label for="questionnaire-modal" class="btn">Revise</label>
                        </div>
                    </div>
                </div>
                <!-- <button @click="updateprofile" class="btn">Update information</button> -->
                <!-- <button @click="testlog" class="btn">Testlog</button> -->
                <!-- <button @click="getProfile" class="btn">Get profile</button>
                <button @click="uploadProfile" class="btn">Uplaod profile</button> -->
                <button @click="setProfile" class="btn">Update profile</button>
                <button @click="printProfile" class="btn">Print profile</button>
            </div>
        </main>
    </div>
</div>
</div>
</template>