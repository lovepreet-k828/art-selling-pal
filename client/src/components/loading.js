import React from 'react'
import './load.scss';
function Loading() {
    return(
    <>
    <h1 style={{width:"100%", marginLeft:"auto", marginRight:"auto", zIndex:"20"}}>Loading</h1>
<div id="loading-overlay-container" className="overlay active">
        <div className="rotaries">
            <div className="rotary">
                <div className="rotary">
                    <div className="rotary">
                        <div className="rotary">
                            <div className="rotary">
                                <div className="rotary">
                                    <div className="rotary">
                                        <div className="rotary">
                                            <div className="rotary">
                                                <div className="rotary">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<svg className="hidden">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
</>
)};

export default Loading;