import CountUp from "@/ui/CountUp";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          <div>
            <div className="flex items-center justify-center gap-2">
              <h4 className="banner-size font-heading text-6xl md:text-7xl">
                <CountUp end={25} start={10} />
              </h4>
              <span className="text-accent text-6xl md:text-7xl">+</span>
            </div>
            <p className="mt-2 capitalize text-white/80">years experience</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <h4 className="banner-size font-heading text-6xl md:text-7xl">
                <CountUp end={390} start={300} />
              </h4>
              <span className="text-accent text-6xl md:text-7xl">+</span>
            </div>
            <p className="mt-2 capitalize text-white/80">Satisfied clients</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <h4 className="banner-size font-heading text-6xl md:text-7xl">
                <CountUp end={550} start={500} />
              </h4>
              <span className="text-accent text-6xl md:text-7xl">+</span>
            </div>
            <p className="mt-2 capitalize text-white/80">Projects done</p>
          </div>
          <div>
            <h4 className="banner-size font-heading text-6xl md:text-7xl">
              <CountUp end={15} start={0} />
            </h4>
            <p className="mt-2 capitalize text-white/80">Winning awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
