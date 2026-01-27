export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "State & APIs",
      skills: ["TanStack Query", "REST & GraphQL APIs", "Appwrite", "Async Patterns"],
    },
    {
      category: "UI & UX",
      skills: ["Responsive Design", "Accessibility", "Component Architecture", "Design Handoff"],
    },
    {
      category: "Engineering",
      skills: ["Performance Optimization", "Code Quality", "Scalable Frontend Architecture", "Team Collaboration"],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          Skills & Expertise
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold text-gray-800">{group.category}</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
