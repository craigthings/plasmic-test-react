import * as React from "react";
import {
  PlasmicHorizonalContainer,
  DefaultHorizonalContainerProps
} from "./plasmic/blank_project/PlasmicHorizonalContainer";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

interface HorizonalContainerProps extends DefaultHorizonalContainerProps {}

function HorizonalContainer_( props: HorizonalContainerProps, ref: HTMLElementRefOf<"div">) {
  
  return <PlasmicHorizonalContainer root={{ ref }} {...props} />;
}

const HorizonalContainer = React.forwardRef(HorizonalContainer_);
export default HorizonalContainer;
