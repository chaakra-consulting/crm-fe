// src/router/auth.js
import api from '../api/api'
import { router, addRoutesByRole } from './index'

function isTokenExpired() {
  const expiresAt = localStorage.getItem('token_expired_at')
  if (!expiresAt) return true

  const now = new Date()
  const expiredDate = new Date(expiresAt)

  if (now >= expiredDate) {
    // hapus token otomatis
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('token_expired_at')
    return true
  }

  return false
}

async function isServerTokenValid() {
  try {
    await api.get('/auth/me')
    return true
  } catch (error) {

    if (error.response && error.response.status === 401) {
      return false
    }

    return false
  }
}

// export async function requireAuth(to, from, next) {
//   const token = localStorage.getItem("token")
//   if (!token || isTokenExpired()) return next({ path: "/" })

//   const valid = await isServerTokenValid()
//   if (!valid) {
//     localStorage.removeItem("token")
//     localStorage.removeItem("user")
//     localStorage.removeItem("token_expired_at")
//     return next({ path: "/" })
//   }

//   // ambil role user
//   const user = JSON.parse(localStorage.getItem("user"))
//   const userRole = user.role_slug

//   addRoutesByRole(user.role_slug)
//   // cek apakah route ini diizinkan untuk role
//   if (to.meta?.roles && !to.meta.roles.includes(userRole)) {
//     // jika tidak diizinkan → redirect ke halaman lain
//     return next({ path: '/dashboard' }) // contoh redirect
//   }

//   next()
// }

export function guestOnly(to, from, next) {
  const token = localStorage.getItem('token')

  if (token && !isTokenExpired()) {
    return next({ path: '/dashboard' })
  }

  next()
}
