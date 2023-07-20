/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./nav.scss";
import Logo from "./Logo";

function Nav() {
  let history = useHistory();

  function goToPage(route) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    history.push(route);
  }

  function scroll() {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }

  const handleHover = (e) => {
    e.stopPropagation();

    let el = e.target.querySelector(".underline");
    el.style.width = "100%";
    el.classList.remove("right");
  };

  const hoverOut = (e) => {
    e.stopPropagation();

    let el = e.target.querySelector(".underline");
    el.classList.add("right");
    el.style.width = "0%";
  };

  useEffect(() => {
    document
      .querySelectorAll(".linkNav")
      .forEach((el) => el.addEventListener("mouseenter", handleHover));
    document
      .querySelectorAll(".linkNav")
      .forEach((el) => el.addEventListener("mouseleave", hoverOut));
  }, []);

  useEffect(() => {
    scroll();
  });



  return (
    <nav className="header">
     <Logo />

      <section id="right">
        <Link
          to={"/projects"}
          className="linkNav"
          onClick={() => goToPage("/projects")}
        >
          <div className="navlink">
            <i className="fab fa-connectdevelop"> </i>
            <div className="navlink_contain">
              <p>Projects</p>
              <div className="underline"></div>
            </div>
          </div>
        </Link>

        <Link
          to={"/about"}
          className="linkNav"
          onClick={() => goToPage("/about")}
        >
          <div className="navlink">
            <i className="far fa-user-circle"></i>
            <div className="navlink_contain">
              <p>About</p>
              <div className="underline"></div>
            </div>
          </div>
        </Link>

        <Link
          to={"/contact"}
          className="linkNav"
          onClick={() => goToPage("/contact")}
        >
          <div className="navlink">
            <i className="fas fa-id-card-alt"> </i>
            <div className="navlink_contain">
              <p>Contact</p>
              <div className="underline"></div>
            </div>
          </div>
        </Link>
      </section>
    </nav>
  );
}

export default Nav;
