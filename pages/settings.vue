<script setup lang="ts">
// definePageMeta({
// //   layout: false,
//   middleware: 'auth'
// });
// import { useState, useEffect } from "react";
// const email = ref('')
// function printEmail() {
// //   loginWithEmail(email.value)
//   console.log('🎹 login with email:', email.value)
// }
const {supabase} = useSupabase();
// const user = useSupabaseUser();
// const {user} = useAuth();
const user = useSupabaseUser()
const { isLoggedIn } = useAuth();
const router = useRouter()


// const session = supabase.auth.session();
// const sessionID = session.user.id;
// console.log("SESSION ID")
// console.log(session)
// console.log('USER HERE !')
// console.log(user.value)
const username = ref('');
const firstname = ref('');
const lastname = ref('');
const pronouns = ref('');
const bio = ref('');
const gradyear = ref('');
const profession = ref('');

// const { data: posts } = useAsyncData('posts', async () => {
//   const { data: posts, error } = await supabase.from('posts').select('*')
//     // console.log("Return data")
//     // console.log(posts)
//   return posts
// })
const { data: profile } = useAsyncData('profile', async () => {
    // let profile = getProfile()
    // console.log('Finally a profile call!')
    // console.log('testing user id')
    // console.log(user)
    const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    // .eq('user_id',  supabase.auth.session().user.id)
    .match({user_id: user.value.id})
    .limit(1)
    .single()
    if (error) throw error
    // console.log("Profile return data: ")
    // console.log(profile)
    // if(!!profile) {
    //     console.log('Bang Bang!')
    // }
  return profile
})
function printProfile() {
    console.log('printing Profile!')
    console.log(profile)
    console.log(profile.value)
    console.log(!!profile.value)
}
// console.log('poopies')
// console.log(profile)
// if (!profile) {
//     console.log('profile is NULL: ')
//     console.log(profile)
//     // profile = ""

// } else {
//     console.log('profile is valid: ')
//     console.log(profile)
// }
async function getProfile() {
    console.log('GET PROFILE')
    console.log(supabase.auth.session().user.id)
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id',  supabase.auth.session().user.id)
    .single()
    if (error) throw error
    console.log(profiles)
    return profiles
}
async function uploadProfile() {
    console.log(supabase.auth.session().user.id)
    const { data, error } = await supabase
    .from('profiles')
    .insert([
        { user_id: supabase.auth.session().user.id, username: username.value , avatar_url: 'otherValue' , website: 'otherValue' , firstname: firstname.value , lastname: lastname.value , pronouns: pronouns.value , mentor: true , bio: bio.value , gradyear: 2021 , profession: profession.value }
    ])
    if (error) throw error
    console.log('uplaodProfile data:')
    console.log(data)
  return data
}
async function updateProfile() {
    const { data, error } = await supabase
    .from('profiles')
    .update([
        { user_id: supabase.auth.session().user.id, username: username.value , avatar_url: 'otherValue' , website: 'otherValue' , firstname: firstname.value , lastname: lastname.value , pronouns: pronouns.value , mentor: true , bio: bio.value , gradyear: 2021 , profession: profession.value }
    ])
    .eq('user_id', supabase.auth.session().user.id)
    if (error) throw error
    console.log('update data:')
    console.log(data)
  return data
}

async function setProfile() {
    console.log('USER')
    console.log(user.value)
    console.log('Profile')
    console.log(profile.value)
    if(!profile.value) {
        console.log('No profile bruh')
        uploadProfile()
    }
    else {
        console.log('YUH profile bruh')
        updateProfile()
        window.location.reload()
    }
}




// const { data: updateprofile } = useAsyncData('updateprofile', async () => {
//     const { data: updateprofile, error } = await supabase
//     .from('profiles')
//     .update({ other_column: 'otherValue' })
//     .eq('some_column', 'someValue')
//     console.log("Update Profile Data: ")
//     console.log(updateprofile)
//     return updateprofile
// })

