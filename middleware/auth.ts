export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
  
    if (!user.value) {
      return navigateTo('/')
    }
  })

// import { ssrContextKey } from 'nuxt/dist/app/compat/capi'
// import useAuth from '~/composables/useAuth'

// export default defineNuxtRouteMiddleware((to, from) => {
//   // const { isLoggedIn } = useAuth()
//   // if (!isLoggedIn()) {
//   //   process.client && alert('This page requires authentication.')
//   //   return navigateTo('/')
//   // }
//   // const user = useSupabaseUser()
//   // console.log("middleware")
//   // console.log(user.value)
//   // if (!user.value) {
//   //   return navigateTo('/')
//   // }
// })
// import useAuth from '~/composables/useAuth'

// export default defineNuxtRouteMiddleware((to, from) => {
//   console.log('middleware time!')
//   const { isLoggedIn } = useAuth()
//   if (!isLoggedIn()) {
//     console.log('middleware booting')
//     process.client && alert('This page requires authentication.')
//     return navigateTo('/messages')
//   }
// })
// export default defineNuxtRouteMiddleware((to, _from) => {
//   const user = useSupabaseUser()
//   console.log('middleware auth!')
//   console.log(user.value)
//   if (!user.value) {
//     console.log('middleware redirect!!')
//     console.log(user.value)
//     return navigateTo('/events/bruh')
//   }
// })