import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/blank_project/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicHomepage root={{ ref }} {...props} />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
