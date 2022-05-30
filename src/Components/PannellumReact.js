import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./images/car.jpg";


const PannellumReact = () => {
  console.log('asdfasdf')
  return (
  <div>
    {/* <Pannellum
      width="100%"
      height="1024px"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={-50}
        yaw={-178}
        text="Gear Shifter"
        handleClick={(evt , args) => console.log("qqqqqq")}
        handleClickArg={{ "name":"test" }}
      />
      <Pannellum.Hotspot
        type="info"
        pitch={-15}
        yaw={-172}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />
      <Pannellum.Hotspot
        type="info"
        pitch={-20}
        yaw={-213}
        text=""
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum> */}
    <Pannellum
        width="800px"
        height="400px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={500}
        autoLoad
        author=""
        title=""
        orientationOnByDefault={false}
        draggable
        keyboardZoom
        mouseZoom
        preview=""      
        previewAuthor=""
        previewTitle=""
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={()=>{console.log("panorama loaded");}}
        onScenechange={(id)=>{console.log("Scene has change on " + id);}}
        onScenechangefadedone={()=>{console.log("panorama loaded");}}
        onError={(err)=>{console.log("Error" , err);}}
        onErrorcleared={()=>{console.log("Error Cleared");}}
        onMousedown={(evt)=>{console.log("Mouse Down" , evt);}}
        onMouseup={(evt)=>{console.log("Mouse Up", evt);}}
        onTouchstart={(evt)=>{console.log("Touch Start", evt);}}
        onTouchend={(evt)=>{console.log("Touch End", evt);}}
        hotspotDebug={false}
    >
        <Pannellum.Hotspot 
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf"
        />

        <Pannellum.Hotspot 
        type="custom"
        pitch={31}
        yaw={150}
        handleClick={(evt , args) => this.hanldeClickImage(evt , args)}
        handleClickArg={{ "name":"test" }}
        />

    </Pannellum>
  </div>
)};

export default PannellumReact;
