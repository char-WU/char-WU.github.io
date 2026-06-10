export default function About() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
      <p>
        I&apos;m Charlotte, currently pursuing an{" "}
        <span className="font-medium text-foreground">
          MSc in Computer Science
        </span>{" "}
        at The University of Edinburgh. Before this, I completed a double major
        in Computer Science and Statistics at the University of Auckland.
      </p>
      <p>
        My focus is{" "}
        <span className="font-medium text-foreground">machine learning</span>
        , particularly{" "}
        <span className="font-medium text-foreground">NLP</span> and{" "}
        <span className="font-medium text-foreground">
          retrieval-augmented systems
        </span>
        . Right now I&apos;m learning{" "}
        <span className="font-medium text-foreground">GraphRAG</span> and
        working on research in{" "}
        <span className="font-medium text-foreground">
          AI-assisted knowledge retrieval and reasoning
        </span>
        : building pipelines that can answer domain-specific questions with
        grounded, verifiable sources.
      </p>
      <p>
        My statistics background keeps me asking what the numbers actually
        mean, a useful instinct in modern ML, where so much of the work
        depends on trusting opaque scores.
      </p>
    </div>
  );
}
