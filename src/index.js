// import styles
import '@/sass/style.scss'

// Loading Bootstrap
function loadBootstrap() {
  return import('bootstrap/dist/js/bootstrap.bundle.min.js')
}

// Loading main JS
function loadMainJS() {
  return import('@/js/index')
}

// Load only when necessary
document.addEventListener('DOMContentLoaded', async () => {
  await loadBootstrap()
  await loadMainJS()
})
