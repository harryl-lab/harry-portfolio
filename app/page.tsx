export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          HL.
        </a>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Software Engineer · University of Michigan
        </p>

        <h1 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
          Harry Luo
        </h1>

        <h2 className="mt-5 max-w-4xl text-3xl font-medium leading-tight text-zinc-400 md:text-5xl">
          I build scalable software and intelligent systems.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Computer Science and Mathematics of Finance and Risk Management
          student at the University of Michigan, interested in software
          engineering, distributed systems, AI, and financial technology.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="mailto:luoha@umich.edu"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Building software at the intersection of systems, AI, and real-world
          problems.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          I enjoy designing software systems that are fast, reliable, and
          useful. My experience spans full-stack development, backend
          infrastructure, AI systems, and multithreaded programming.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>

        <h2 className="mb-14 text-4xl font-semibold">
          Where I&apos;ve worked.
        </h2>

        <div className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">
                  Ningbo Pioneer Supply Chain Co., Ltd.
                </h3>

                <p className="mt-1 text-zinc-400">
                  Software Engineer Intern
                </p>
              </div>

              <p className="text-sm text-zinc-500">
                Jun. 2026 — Jul. 2026
              </p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
              Built a React, FastAPI, and PostgreSQL logistics platform
              managing 10,000+ shipment records and centralizing order search,
              tracking, and delivery exception monitoring.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">Avodah</h3>

                <p className="mt-1 text-zinc-400">
                  AI Software Engineer Intern
                </p>
              </div>

              <p className="text-sm text-zinc-500">
                Jan. 2026 — Mar. 2026
              </p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
              Worked on low-latency speech-to-text infrastructure using C++,
              asynchronous inference, and AWS ECS.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Selected Projects
        </p>

        <h2 className="mb-14 text-4xl font-semibold">
          Things I&apos;ve built.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Distributed Search Engine */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-sm text-zinc-500">Distributed Systems</p>

            <h3 className="mt-3 text-2xl font-semibold">
              Distributed Search Engine
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              Concurrent web crawler and inverted-index search engine with
              distributed workers and Redis-backed task queues.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              Go · Redis · PostgreSQL · gRPC · Docker
            </p>
          </div>

          {/* C++ Engine */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-sm text-zinc-500">Systems Programming</p>

            <h3 className="mt-3 text-2xl font-semibold">
              Multithreaded C++ Task Engine
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              Multithreaded task execution engine featuring a custom thread
              pool, priority queue, and work-stealing scheduler.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              C++ · Multithreading · CMake · GoogleTest
            </p>
          </div>

          {/* Real-Time Collaboration */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600 md:col-span-2">
            <p className="text-sm text-zinc-500">Full Stack</p>

            <h3 className="mt-3 text-2xl font-semibold">
              Real-Time Collaboration Platform
            </h3>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Real-time multi-user collaboration platform with WebSocket
              messaging, Redis Pub/Sub, authentication, persistent sessions,
              and cloud deployment.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              React · TypeScript · FastAPI · Redis · PostgreSQL · AWS
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Technical Skills
        </p>

        <h2 className="mb-12 text-4xl font-semibold">
          What I work with.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Languages</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Python, C++, C, Go, JavaScript, TypeScript, SQL, HTML/CSS
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Frameworks</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              React, FastAPI, Flask
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Databases &amp; Cloud
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              PostgreSQL, Redis, AWS, AWS ECS
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Tools &amp; Technologies
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              REST APIs, WebSockets, gRPC, Docker, Git, CMake, GoogleTest
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-32 text-center"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
          Let&apos;s build something interesting.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
          I&apos;m always interested in software engineering opportunities,
          technical projects, and new ideas.
        </p>

        <a
          href="mailto:luoha@umich.edu"
          className="mt-10 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          luoha@umich.edu
        </a>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-8 text-sm text-zinc-600">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <p>© 2026 Harry Luo</p>
          <p>harry-luo.com</p>
        </div>
      </footer>
    </main>
  );
}