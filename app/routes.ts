import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main.tsx", [index("routes/home.tsx")]),
  layout("./layouts/about.tsx", [route("about", "routes/about.tsx")]),
] satisfies RouteConfig;
