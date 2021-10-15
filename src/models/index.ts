import { LoadableComponent } from "@loadable/component";

export type TRoutes = {
  name: string;
  path: string;
  component:
    | React.FC<any>
    | React.NamedExoticComponent<any>
    | LoadableComponent<any>;
  children?: TRoutes[];
};
