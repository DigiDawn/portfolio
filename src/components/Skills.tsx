import { content } from "../lib/content";

const Skills = () => {
  const SkillCard = ({
    title,
    items,
  }: {
    title: string;
    items: { name: string; level: string; value: number }[];
  }) => (
    <div className="p-6 bg-[color:var(--card)] backdrop-blur-sm border border-[color:var(--border)] rounded-3xl">
      <h3 className="text-xl font-semibold mb-5 text-sky-300">{title}</h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between gap-4 mb-2">
              <div>
                <p className="font-medium text-[color:var(--text)]">
                  {item.name}
                </p>
                <p className="text-sm text-[color:var(--muted)]">
                  {item.level}
                </p>
              </div>
              <span className="text-sm font-semibold text-sky-300">
                {item.value}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-[color:var(--surface)]">
              <div
                className="h-2 rounded-full bg-linear-to-r from-sky-500 to-indigo-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-full py-16 bg-[color:var(--bg)] text-[color:var(--text)]"
      aria-label="Skills Section"
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-[color:var(--muted)] mt-2 max-w-2xl mx-auto">
            Full-stack developer for modern web applications, AI integration,
            e-commerce solutions, and business automation. I deliver scalable,
            maintainable systems across frontend, backend, cloud, and tooling.
          </p>
        </header>
        <div className="grid gap-6 xl:grid-cols-2">
          <SkillCard title="Front-end" items={content.skill.frontEnd} />
          <SkillCard
            title="Back-end & Databases"
            items={content.skill.backEnd}
          />
          <SkillCard title="Cloud & DevOps" items={content.skill.cloud} />
          <SkillCard title="Tools & Testing" items={content.skill.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
