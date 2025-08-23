import ButtonRipple from "@/ui/ButtonRipple";

const HeroV2 = () => {
  return (
    <section id="hero" className="relative section-padding">
      <div className="mx-auto max-w-4xl px-4 text-center md:max-w-5xl">
        <p className="text-xl tracking-[0.3em] text-accent">
          Hi, I’m Kimi Lewis
        </p>
        <h1 className="banner-size mt-3 font-heading text-6xl leading-[1.05] md:text-8xl">
          Logo & Web Designer <br /> Based in Newyork.
        </h1>
        <p className="mt-5 text-white/80">
          I help businesses transform their visions into <br />
          impactful visual identities and stunning online presences.
        </p>

        <ButtonRipple
          href="#portfolio"
          className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3"
        >
          <span>view all works</span>
        </ButtonRipple>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-80px] mx-auto h-[220px] max-w-4xl opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-600), transparent 70%)",
        }}
      />
    </section>
  );
};

export default HeroV2;
/*
const HeroV2 = () => {
  return (
    <section id="hero" className="relative section-padding">
      <div className="mx-auto max-w-4xl px-4 text-center md:max-w-5xl">
        <p className="text-xl tracking-[0.3em] text-accent">Hi, I’m Kimi Lewis</p>

        <h1 className="banner-size mt-4">
          LOGO & WEB DESIGNER <br /> BASED IN NEWYORK.
        </h1>

        <p className="mt-5 text-white/80">
          I help businesses transform their visions into <br />
          impactful visual identities and stunning online presences.
        </p>

        <ButtonRipple href="#portfolio" className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3">
          <span>view all works</span>
        </ButtonRipple>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-80px] mx-auto h-[220px] max-w-4xl opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-600), transparent 70%)",
        }}
      />
    </section>
  );
};
*/
