import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DefaultWorkItemProps, PlasmicWorkItem } from './components/plasmic/blank_project/PlasmicWorkItem';
import gsap from 'gsap';

ReactDOM.render(
  <React.StrictMode>
    <WorkItem 
      headline='This is a headline'
      description='This is a very long, very verbose description that refuses to end.'
    />
  </React.StrictMode>,
  document.getElementById('root')
);



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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
