"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Video() {
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        setIsVideoPaused(false)
      } else {
        setIsVideoPaused(true)
      }
    }
  })

  const videoStyle = isVideoPaused
    ? "w-full h-full max-w-[2000px] object-cover hidden"
    : "w-full h-full max-w-[2000px] mx-auto object-cover"

  return (
    <div className="mt-12">
      <video className={videoStyle} autoPlay loop muted preload="auto">
        <source src="/assets/turntable.mp4" type="video/mp4" />
      </video>
      {isVideoPaused && (
        <Image
          className="object-cover object-center w-full h-full max-h-[600px] relative my-24"
          src="/assets/turntable_frame.jpg"
          width={1920}
          height={1080}
          quality={100}
          alt="Limifyze 24/7"
        />
      )}
    </div>
  )
}
