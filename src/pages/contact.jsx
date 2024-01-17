import styles from "../styles/hero.module.css";
import contactpic from "../assets/catstexting.jpg";

export default function Contact() {
  return (
    <main>
      <div className={styles.heroContact}></div>
      <section id="Contact Me">
        <h1>Want to Connect?</h1>
        <div className="container">
          <img src={contactpic} className="profile" alt="Profile Image" />
          <div className="content">
            <p>Questions? Want to talk about cats, code, coffee?</p>
            <p>Feel free to connect with me via the links below!</p>
            <div className="icons">
              <a href="https://github.com/RenaBMew" target="_new">
                <img
                  src="Octicons-mark-github.svg.png"
                  width="50px"
                  alt="GitHub Icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/brownser" target="_new">
                <img
                  src="LinkedIn_icon.svg.png"
                  width="50px"
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
