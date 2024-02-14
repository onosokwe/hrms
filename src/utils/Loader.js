import React from "react";

export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: 500, textAlign: "center", alignItems: "center", alignContent: "center", width:"100%" }}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
