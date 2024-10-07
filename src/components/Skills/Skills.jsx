import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <div className="heading-para">
          <div className="heading">
            <h2>SKILLS</h2>
          </div>
          <div className="description-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi facilis id eaque debitis, iusto unde!
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="heading">
              <h3>PROGRAMMING LANGUAGES</h3>
            </div>
            <hr />
            <div className="image-name-container">
              <div className="card1">
                <div className="image">
                  <img src="./java.png" alt="" />
                </div>
                <div className="name">
                  <p>Java</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./cpp.png" alt="" />
                </div>
                <div className="name">
                  <p>C++</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./python.png" alt="" />
                </div>
                <div className="name">
                  <p>Python</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="heading">
              <h3>WEB DEVELOPMENT</h3>
            </div>
            <hr />
            <div className="image-name-container">
              <div className="card1">
                <div className="image">
                  <img src="./html5.png" alt="" />
                </div>
                <div className="name">
                  <p>HTML5</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./css3.png" alt="" />
                </div>
                <div className="name">
                  <p>CSS3</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./java-script.png" alt="" />
                </div>
                <div className="name">
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./atom.png" alt="" />
                </div>
                <div className="name">
                  <p>React JS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="heading">
              <h3>TOOLS/IDE</h3>
            </div>
            <hr />
            <div className="image-name-container">
              <div className="card1">
                <div className="image">
                  <img src="./git.png" alt="" />
                </div>
                <div className="name">
                  <p>Git</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./github.png" alt="" />
                </div>
                <div className="name">
                  <p>GitHub</p>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src="./vscode.png" alt="" />
                </div>
                <div className="name">
                  <p>VS Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
