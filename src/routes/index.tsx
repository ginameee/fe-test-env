import Loading from "@/components/pages/Loading";
import { TRoute } from "@/models/app";
import loadable from "@loadable/component";

const routes: TRoute[] = [
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
  {
    name: "todos",
    path: "/todos",
    component: loadable(() => import("@/components/pages/Todos"), {
      fallback: <Loading />,
    }),
  },
];

export default routes;
