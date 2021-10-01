import React, { useEffect }  from "react";
import PlasmicWorkItem, { DefaultWorkItemProps } from "./components/plasmic/blank_project/PlasmicWorkItem";
import gsap from "gsap";

function WorkItem(props: DefaultWorkItemProps){
  let ref = React.useRef<HTMLDivElement>(null);
  let dom: HTMLDivElement | null;

  useEffect(() => {
    dom = ref.current;
    if(!dom) return;

    let headline = dom.querySelector('#headline') as HTMLElement;
    gsap.from(headline, {duration: 1, opacity: 0, y: "-10"});

    let description = dom.querySelector('#description') as HTMLElement;
    gsap.from(description, {duration: 1, opacity: 0, x: "-20"});

  });
  
  return (
    <div ref={ref}>
      <PlasmicWorkItem {...props} />
    </div>
  )
}

function Index() {
  return (
    <div style={{ background: '#eeeeee', display: "flex", width: "100%", height: "100%", padding: "100px", justifyContent: "center", alignContent: "space-around", flexWrap: "wrap" }}>
      <WorkItem
        dark
        headline='This is a headline'
        description='This is a very long, very verbose description that refuses to end.'
      />
      <WorkItem
        headline='This is a headline'
        description='This is a very long, very verbose description that refuses to end.'
      />
    </div>
  );
}

export default Index;