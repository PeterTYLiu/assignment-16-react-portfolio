import React from "react";

function ProjectCard({ title, shortDesc, id, thumbnail }) {
  return (
    <div
      className="projectCard"
      style={{
        backgroundImage: `linear-gradient(#00002566, #000925bb), url("thumbs/${thumbnail}")`,
      }}
      // onClick={() => {
      //   window.location.href = "/work/" + id;
      // }}
    >
      <h1>{title}</h1>
      <h2>{shortDesc}</h2>
    </div>
  );
}

export default ProjectCard;
