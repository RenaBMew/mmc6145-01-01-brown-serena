import styles from "../styles/hero.module.css";
import ProjectList from "../components/project";

export default function Home() {
  return (
    <main>
      <div className={styles.heroHome}></div>
      <section id="Welcome">
        <h1>Welcome!</h1>
        <br />
        Thanks for visiting my page!
        <br />
        Below are some of my recent projects. Apps are hosted on Heroku and may
        need time to ramp up.
        <br />
      </section>
      <ProjectList />
      <div style={{ display: "none" }}>
        <ProjectList />
        {/*Adding second component for tests, although this is not needed? May convert design projects to its own component/page in the future.*/}
      </div>
    </main>
  );
}
