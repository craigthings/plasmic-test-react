import React, { useEffect }  from "react";
import PlasmicWorkItem, { DefaultWorkItemProps } from "./components/plasmic/blank_project/PlasmicWorkItem";
import gsap from "gsap";
import WorkItem from "./components/WorkItem";
import Homepage from "./components/Homepage";

function Index() {
  return (
    <div style={{ background: '#eeeeee', display: "flex", width: "100%", height: "100%", padding: "100px", justifyContent: "center", alignContent: "space-around", flexWrap: "wrap" }}>
      <Homepage design />
    </div>
  );
}

export default Index;