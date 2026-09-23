import { useEffect, useRef, useState } from 'react'

const useGallery = () => {
  const galleryRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return undefined

    const updateArrowVisibility = () => {
      setCanScrollLeft(gallery.scrollLeft > 0)
      setCanScrollRight(
        gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 1
      )
    }

    const images = gallery.querySelectorAll('img')
    gallery.addEventListener('scroll', updateArrowVisibility)
    window.addEventListener('resize', updateArrowVisibility)
    images.forEach((image) => image.addEventListener('load', updateArrowVisibility))
    updateArrowVisibility()

    return () => {
      gallery.removeEventListener('scroll', updateArrowVisibility)
      window.removeEventListener('resize', updateArrowVisibility)
      images.forEach((image) => image.removeEventListener('load', updateArrowVisibility))
    }
  }, [])

  const scrollGallery = (direction) => {
    const gallery = galleryRef.current
    if (!gallery) return

    const firstImage = gallery.querySelector('img')
    const secondImage = firstImage?.nextElementSibling
    const imageStep = secondImage
      ? secondImage.offsetLeft - firstImage.offsetLeft
      : firstImage?.offsetWidth || gallery.clientWidth

    gallery.scrollBy({
      left: direction * imageStep,
      behavior: 'smooth',
    })
  }

  return {
    galleryRef,
    canScrollLeft,
    canScrollRight,
    scrollGallery,
  }
}

export default useGallery
