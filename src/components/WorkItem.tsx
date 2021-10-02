import * as React from "react";
import {
  PlasmicWorkItem,
  DefaultWorkItemProps
} from "./plasmic/blank_project/PlasmicWorkItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import gsap from "gsap/all";

interface WorkItemProps extends DefaultWorkItemProps {}

function WorkItem_(props: WorkItemProps, ref: HTMLElementRefOf<"div">) {
    let componentRef = React.useRef<HTMLDivElement>(null);
    let dom: HTMLDivElement | null;

    React.useEffect(() => {
      dom = componentRef.current;
      if(!dom) return;

      let image = dom.querySelector("#image") as HTMLImageElement;
      gsap.from(image, {duration: 1, opacity: 0, scale: 0.8});

      let headline = dom.querySelector('#headline') as HTMLElement;
      gsap.from(headline, {duration: 1, opacity: 0, y: "-10"});

      let description = dom.querySelector('#description') as HTMLElement;
      gsap.from(description, {duration: 1, opacity: 0, x: "-20"});

    });
    
    return (
      <div ref={componentRef}>
        <PlasmicWorkItem root={{ ref }} {...props} />
      </div>
    )
}

const WorkItem = React.forwardRef(WorkItem_);
export default WorkItem;
