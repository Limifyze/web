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
    : "w-full h-full max-w-[2000px] object-cover"

  return (
    <div className="mt-12">
      <video className={videoStyle} autoPlay loop muted preload="auto">
        <source src="/assets/turntable.mp4" type="video/mp4" />
      </video>
      {isVideoPaused && (
        <div
          className={`bg-[url("/_next/image?url=/assets/turntable_frame.jpg&w=1920&q=80")] bg-no-repeat bg-center bg-cover w-full h-[400px] bg-fixed`}
        ></div>
      )}
    </div>
  )
}
