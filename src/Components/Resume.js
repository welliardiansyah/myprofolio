import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var frameworkmessage = data.frameworkmessage;
    var technologiesmessage = data.technologiesmessage;
    var databasemessage = data.databasemessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    var framework = data.framework.map(function (framework) {
      var className = "bar-expand " + framework.name.toLowerCase();
      return (
        <li key={framework.name}>
          <span style={{ width: framework.level }} className={className}></span>
          <em>{framework.name}</em>
        </li>
      );
    });
    var technology = data.technology.map(function (technology) {
      var className = "bar-expand " + technology.name.toLowerCase();
      return (
        <li key={technology.name}>
          <span style={{ width: technology.level }} className={className}></span>
          <em>{technology.name}</em>
        </li>
      );
    });
    var database = data.database.map(function (database) {
      var className = "bar-expand " + database.name.toLowerCase();
      return (
        <li key={database.name}>
          <span style={{ width: database.level }} className={className}></span>
          <em>{database.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Framework</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{frameworkmessage}</p>

          <div className="bars">
            <ul className="skills">{framework}</ul>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Technologies</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{technologiesmessage}</p>

          <div className="bars">
            <ul className="skills">{technology}</ul>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Database</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{databasemessage}</p>

          <div className="bars">
            <ul className="skills">{database}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
