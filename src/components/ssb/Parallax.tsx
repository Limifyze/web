"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Parallax() {
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(true)

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

  if (isVideoPaused) {
    return (
      <Image
        className="h-[400px] w-full object-cover object-center"
        src="/assets/ssb-happy.jpg"
        width={1920}
        height={1080}
        quality={100}
        alt="Limifyze Selfservice-Bar"
      />
    )
  } else
    return (
      <div
        className={`bg-[url("/_next/image?url=%2Fassets%2Fssb-happy.jpg&w=3840&q=80")] bg-no-repeat bg-center bg-cover w-full h-[400px] bg-fixed`}
      ></div>
    )
}
