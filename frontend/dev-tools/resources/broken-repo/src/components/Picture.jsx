import React, { useEffect, useState } from "react";
import { getPicture } from "../utils";

function Picture() {
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const [displayImage, setDisplayImage] = useState(false);
  useEffect(() => {
    if (displayImage) {
      setLoading(true);
      getPicture().then((data) => {
        setPicture(data);
      });
    }
  }, [displayImage]);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2>Hail to the queen</h2>
      <button
        onClick={() => {
          setDisplayImage(!displayImage);
        }}
      >
        Show me
      </button>
      <br></br>
      {displayImage && <img src={picture} alt="an angel"></img>}
      {picture && (
        <p>
          Hey i just met you, and this is crazy, but here's React Dev Tools, so
          use them maybe
        </p>
      )}
    </div>
  );
}

export default Picture;
