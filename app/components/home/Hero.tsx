import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          Frontend Engineer building scalable, user-focused web applications
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          I design and build reliable interfaces with React, Next.js, and modern APIs,
          turning complex requirements into clean, maintainable experiences.
        </p>

        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}


