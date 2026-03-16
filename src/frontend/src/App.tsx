import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import AskADoubtPage from "./pages/AskADoubtPage";
import AyushmanCard from "./pages/AyushmanCard";
import Blog from "./pages/Blog";
import BlogPostDigitalHealth from "./pages/BlogPostDigitalHealth";
import Contact from "./pages/Contact";
import EligibilityChecker from "./pages/EligibilityChecker";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import HospitalLocator from "./pages/HospitalLocator";
import HowToApply from "./pages/HowToApply";
import Team from "./pages/Team";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const ayushmanCardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ayushman-card",
  component: AyushmanCard,
});

const eligibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/eligibility",
  component: EligibilityChecker,
});

const howToApplyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-to-apply",
  component: HowToApply,
});

const hospitalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hospitals",
  component: HospitalLocator,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/team",
  component: Team,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const blogPostDigitalHealthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/digital-health-revolution",
  component: BlogPostDigitalHealth,
});

const askADoubtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ask-a-doubt",
  component: AskADoubtPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  ayushmanCardRoute,
  eligibilityRoute,
  howToApplyRoute,
  hospitalsRoute,
  faqRoute,
  contactRoute,
  teamRoute,
  blogRoute,
  blogPostDigitalHealthRoute,
  askADoubtRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
