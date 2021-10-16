import { LoadableComponent } from "@loadable/component";

export type TRoute = {
  name: string;
  path: string;
  component:
    | React.FC<any>
    | React.NamedExoticComponent<any>
    | LoadableComponent<any>;
  children?: TRoute[];
};
