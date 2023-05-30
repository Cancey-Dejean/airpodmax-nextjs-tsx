import PageWrapper from "@/components/PageWrapper"
import SubNavBar from "@/components/SubNavBar"
import Hero from "@/sections/Hero"
import HeroText from "@/sections/HeroText"
import VideoSection from "@/sections/VideoSection"

export default function Home() {
  return (
    <PageWrapper>
      <SubNavBar />
      <Hero />
      <HeroText />
      <VideoSection />
    </PageWrapper>
  )
}
