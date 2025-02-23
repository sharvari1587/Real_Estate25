import React, { useState, useEffect } from "react";
const ARModelViewer = ({ modelUrl }) => {
  useEffect(() => {
    // Load the model-viewer script dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ar-model-container mt-5">
      <h3 className="mb-4">3D Property Model Preview</h3>
      <div
        className="model-viewer-wrapper"
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <model-viewer
          src={modelUrl}
          alt="3D property model"
          camera-controls
          auto-rotate
          ar
          style={{ width: "100%", height: "100%" }}
        ></model-viewer>
      </div>
      <div className="mt-3 mb-5">
        <p className="ar-instructions">
          <i className="feather-info mr-2"></i>
          Use AR view on mobile devices to see this property in your space.
        </p>
      </div>
    </div>
  );
};

const DetailSix = () => {
  const [showARModel, setShowARModel] = useState(true);
  
  // Define the model URL (replace with actual model file)
  const staticARModelUrl = "https://res.cloudinary.com/dbdhfb85q/image/upload/v1740032454/ar-models/xfypk0irwskwfec9luma.glb";

  return (
    <>
      <div
        className="rn-popup-modal share-modal-wrapper modal fade"
        id="shareModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content share-wrapper">
            <div className="modal-header share-area">
              <h5 className="modal-title">Share this NFT</h5>
            </div>
            <div className="modal-body">
              <ul className="social-share-default">
                <li>
                  <a href="#">
                    <span className="icon"></span>
                    <span className="text">facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"></span>
                    <span className="text">twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"></span>
                    <span className="text">linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"></span>
                    <span className="text">instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"></span>
                    <span className="text">youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Property 3D Model</h2>
              <p>View this property in augmented reality</p>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            {showARModel && <ARModelViewer modelUrl={staticARModelUrl} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSix;



// import React, { useState, useEffect } from "react";

// const ARModelViewer = ({ modelUrl }) => {
//   useEffect(() => {
//     // Load the model-viewer script dynamically
//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js";
//     script.type = "module";
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="ar-model-container mt-5">
//       <h3 className="mb-4">3D Property Model Preview</h3>
//       <div
//         className="model-viewer-wrapper"
//         style={{
//           width: "100%",
//           height: "500px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <model-viewer
//           src={modelUrl}
//           alt="3D property model"
//           camera-controls
//           auto-rotate
//           ar
//           style={{ width: "100%", height: "100%" }}
//         ></model-viewer>
//       </div>
//       <div className="mt-3 mb-5">
//         <p className="ar-instructions">
//           <i className="feather-info mr-2"></i>
//           Use AR view on mobile devices to see this property in your space.
//         </p>
//       </div>
//     </div>
//   );
// };

// const DetailSix = () => {
//   const [showARModel, setShowARModel] = useState(true);
  
//   // Define the model URL (replace with actual model file)
//   const staticARModelUrl = "https://res.cloudinary.com/dbdhfb85q/image/upload/v1740032454/ar-models/xfypk0irwskwfec9luma.glb";

//   return (
//     <>
//       <div
//         className="rn-popup-modal share-modal-wrapper modal fade"
//         id="shareModal"
//         tabIndex="-1"
//         aria-hidden="true"
//       >
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//           <div className="modal-content share-wrapper">
//             <div className="modal-header share-area">
//               <h5 className="modal-title">Share this NFT</h5>
//             </div>
//             <div className="modal-body">
//               <ul className="social-share-default">
//                 <li>
//                   <a href="#">
//                     <span className="icon"></span>
//                     <span className="text">facebook</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <span className="icon"></span>
//                     <span className="text">twitter</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <span className="icon"></span>
//                     <span className="text">linkedin</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <span className="icon"></span>
//                     <span className="text">instagram</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <span className="icon"></span>
//                     <span className="text">youtube</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5 mb-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="section-title text-center">
//               <h2>Property 3D Model</h2>
//               <p>View this property in augmented reality</p>
//             </div>
//           </div>
//           <div className="col-lg-10 offset-lg-1">
//             {showARModel && <ARModelViewer modelUrl={staticARModelUrl} />}
//           </div>
//         </div>
//       </div>

//       {/* Sketchfab Embed */}
//       <div className="sketchfab-embed-wrapper mt-5">
//         <iframe
//           title="Sofa (Free Version)"
//           frameBorder="0"
//           allowFullScreen
//           mozAllowFullScreen="true"
//           webkitAllowFullScreen="true"
//           allow="autoplay; fullscreen; xr-spatial-tracking"
//           xr-spatial-tracking
//           execution-while-out-of-viewport
//           execution-while-not-rendered
//           web-share
//           src="https://sketchfab.com/models/a3a2d5a0c5bc416185e913d446afe9aa/embed"
//           style={{ width: "100%", height: "500px", borderRadius: "8px" }}
//         ></iframe>
//         <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
//           <a
//             href="https://sketchfab.com/3d-models/sofa-free-version-a3a2d5a0c5bc416185e913d446afe9aa?utm_medium=embed&utm_campaign=share-popup&utm_content=a3a2d5a0c5bc416185e913d446afe9aa"
//             target="_blank"
//             rel="nofollow"
//             style={{ fontWeight: "bold", color: "#1CAAD9" }}
//           >
//             Sofa (Free Version)
//           </a> by 
//           <a
//             href="https://sketchfab.com/PolyCraftSutdios?utm_medium=embed&utm_campaign=share-popup&utm_content=a3a2d5a0c5bc416185e913d446afe9aa"
//             target="_blank"
//             rel="nofollow"
//             style={{ fontWeight: "bold", color: "#1CAAD9" }}
//           >
//             PolyCraftSutdios
//           </a> on
//           <a
//             href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=a3a2d5a0c5bc416185e913d446afe9aa"
//             target="_blank"
//             rel="nofollow"
//             style={{ fontWeight: "bold", color: "#1CAAD9" }}
//           >
//             Sketchfab
//           </a>
//         </p>
//       </div>
//     </>
//   );
// };

// export default DetailSix;

