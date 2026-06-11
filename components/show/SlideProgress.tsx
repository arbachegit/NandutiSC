'use client'

import { useSlideContext } from './SlideEngine'

export function SlideProgress() {
  const { currentSlide, totalSlides } = useSlideContext()
  const pct = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 0

  return (
    <>
      <div className="progress-bar" style={{ width: `${pct}%` }} />

      <div className="slide-counter">
        <span>{String(currentSlide + 1).padStart(2, '0')}</span>
        {' / '}
        {String(totalSlides).padStart(2, '0')}
      </div>
    </>
  )
}
