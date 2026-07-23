/* eslint-disable @next/next/no-img-element */

const projects = [
  {
    category: "Reliability",
    name: "Sippy B2BUA",
    description: "A resilient, RFC 3261-compliant SIP stack and call controller.",
    href: "https://github.com/sippy/b2bua",
    position: "reliability",
    accent: "coral",
    mark: "R",
  },
  {
    category: "Performance",
    name: "Go B2BUA",
    description: "A lean, multicore Go implementation built for high call volumes.",
    href: "https://github.com/sippy/go-b2bua",
    position: "performance",
    accent: "amber",
    mark: "P",
  },
  {
    category: "AI",
    name: "Infernos",
    description: "Real-time multimodal inference for voice and human interaction.",
    href: "https://github.com/sippy/Infernos",
    position: "ai",
    accent: "violet",
    mark: "AI",
  },
  {
    category: "Media",
    name: "RTPProxy",
    description: "High-performance RTP relay, recording, encryption and media services.",
    href: "https://github.com/sippy/rtpproxy",
    position: "media",
    accent: "blue",
    mark: "M",
  },
  {
    category: "WebRTC",
    name: "WebRTC Phone",
    description: "A browser-to-SIP reference stack built on B2BUA and RTPProxy.",
    href: "https://github.com/sippy/webrtc_phone",
    position: "webrtc",
    accent: "cyan",
    mark: "W",
  },
  {
    category: "Automation",
    name: "VoIPtests",
    description: "Continuous interoperability testing across open SIP components.",
    href: "https://github.com/sippy/voiptests",
    position: "automation",
    accent: "green",
    mark: "A",
  },
  {
    category: "Call recording",
    name: "Sippy SRS",
    description: "A compact SIP recording server for capture and processing workflows.",
    href: "https://github.com/sippy/Sippy_Recorder",
    position: "recording",
    accent: "pink",
    mark: "CR",
  },
  {
    category: "Embedded",
    name: "MicroSippy",
    description: "Tiny SIP and RTP building blocks for embedded and high-speed systems.",
    href: "https://github.com/sobomax/microsippy",
    position: "embedded",
    accent: "orange",
    mark: "E",
  },
];

const mediaProjects = [
  {
    name: "rtp.io",
    description: "RTP and RTCP protocol building blocks for real-time media systems.",
    href: "https://github.com/sippy/rtp.io",
    mark: "IO",
  },
  {
    name: "rtp_cluster",
    description: "Distributed RTP relay coordination and resilient media routing.",
    href: "https://github.com/sippy/rtp_cluster",
    mark: "RC",
  },
  {
    name: "go-rtp_cluster",
    description: "A Go implementation of the RTP cluster control layer.",
    href: "https://github.com/sippy/go-rtp_cluster",
    mark: "GO",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <a
      className={`project-card ${project.position} ${project.accent}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}
    >
      <div className="card-topline">
        <span className="card-mark">{project.mark}</span>
        <span className="card-category">{project.category}</span>
        <ArrowIcon />
      </div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </a>
  );
}

function MediaSubcard({
  project,
  index,
}: {
  project: (typeof mediaProjects)[number];
  index: number;
}) {
  return (
    <a
      className="media-subcard"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{ "--media-delay": `${index * 55}ms` } as React.CSSProperties}
    >
      <span className="media-subcard-mark">{project.mark}</span>
      <span className="media-subcard-copy">
        <strong>{project.name}</strong>
        <small>{project.description}</small>
      </span>
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="B2BUA.org home">
          B2BUA<span>.org</span>
        </a>
        <a
          className="github-link"
          href="https://github.com/sippy"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
          GitHub
        </a>
      </header>

      <section id="top" className="intro">
        <p className="eyebrow">Open-source real-time communications</p>
        <h1>One call.<br />Every layer.</h1>
        <p className="lede">
          A family of focused building blocks for creating reliable, high-performance
          voice systems—from embedded endpoints to real-time AI.
        </p>
      </section>

      <section className="project-map" aria-label="B2BUA open source projects">
        <svg
          className="map-lines"
          viewBox="0 0 1000 920"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g className="connector-strokes">
            <line x1="419" y1="375.6" x2="227" y2="218" />
            <line x1="500" y1="312" x2="500" y2="172" />
            <line x1="581" y1="375.6" x2="773" y2="218" />
            <line x1="572.7" y1="524.7" x2="753" y2="730" />
            <line x1="500" y1="572" x2="500" y2="748" />
            <line x1="427.3" y1="524.7" x2="247" y2="730" />
            <line x1="405.8" y1="443" x2="207" y2="445" />
          </g>
          <g
            className="media-spoke-trigger"
            tabIndex={0}
            aria-label="Reveal related media projects"
          >
            <line className="media-spoke-line" x1="594.2" y1="443" x2="793" y2="445" />
            <line className="media-spoke-hit" x1="594.2" y1="443" x2="793" y2="445" />
          </g>
          <g className="connector-points">
            <circle cx="227" cy="218" r="4" />
            <circle cx="500" cy="172" r="4" />
            <circle cx="773" cy="218" r="4" />
            <circle cx="793" cy="445" r="4" />
            <circle cx="753" cy="730" r="4" />
            <circle cx="500" cy="748" r="4" />
            <circle cx="247" cy="730" r="4" />
            <circle cx="207" cy="445" r="4" />
          </g>
        </svg>

        <div className="hub">
          <img
            className="hub-logo"
            src="/sippy-logo.png"
            alt=""
            aria-hidden="true"
            width={340}
            height={340}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            srcSet="/sippy-logo.png 640w"
            data-nimg="1"
          />
          <div className="hub-core">
            <span className="hub-label">The core</span>
            <strong>B2BUA</strong>
            <small>Back-to-back user agent</small>
          </div>
          <span className="hub-pulse" aria-hidden="true" />
        </div>

        {projects.map((project, index) => {
          if (project.position === "media") {
            return (
              <div className="media-stack" key={project.name}>
                <ProjectCard project={project} index={index} />
                <div
                  className="media-layer"
                  id="media-layer"
                  aria-label="Related media projects"
                >
                  {mediaProjects.map((mediaProject, mediaIndex) => (
                    <MediaSubcard
                      key={mediaProject.name}
                      project={mediaProject}
                      index={mediaIndex}
                    />
                  ))}
                </div>
              </div>
            );
          }

          return <ProjectCard key={project.name} project={project} index={index} />;
        })}
      </section>

      <footer>
        <p>Built in the open for the real-time communications community.</p>
        <a href="https://github.com/sippy" target="_blank" rel="noreferrer">
          Explore Sippy on GitHub <ArrowIcon />
        </a>
      </footer>
    </main>
  );
}
