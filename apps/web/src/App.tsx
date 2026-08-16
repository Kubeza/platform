import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Hero from "./components/sections/hero/Hero";

import LabOverview from "./pages/labs/LabOverview";
import LabWorkspace from "./pages/labs/LabWorkspace";

import LinuxPracticeWorkspace from "./pages/practice/LinuxPracticeWorkspace";
import NetworkingPracticeWorkspace from "./pages/practice/NetworkingPracticeWorkspace";
import PracticeHome from "./pages/practice/PracticeHome";

import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

import {
  getLabBySlug,
} from "./labs";

function LandingPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#08090B] text-white">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

function LabRoute({
  slug,
  workspace = false,
}: {
  slug: string;
  workspace?: boolean;
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

  if (workspace) {
    return <LabWorkspace lab={lab} />;
  }

  return <LabOverview lab={lab} />;
}

function LabsIndex(): React.JSX.Element {
  return (
    <Navigate
      to="/labs/nginx"
      replace
    />
  );
}

export default function App(): React.JSX.Element {
  return (
    <Routes>
      {/* LANDING */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* LABS */}

      <Route
        path="/labs"
        element={<LabsIndex />}
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

      <Route
        path="/labs/:slug/workspace"
        element={
          <LabRoute
            workspace
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

      {/* COMPANY */}

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