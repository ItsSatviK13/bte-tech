import { useEffect } from 'react'

export default function Seo({ title, description, canonical, keywords, image }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | BTE-Tech`
    }

    const setMeta = (selector, attr, value, attrValue) => {
      let el = document.querySelector(selector)

      if (!el) {
        el = document.createElement(attr === 'name' ? 'meta' : 'link')
        if (attr === 'name') {
          el.setAttribute('name', value)
        } else {
          el.setAttribute('rel', value)
        }
        document.head.appendChild(el)
      }

      if (attr === 'name') {
        el.setAttribute('content', attrValue)
      } else {
        el.setAttribute('href', attrValue)
      }
    }

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
    }

    if (keywords) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    }

    if (image) {
      let ogImage = document.querySelector('meta[property="og:image"]')
      if (!ogImage) {
        ogImage = document.createElement('meta')
        ogImage.setAttribute('property', 'og:image')
        document.head.appendChild(ogImage)
      }
      ogImage.setAttribute('content', image)
    }

    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      canonicalLink.setAttribute('href', canonical)
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(canonicalLink)
      }
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', title || 'BTE-Tech')
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', description || 'BTE-Tech verification and compliance infrastructure.')
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription)
    }
  }, [title, description, canonical, keywords, image])

  return null
}
