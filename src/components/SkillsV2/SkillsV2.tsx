export default function Skills() {
  const items = [
    "Logo Design",
    "Web Design",
    "Brand Identity",
    "UI/UX Prototyping",
    "Creative Strategy",
  ];
  return (
    <div>
      <h3 className="mb-6 font-heading text-5xl">
        Core Skills<span className="text-accent">.</span>
      </h3>
      <ul className="space-y-5">
        {items.map((t) => (
          <li key={t} className="border-l-4 border-accent/50 pl-4">
            <h5 className="font-heading text-3xl">{t}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
