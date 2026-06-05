import type { CSSProperties } from "react";

const snippets = [
  'const app = <Portfolio stack="Flutter" />;',
  "final skills = ['Flutter', 'Dart', 'React'];",
  "class Developer extends StatelessWidget { build() => product; }",
  "await buildMobileApp({ cleanUI: true, release: 'fast' });",
  "const route = createMapScenario(memories);",
  "BlocProvider(create: (_) => AppCubit(repository));",
  "useEffect(() => shipProduct(), [idea]);",
  "scanner.export({ format: 'pdf', quality: 'clean' });",
  "Fastlane.release({ platform: 'android', track: 'prod' });",
  "if (feedback) iterate(product);",
] as const;

const codeLines = Array.from({ length: 30 }, (_, index) => ({
  text: snippets[index % snippets.length],
  top: `${4 + index * 3.15}%`,
  drift: `${62 + (index % 7) * 5}s`,
  typing: `${9.5 + (index % 6) * 1.05}s`,
  delay: `${-((index * 7) % 43)}s`,
}));

type CodeLineStyle = CSSProperties & {
  "--line-top": string;
  "--line-width": string;
  "--chars": number;
  "--drift-duration": string;
  "--type-duration": string;
  "--line-delay": string;
};

export function CodeBackground() {
  return (
    <div className="code-background" aria-hidden="true">
      {codeLines.map((line) => (
        <div
          className="code-background__track"
          key={line.text}
          style={
            {
              "--line-top": line.top,
              "--line-width": `${line.text.length}ch`,
              "--chars": line.text.length,
              "--drift-duration": line.drift,
              "--type-duration": line.typing,
              "--line-delay": line.delay,
            } as CodeLineStyle
          }
        >
          <span className="code-background__line">{line.text}</span>
        </div>
      ))}
    </div>
  );
}
