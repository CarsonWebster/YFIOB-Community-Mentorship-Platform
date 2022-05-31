// export default defineNuxtRouteMiddleware((to, _from) => {
//     const user = useSupabaseUser()
  
//     if (!user.value) {
//       return navigateTo('/login')
//     }
//   })

import useAuth from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn()) {
    process.client && alert('This page requires authentication.')
    return navigateTo('/')
  }
})