import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Hero from "./components/sections/hero/Hero";

import LabsHome from "./pages/labs/LabsHome";
import LabWorkspace from "./pages/labs/LabWorkspace";

import PracticeHome from "./pages/practice/PracticeHome";
import LinuxPracticeWorkspace from "./pages/practice/LinuxPracticeWorkspace";
import NetworkingPracticeWorkspace from "./pages/practice/NetworkingPracticeWorkspace";
import DockerPracticeWorkspace from "./pages/practice/DockerPracticeWorkspace";
import KubernetesPracticeWorkspace from "./pages/practice/KubernetesPracticeWorkspace";

import Platform from "./pages/platform/Platform";
import AIMentorPage from "./pages/ai-mentor/AIMentorPage";

import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

import {
  getLabBySlug,
} from "./labs";

function LandingPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

function LabRoute({
  slug,
}: {
  slug: string;
}): React.JSX.Element {
  const lab = getLabBySlug(slug);

  if (!lab) {
    return (
      <Navigate
        to="/labs"
        replace
      />
    );
  }

  return <LabWorkspace lab={lab} />;
}

export default function App(): React.JSX.Element {
  return (
    <Routes>
      {/* HOME */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* PLATFORM */}

      <Route
        path="/platform"
        element={<Platform />}
      />

      <Route
        path="/ai-mentor"
        element={<AIMentorPage />}
      />

      {/* LABS */}

      <Route
        path="/labs"
        element={<LabsHome />}
      />

      <Route
        path="/labs/:slug"
        element={
          <LabRoute
            slug={
              window.location.pathname
                .split("/")
                .filter(Boolean)[1] ??
              ""
            }
          />
        }
      />

      {/* PRACTICE */}

      <Route
        path="/practice"
        element={<PracticeHome />}
      />

      <Route
        path="/practice/linux"
        element={
          <LinuxPracticeWorkspace />
        }
      />

      <Route
        path="/practice/networking"
        element={
          <NetworkingPracticeWorkspace />
        }
      />

      <Route
        path="/practice/docker"
        element={
          <DockerPracticeWorkspace />
        }
      />

      <Route
        path="/practice/kubernetes"
        element={
          <KubernetesPracticeWorkspace />
        }
      />

      {/* PUBLIC PAGES */}

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/pricing"
        element={<Pricing />}
      />

      {/* AUTH */}

      <Route
        path="/signin"
        element={<SignIn />}
      />

      <Route
        path="/signup"
        element={<SignUp />}
      />

      {/* FALLBACK */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}