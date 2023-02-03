import { useState } from "react";
// import { NavLink } from "react-router-dom";

function Nav() {
  const [home, setHome] = useState("active");
  const [about, setAbout] = useState("");
  const [cloud, setCloud] = useState("");
  // const [front, setFront] = useState("");
  const [blog, setBlog] = useState("");
  const [gh, setGh] = useState("");
  const [nav, setNav] = useState("");

  return (
    <>
      <div
        className="hamburger"
        id="hamburger"
        onClick={() => setNav("shownav")}
      >
        <span className="top-bun"></span>
        <span className="middle"></span>
        <span className="bottom-bun"></span>
      </div>
      <div id="logo">ai</div>
      <nav className={nav}>
        <div className="hamburger2" onClick={() => setNav("")}>
          <span className="top-bun"></span>
          <span className="middle"></span>
          <span className="bottom-bun"></span>
        </div>
        {/* <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/cloud">Projects</NavLink>
        <NavLink to="/writing">Technical Writing</NavLink> */}
        <a
          href="#"
          className={home}
          onClick={() => {
            setHome("active");
            setAbout("");
            setCloud("");
            // setFront("");
            setBlog("");
            setNav("");
            setGh("");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className={about}
          onClick={() => {
            setHome("");
            setAbout("active");
            setCloud("");
            // setFront("");
            setBlog("");
            setNav("");
            setGh("");
          }}
        >
          About Me
        </a>
        <a
          href="#cloud"
          className={cloud}
          onClick={() => {
            setHome("");
            setAbout("");
            setCloud("active");
            // setFront("");
            setBlog("");
            setNav("");
            setGh("");
          }}
        >
          Projects
        </a>
        {/* <a
          href="#frontend"
          className={front}
          onClick={() => {
            setHome("");
            setAbout("");
            setCloud("");
            setFront("active");
            setBlog("");
            setNav("");
            setGh("");
          }}
        >
          Front-End Engineering
        </a> */}
        <a
          href="#writing"
          className={blog}
          onClick={() => {
            setHome("");
            setAbout("");
            setCloud("");
            // setFront("");
            setNav("");
            setBlog("active");
            setGh("");
          }}
        >
          Technical Writing
        </a>
        <a
          href="https://github.com/adeyomola"
          target="_blank"
          className={gh}
          onClick={() => {
            setGh("active");
          }}
        >
          Github
        </a>
      </nav>
    </>
  );
}

export default Nav;
