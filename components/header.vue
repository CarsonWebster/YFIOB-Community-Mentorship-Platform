<template>
    <header class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="home" class="flex items-center mb-4 sm:mb-0">
            <img src="@/assets/images/yfiobtran.png" class="mr-3 h-8" alt="YFIOB Logo" />
            <!-- <p class="mr-4 hover:underline md:mr-6 flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">Home</p> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="home" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="events" class="mr-4 hover:underline md:mr-6 ">Events</a>
            </li>
            <li>
                <a href="messages" class="mr-4 hover:underline md:mr-6">Messages</a>
            </li>
            <li>
                <a href="settings" class="mr-4 hover:underline md:mr-6 ">Account Settings</a>
            </li>
            <li>
                <a onclick="signOut()" href="#" class="hover:underline">Sign-Out</a>
            </li>
        </ul>
    </div>
    </header>
</template>

<script setup>
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
</script>