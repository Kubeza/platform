import Container from "./components/layout/Container";
import Section from "./components/layout/Section";

export default function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <Section>
        <Container>
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <span className="mb-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-sm font-medium text-cyan-400">
              Kubeza v1.0
            </span>

            <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl">
              AI-Native DevOps Engineering Platform
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Learn, Build, Deploy, Secure and Operate cloud infrastructure from
              one unified platform.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}