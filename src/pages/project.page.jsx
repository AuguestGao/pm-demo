import React from "react";

const ProjectPage = ({ match }) => {
  const { id } = match.params;
  return <h1>Project {id} page</h1>;
};

export default ProjectPage;
