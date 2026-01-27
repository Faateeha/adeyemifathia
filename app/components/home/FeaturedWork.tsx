import Link from "next/link";
export default function FeaturedWork() {
  const projects = [
    {
      title: "FlowPay",
      description:
        "Fintech app enabling secure bank-to-bank transfers and transaction monitoring. Built robust frontend handling complex API flows and production edge cases.",
      href: "/work/flowpay",
    },
    {
      title: "MedLink",
      description:
        "Health platform connecting patients to providers. Focused on usability, accessibility, and scalable frontend architecture.",
      href: "/work/medlink",
    },
    {
      title: "CareFinder",
      description:
        "Patient-focused app to find healthcare providers and services efficiently. Emphasis on clean UI and intuitive user flows.",
      href: "/work/carefinder",
    },
    {
      title: "Figma → React",
      description:
        "Design-to-code project showcasing ability to convert Figma designs into responsive, accessible React components.",
      href: "/work/figma-react",
    },
  ];

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          Selected Work
        </h2>

        <div className="mt-12 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <Link
                href={project.href}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View case study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

