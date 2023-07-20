/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";


function Logo() {
    let history = useHistory();
    const [headerName, setHeaderName] = useState("Bashar Daseh");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleMouseEnter() {
        windowWidth > 670 &&  setHeaderName("B D");
      }
      function handleMouseLeave() {
        headerName !== 'Bashar Daseh' && setHeaderName("Bashar Daseh");
      }

      function goToPage(route) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        history.push(route);
      }

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

    return (
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
    )
}

export default Logo