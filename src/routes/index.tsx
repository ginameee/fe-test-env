import Loading from "@/components/pages/Loading";
import { TRoutes } from "@/models";
import loadable from "@loadable/component";

const routes: TRoutes[] = [
  {
    name: "home",
    path: "/home",
    component: loadable(() => import("@/components/pages/Home"), {
      fallback: <Loading />,
    }),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: loadable(() => import("@/components/pages/Dashboard"), {
      fallback: <Loading />,
    }),
  },
  {
    name: "about",
    path: "/about",
    component: loadable(() => import("@/components/pages/About"), {
      fallback: <Loading />,
    }),
  },
];

export default routes;
