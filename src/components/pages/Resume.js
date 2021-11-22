import React from "react";
import pdf from "../../images/Joseph_Perri_Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={pdf}>Download My Resume</a>
      <br />
      <br />
      <h5>Proficiences:</h5>
      <p>React {"\n"}</p>
      <p>MongoDB {"\n"}</p>
      <p>Express {"\n"}</p>
      <p>Node {"\n"}</p>
      <p>HTML {"\n"}</p>
      <p>HTML {"\n"}</p>
      <p>CSS {"\n"}</p>
      <p>Javascript {"\n"}</p>
      <p>MySQL {"\n"}</p>
      <p>Handlebars {"\n"}</p>
    </div>
  );
}
