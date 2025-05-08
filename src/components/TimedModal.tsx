// components/TimedModal.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from './button'
import ModalWrapper from './modalParent'
// import { Testimonials } from '@/components/testimonials'



export default function TimedModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000) 

    return () => clearTimeout(timer)
  }, [])


 const handleClose = () => setIsOpen(false)


  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose}>
      <div className="px-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Still here?</h2>
        <p className="mb-4 text-gray-600">
          You’ve been browsing for a while. Ready to take the next step?
        </p>
        <Button onClick={handleClose}>Let’s Go</Button>
      </div>
    </ModalWrapper>
  )
}
