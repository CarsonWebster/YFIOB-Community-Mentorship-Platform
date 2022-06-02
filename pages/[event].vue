<script setup lang="ts">

// import restaurants from "@/data.json"

const eventroute = useRoute();
const eventroutename = eventroute.params.event;

const {supabase} = useSupabase()
const { data: singleevent } = useAsyncData('singleevent', async () => {
    let { data: singleevent, error } = await supabase
    .from('events')
    .select("*")
    .eq('name', eventroutename).single()
// console.log(singleevent)
return singleevent
})

useMeta({
  title: true ? eventroutename : "404 - Event Not Found",
  meta: [
    {
      name: "viewport",
      content: "width=device-width",
    },
  ],
});

</script>


<template>
    <div>
        <!--  Top Header -->
      <div class="bg-[#5b50dd] w-auto h-auto flex justify-flex items-center">
        <h1 class=" w-96 font-mono font-extrabold text-center text-5xl text-antialiased text-white m-6">{{singleevent.title}}</h1>
        <div class=" w-auto "></div>
      </div>
      <!--  Second Header -->
      <div class="flex-inline">
        <div class="bg-[#000000] w-auto h-20 flex items-center justify-between">
          <button class="btn px-6 mx-6">Sign Up</button>
          <div class="inline-flex">
            <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white pl-120">4:30 - 6:30 pm</h1>
            <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white px-6">March 8th, 2022</h1>
          </div>
        </div>
      </div>
      <!-- Event Content -->
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap py-4">
          <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                <!-- content area -->
                <h1 class="text-black dark:text-white font-bold block font-mono text-xl m-6">Sample Title Text Here</h1>
                <p>{{singleevent.content}}</p>
            </main>
            <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
                <div class="sticky top-0 p-4 w-full">
                    <!-- navigation -->
                    <ul class="flex flex-col overflow-hidden">
                        <h1 class="text-black dark:text-white font-bold block italic">Mentors Attending</h1>
                        <ul>
                          <li>Mentor</li>
                          <li>Mentor</li>
                          <li>Mentor</li>
                        </ul>
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </div>
</template>