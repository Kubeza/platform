import Container from "./components/layout/Container";
import Navbar from "./components/navigation/Navbar";

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <section
          aria-label="Kubeza website content"
          className="min-h-[calc(100vh-4rem)]"
        >
          <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <div className="h-px w-full max-w-5xl bg-white/[0.04]" />
          </Container>
        </section>
      </main>
    </div>
  );
}