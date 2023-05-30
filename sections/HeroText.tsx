type HeroTextProps = {}

function HeroText({}: HeroTextProps) {
  return (
    <div className="copy-wrapper z-[3] mb-[181px] mt-[100px]">
      <p className="mx-auto w-full max-w-[900px]  text-center font-display text-[32px] font-semibold leading-[1.25] tracking-[.002em] text-black">
        Introducing AirPods Max — a perfect balance of exhilarating
        high-fidelity audio and the effortless magic of AirPods. The ultimate
        personal listening experience is here.
      </p>
    </div>
  )
}

export default HeroText
