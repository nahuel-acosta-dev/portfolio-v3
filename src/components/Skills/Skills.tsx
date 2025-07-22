import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiSass,
  SiDjango,
  SiMysql,
  SiPayloadcms,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

const SkillBubble = ({
  Icon,
  label,
}: {
  Icon: React.ElementType;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 transition rounded-xl w-28 h-28 justify-center">
    <Icon className="text-3xl text-amber-200" />
    <span className="text-sm text-white text-center">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
          <p className="text-amber-100">
            Estas son las tecnologías con las que trabajo
          </p>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillBubble Icon={FaHtml5} label="HTML" />
            <SkillBubble Icon={FaCss3Alt} label="CSS" />
            <SkillBubble Icon={FaJs} label="JavaScript" />
            <SkillBubble Icon={FaReact} label="React" />
            <SkillBubble Icon={SiNextdotjs} label="Next.js" />
            <SkillBubble Icon={SiPayloadcms} label="Payload CMS" />
            <SkillBubble Icon={SiTailwindcss} label="Tailwind" />
            <SkillBubble Icon={SiBootstrap} label="Bootstrap" />
            <SkillBubble Icon={SiSass} label="Sass" />
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Backend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillBubble Icon={SiMongodb} label="MongoDB" />
            <SkillBubble Icon={FaNodeJs} label="Node.js" />
            <SkillBubble Icon={SiExpress} label="Express" />
            <SkillBubble Icon={SiMysql} label="MySQL" />
            <SkillBubble Icon={FaPython} label="Python" />
            <SkillBubble Icon={SiDjango} label="Django" />
          </div>
        </div>

        {/* Otros */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Otros</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillBubble Icon={SiPostman} label="Postman" />
            <SkillBubble Icon={FaDocker} label="Docker" />
            <SkillBubble Icon={SiTypescript} label="Typescript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
