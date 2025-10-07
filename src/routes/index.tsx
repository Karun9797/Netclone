// src/router.tsx
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import App from "@/App";
import Header from "@/components/Header";
import { SearchComponent } from "./search";

// Define routes
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Header />
      <Outlet /> {/* This is where child routes render */}
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    query: (search.query as string) ?? "",
  }),
});
// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, searchRoute]);

// Create and export router
export const router = createRouter({ routeTree });
