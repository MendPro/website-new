// components/TimedModal.tsx
'use client'
import Link from 'next/link';
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
          Sign up to receive weekly emails from Nia AI
        </p>
        <a
  href="https://nia.mendpro.io/nia"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>Let’s Go</Button>
</a>


      </div>
    </ModalWrapper>
  )
}
