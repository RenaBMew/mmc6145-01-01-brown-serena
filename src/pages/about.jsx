import styles from "../styles/hero.module.css";
import { Link } from "react-router-dom";
import profilepic from "../assets/profile.jpg";
import "../index.css";

export default function About() {
  return (
    <main>
      <div className={styles.heroAbout}></div>
      <section id="About Me">
        <h1>Want to know more about me?</h1>
        <div className="container">
          <img src={profilepic} className="profile" alt="Profile Image" />
          <div className="content">
            <p>
              My name is Serena Brown and I am currently a student at the
              University of Florida studying for my Master's Degree in Web and
              UX Design. I have a BFA in Computer Modeling/Animation with a
              strong background in design and art. I live in Orlando and work as
              a Technical Specialist at an Engineering Firm.
            </p>
            <p>
              <b>
                <u>Coding Knowledge</u>
              </b>
            </p>
            <br />
            <div className="icons">
              <img src="/html5.png" width="50px" alt="HTML" />
              <img src="/css.png" width="50px" alt="CSS" />
              <img src="/javascript.png" width="50px" alt="JS" />
              <img src="/react.png" width="50px" alt="React" />
              <img src="/mongodb.png" width="50px" alt="MongoDB" />
              <img src="/mysql.png" width="50px" alt="MySQL" />
              <img src="/vscode.jpg" width="50px" alt="VS Code" />
            </div>
            <p>
              <b>
                <u>Design Knowledge</u>
              </b>
            </p>
            <br />
            <div className="icons">
              <img src="/PS.png" width="50px" alt="Photoshop" />
              <img src="/AI.png" width="50px" alt="Illustrator" />
              <img src="/ID.png" width="50px" alt="InDesign" />
              <img src="/AE.png" width="50px" alt="After Effects" />
              <img src="/PP.png" width="50px" alt="Premiere Pro" />
              <img src="/maya.png" width="50px" alt="Maya" />
              <img src="/revit.png" width="50px" alt="Revit" />
            </div>
            <p>
              <b>
                <u>Personal Stuff</u>
              </b>
            </p>
            <br />
            My top three favorite things are my cats, coffee, and yoga (I am an
            8 year practitioner).
            <br />
            <div className="icons">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8036/8036693.png"
                width="80px"
                alt="Cat Icon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/10771/10771342.png"
                width="80px"
                alt="Coffee Icon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/14032/14032928.png"
                width="80px"
                alt="Yoga Icon"
              />
            </div>
            <br />
            I speak conversational Spanish and French, and am currently learning
            Japanese.
            <br />
            お越し頂きありがとうございます
            <br />
            Please click below to view some of my previous projects.
            <br />
            <Link to="/">
              <button>My Projects</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
