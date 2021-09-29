import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WorkItem, { DefaultWorkItemProps, PlasmicWorkItem } from './components/plasmic/blank_project/PlasmicWorkItem';
import gsap from 'gsap';

ReactDOM.render(
  <React.StrictMode>
    { component() }
  </React.StrictMode>,
  document.getElementById('root')
);

function component() {
  function initAnimation(dom: HTMLDivElement | null) {
    if(dom){
      gsap.from(dom.querySelector('#headline'), { duration: 1, opacity: 1, y: 0, ease: 'power3.out' });
    }
    
  }
  return <PlasmicWorkItem 
    ref={ ref => initAnimation(ref) }
    description='test'
    headline='another test' 
    test='1234'
  />
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
