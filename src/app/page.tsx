import { DevWithLimifyze } from "./components/DevWithLimifyze"
import Hero from "./components/Hero"
import Ledovation_Prev from "./components/Ledovation_Prev"
import Nav from "./components/Nav"
import OurProducts from "./components/OurProducts"
import SSB_Prev from "./components/SSB_Prev"

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <OurProducts />
      <SSB_Prev />
      <Ledovation_Prev />
      <DevWithLimifyze />
    </main>
  )
}
