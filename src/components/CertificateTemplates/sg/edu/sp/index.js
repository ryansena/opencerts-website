import dynamic from "next/dynamic";
import addDirToTemplatePath from "../../../addDirToTemplatePath";

const SP2019MAIN = dynamic(
  import("./SP-2019-MAIN" /* webpackChunkName: "SP Templates" */)
);

const templates = {
  "SP-2019-MAIN": SP2019MAIN
};

export default addDirToTemplatePath("sp", templates);
