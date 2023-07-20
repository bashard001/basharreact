/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./nav.scss";
import { css } from "@emotion/react";

function Nav() {
  let history = useHistory();
  const [headerName, setHeaderName] = useState("Bashar Daseh");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  function handleMouseEnter() {
    windowWidth > 670 &&  setHeaderName("B D");
  }
  function handleMouseLeave() {
    headerName !== 'Bashar Daseh' && setHeaderName("Bashar Daseh");
  }

  const aniBD = css`
    display: flex;
    align-items: center;
    margin-left: 2vw;
    color: white;
    font-size: 22px;
    font-weight: bold;
    white-space: nowrap;
    height: 100%;
    overflow: hidden;
    animation: aniBashar 0.9s;
    animation-fill-mode: forwards;

    @keyframes aniBD {
      from {
        width: 5px;
      }
      75% {
        padding: 30px 0px;
        font-size: 50px;
      }
      to {
        width: 200px;
        font-size: 2rem;
      }
    }

    @keyframes aniBashar {
      from {
        width: 0px;
      }
      to {
        width: 200px;
      }
    }
  `;

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // cleanup this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="header">
      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => goToPage("/")}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 250px;
          cursor: pointer;
         margin-left: 5vw;
          @media (min-width: 670px) {
          &:hover > div {
            cursor: pointer;
            overflow: hidden;
            animation: aniBD 0.9s;
            animation-fill-mode: forwards;
          }
        }

        @media (max-width: 670px) {
          margin: auto;
        }
        `}
      >
        <div css={aniBD}>{headerName}</div>
      </section>

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
