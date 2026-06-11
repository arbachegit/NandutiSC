'use client'

import { useSlideContext } from './SlideEngine'

export function SlideNav() {
  const { currentSlide, totalSlides, goTo } = useSlideContext()

  return (
    <div className="slide-nav">
      <button
        className="slide-nav__btn"
        onClick={() => goTo(currentSlide - 1)}
        disabled={currentSlide === 0}
        aria-label="Slide anterior"
        style={{ opacity: currentSlide === 0 ? 0.3 : 1 }}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="slide-nav__btn"
        onClick={() => goTo(currentSlide + 1)}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Proximo slide"
        style={{ opacity: currentSlide === totalSlides - 1 ? 0.3 : 1 }}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}
