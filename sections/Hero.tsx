import { useEffect, useLayoutEffect, useRef } from "react"
import Image from "next/image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger)
  const heroSectionRef = useRef(null)
  const headPhoneRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const t1 = gsap.timeline()

    t1.fromTo(
      headPhoneRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 1.8 }
    ).fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=0.2"
    )

    return () => {
      // tl.kill();
      if (t1) t1.kill()
    }
  }, [])

  useLayoutEffect(() => {
    let heroSection = heroSectionRef.current

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: true,
        },
      })
      .fromTo(headPhoneRef.current, { scale: 1 }, { scale: 1.2 }, "key1")
      .fromTo(textRef.current, { scale: 1 }, { scale: 0.8 }, "key1")

    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
    <section
      className="relative mt-[-96px] flex h-screen w-screen items-center justify-center  bg-white"
      ref={heroSectionRef}
    >
      <div className="lockup-inner relative top-[120px] mx-auto w-full max-w-[90%]">
        {/* Headphone */}

        <div
          ref={headPhoneRef}
          className="relative z-[2] mx-auto max-w-[700px]"
        >
          <picture>
            <source
              srcSet="/images/hero_small_2x.png 2x"
              media="(max-width:734px)"
            />
            <source
              srcSet="/images/hero_medium_2x.png 2x"
              media="(max-width:1068px)"
            />
            <source
              srcSet="/images/hero_large_2x.png 2x"
              media="(max-width:1440px)"
            />
            <source
              srcSet="/images/hero_xlarge_2x.png 2x"
              media="(min-width:0px)"
            />
            <Image
              src="/images/hero_xlarge.png"
              alt="Image shows AirPods Max."
              width={1147}
              height={604}
              className="h-full w-full object-contain"
              priority={true}
            />
          </picture>
        </div>

        {/* BG Text */}
        <h1
          ref={textRef}
          className="absolute  top-0 z-[1] h-full w-full text-center"
        >
          <span className="sr-only">AirPods Max</span>
          <picture aria-hidden="true" className="block h-full w-full">
            <source
              srcSet="/images/hero_logo__gl48ra12v32a_small.jpg, /images/hero_logo__gl48ra12v32a_small_2x.jpg 2x"
              media="(max-width:734px)"
            />
            <source
              srcSet="/images/hero_logo__gl48ra12v32a_medium_2x.jpg, /images/hero_logo__gl48ra12v32a_medium_2x.jpg 2x"
              media="(max-width:1068px)"
            />
            <source
              srcSet="/images/hero_logo__gl48ra12v32a_large.jpg, /images/hero_logo__gl48ra12v32a_large.jpg 2x"
              media="(max-width:1440px)"
            />
            <source
              srcSet="/images/hero_logo__gl48ra12v32a_xlarge.jpg, /images/hero_logo__gl48ra12v32a_xlarge.jpg 2x"
              media="(min-width:0px)"
            />
            <Image
              src="/images/hero_logo__gl48ra12v32a_xlarge.jpg"
              alt="Image shows AirPods Max."
              width={1147}
              height={604}
              className="box-border block  h-full w-full object-contain object-[50%_47%]"
              priority={true}
            />
          </picture>
        </h1>
      </div>
    </section>
  )
}
