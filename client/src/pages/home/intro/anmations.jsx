import { gsap } from "gsap";

//Animation in Gsap
export const introReveal = () => {
  let tl = gsap.timeline({ delay: 1.5 });
  tl.to(
    "#intro__background",
    {
      yPercent: -120,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.2"
  )
  .fromTo(
    "#header__headline",
    { autoAlpha: 0, yPercent: 50 },
    { autoAlpha: 1, yPercent: 0, duration: 1.6, ease: "power2.out" },
    "-=0.4"
  );
};
