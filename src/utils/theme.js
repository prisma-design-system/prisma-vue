import color from './color.js'
export default {
  name: 'theme',
  prfunction (json) {
    for (var clave in json) {
      let colorx
      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '')
      } else if (/[#]/g.test(json[clave])) {
        let rgbx = color.hexToRgb(json[clave])
        colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
      } else {
        colorx = json[clave]
      }
      color.setCssVariable('--pr-' + clave, colorx)
    }
  },
  change (mode) {
    if (mode === 'darken') {
      document.body.style.setProperty(`--pr-theme-bg`, '#f4f7f8')
      document.body.style.setProperty(`--pr-theme-color`, '#2c3e50')
      document.body.style.setProperty(`--pr-theme-layout`, '#fff')
      document.body.style.setProperty(`--pr-theme-bg2`, '#eef2f5')
      localStorage.setItem('theme', 'darker')
    } else {
      document.body.style.setProperty(`--pr-theme-bg`, '#18191c')
      document.body.style.setProperty(`--pr-theme-color`, '#fff')
      document.body.style.setProperty(`--pr-theme-layout`, '#1e2023')
      document.body.style.setProperty(`--pr-theme-bg2`, '#141417')
      localStorage.setItem('theme', 'lighthen')
    }
  }
}