// async function updateprofile() {
//   let { data, error } = await supabase
//     .from('profiles')
//     .update({ firstname: firstname.value, lastname: lastname.value})
//     .match({ user_id: supabase.auth.session().user.id })
//     console.log('Update Profile Data')
//     console.log(data)
//     // navigateTo('/home')
//   return data
// }

// function updateprofile2() {
//     console.log('update profile with user_id = ')
//     console.log(supabase.auth.session().user.id)
//     supabase.from('profiles').update({ firstname: firstname }).eq('user_id', supabase.auth.session().user.id)

// }

// function printuser() {
//     console.log('USER: ')
//     console.log(user)
//     console.log('SESSION: ')
//     console.log(supabase.auth.session())
//     console.log('SESSION UUID: ')
//     console.log(supabase.auth.session().user.id)
// }


// const { data: profile } = useAsyncData('profiles', async () => {
//   const { data: profile, error } = await supabase.from('profiles').select('*').match({user_id: supabase.auth.session().user.id}).single()
//     console.log("Profile return data: ")
//     console.log(profile)
//   return profile
// })
// console.log(profile)
// console.log("Current Profile: ")
// console.log(profile)
// if (profile.value == null) {
//     console.log("Null profile :(")
// } else {console.log('yes profile :)')}
// async function getPublicProfiles() {
//     try {
//       const { data, error } = await supabase
//         .from('profiles')
//         .select('id, username, avatar_url, website, updated_at')
//         .order('updated_at', { ascending: false })

//       if (error || !data) {
//         throw error || new Error('No data')
//       }
//       console.log('Public profiles:', data)
//     } catch (error) {
//       console.log('error', error.message)
//     }
//   }


// function testlog() {
//     console.log('Testing user inputs!');
//     console.log(username.value);
//     console.log(firstname.value);
//     console.log(lastname.value);
//     console.log(pronouns.value);
//     console.log(bio.value);
//     console.log(gradyear.value);
//     console.log(profession.value);
// }

// testlog()
// getProfile().then(value => { console.log(value.user_id) })
router.push('')
</script>

<!-- <template>
    <title-card title="Account Settings" />
    <label class="label">
          <span class="label-text">Access with email (no password)</span>
        </label>
        <input v-model="email" type="email" placeholder="Type your email"
               class="input input-bordered">
    <label class="btn btn-primary mt-3" @click="printEmail">
        <icon class="mr-2 w-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#1362d6">
            <path
                d="M 2.5371094 6 L 13.810547 16.521484 C 14.477547 17.145484 15.523453 17.145484 16.189453 16.521484 L 27.462891 6 L 2.5371094 6 z M 1 7.3007812 L 1 24 L 29 24 L 29 7.3007812 L 17.554688 17.982422 C 16.837688 18.651422 15.919 18.986328 15 18.986328 C 14.081 18.986328 13.162312 18.651422 12.445312 17.982422 L 1 7.3007812 z"
                fill="currentColor"/>
          </svg>
        </icon>
        Access with email
      </label>
</template> -->
<template>
<div v-if="isLoggedIn" >
    <title-card title="Account Settings" />
    <!-- Page Container -->
    <div class="container mx-auto">
    <!-- Two colulms -->
    <div class="flex flex-row flex-wrap py-4">
        <!-- Sidebar -->
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
            <!-- <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span class="text-3xl">Avatar Placeholder</span>
                </div>
                <img :src="user.user_metadata.avatar_url" class="h-40 w-40 rounded-full object-cover" alt="username">
            </div> -->
            <!-- <div class="avatar">
                <div class="w-24 rounded">
                    <img :src="user.user_metadata.avatar_url" class="h-40 w-40 rounded-full object-cover" alt="username" />
                </div>
            </div> -->
            <!-- Buttons div group -->
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
<loginHome v-else />
</template>