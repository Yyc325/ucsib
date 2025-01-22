import layout from "./layout";
import home from "./home";
import { noPermissionsRoutes } from "./canstants";
export const ComponentCanstants = {
  ...layout,
  ...home,
  ...noPermissionsRoutes,
  ...self,
};
