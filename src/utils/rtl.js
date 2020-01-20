/**
 * @injectDirectionClass
 * will inject 'prisma-app-is-ltr' (ltr case) or 'prisma-app-is-rtl' (rtl case) in the html tag
 */

export const injectDirectionClass = dir => {
  if (document) {
    if (dir) {
      document.documentElement.classList.remove('prisma-app-is-ltr')
      document.documentElement.classList.add('prisma-app-is-rtl')
    } else {
      document.documentElement.classList.add('prisma-app-is-ltr')
      document.documentElement.classList.remove('prisma-app-is-rtl')
    }
  }
}
