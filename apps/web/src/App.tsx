import {
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import LabsHome from "./pages/labs/LabsHome";
import LabOverview from "./pages/labs/LabOverview";
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

import { getLabBySlug } from "./labs";

function LabOverviewRoute(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>();

  const lab = slug ? getLabBySlug(slug) : undefined;

  if (!lab) {
    return <Navigate to="/labs" replace />;
  }

  return <LabOverview lab={lab} />;
}

function LabWorkspaceRoute(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>();

  const lab = slug ? getLabBySlug(slug) : undefined;

  if (!lab) {
    return <Navigate to="/labs" replace />;
  }

  return <LabWorkspace lab={lab} />;
}

export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/labs" replace />} />

      <Route path="/labs" element={<LabsHome />} />

      <Route
        path="/labs/:slug"
        element={<LabOverviewRoute />}
      />

      <Route
        path="/labs/:slug/workspace"
        element={<LabWorkspaceRoute />}
      />

      <Route
        path="/practice"
        element={<PracticeHome />}
      />

      <Route
        path="/practice/linux"
        element={<LinuxPracticeWorkspace />}
      />

      <Route
        path="/practice/networking"
        element={<NetworkingPracticeWorkspace />}
      />

      <Route
        path="/practice/docker"
        element={<DockerPracticeWorkspace />}
      />

      <Route
        path="/practice/kubernetes"
        element={<KubernetesPracticeWorkspace />}
      />

      <Route
        path="/platform"
        element={<Platform />}
      />

      <Route
        path="/ai-mentor"
        element={<AIMentorPage />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/pricing"
        element={<Pricing />}
      />

      <Route
        path="/signin"
        element={<SignIn />}
      />

      <Route
        path="/signup"
        element={<SignUp />}
      />

      <Route
        path="*"
        element={<Navigate to="/labs" replace />}
      />
    </Routes>
  );
}