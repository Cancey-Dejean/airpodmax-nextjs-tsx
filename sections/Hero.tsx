import { useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";

export default function Hero() {
  const headPhoneRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(headPhoneRef.current, { opacity: 1, scale: 1, duration: 1.5 }).to(
      textRef.current,
      { opacity: 1, duration: 1.5 },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="h-screen w-screen overflow-x-hidden bg-white">
      <div className="relative mx-auto flex  h-full w-full max-w-[90%] items-end justify-center">
        <div
          ref={headPhoneRef}
          className="image-wrapper absolute top-0 z-[2] flex h-full w-full scale-[1.5] items-center justify-center opacity-0"
        >
          <picture className="max-w-[550px]">
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
              className="h-full w-full"
              priority
            />
          </picture>
        </div>

        <h1
          ref={textRef}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-0"
        >
          <span className="sr-only">AirPods Max</span>
          <picture aria-hidden="true">
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
              className="h-full w-full"
              priority
            />
          </picture>
        </h1>
      </div>

      <div className="copy-wrapper z-[3] mb-[150px] text-center">
        <p className="mx-auto w-full max-w-[66.66667%]">
          Introducing AirPods Max — a perfect balance of exhilarating
          high-fidelity audio and the effortless magic of AirPods. The ultimate
          personal listening experience is here.
        </p>
      </div>
    </section>
  );
}
