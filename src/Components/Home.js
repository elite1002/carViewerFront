import React, { Component } from 'react';
import $ from 'jquery';
// function Home() {
//   // componentWillMount() {
//   //   this.props.history.push('/login');

//   // }
//   let fbx = useLoader(FBXLoader, '../cad.fbx');

//     return (
//       <div id='cad' style={{width: '500px', height: '500px'}}>
//         {/* <ReactThreeFbxViewer cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/> */}
//         {/* <include src="../cad.html"></include> */}
//         {/* <iframe src='../cad.html'></iframe> */}
//         <primitive object={fbx} />

//       </div>
//     );
//   }


// export default (Home);

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import ReactHtmlParser from 'react-html-parser';

const Scene = () => {
  const fbx = useLoader(FBXLoader, "Poimandres.fbx");

  return <primitive object={fbx} scale={0.005} />;
};
const Iframe = (props) => {
  let iframe = () => {
    return {
      __html: props.iframe
    }
  }
  return (
    <div style={{width: '100%', height: '100%'}}>
      {/* <div dangerouslySetInnerHTML={iframe()} /> */}
      <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://3d-car-viewer-backend.vercel.app/TAI-valve-stowed-to-open_HTML_1.html' width='100%' height='100%'/>"}} />
    </div>
  );
};
const iframe = '<iframe  src="TAI-valve-stowed-to-open_HTML_1.html" width="100%" height="800px"></iframe>';

export default function Home() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Iframe iframe={iframe} />
      {/* {
        ReactHtmlParser(iframe)
      } */}
    </div>
  );
}
