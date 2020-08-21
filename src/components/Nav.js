import React from "react"


function Nav() {
    return (
        <nav className="header">
            <div className="headerContainer">
                <section id="left">
                    <a href="index.html">
                        <h1 id="alphaq"><span id="a">Bashar Daseh</span><span id="b">B D</span></h1>
                    </a>
                </section>

                <section id="right">
                    <a href="myprojects.html">
<i className="fas fa-tasks"></i>
                    <p> My
        projects</p>
                    </a>
                    <a href="about.html">

                    <i className="far fa-user-circle"></i> <p> About</p> </a>


                        <a href="contacts.html">
                        <i className="fas fa-address-card"></i> <p>Contact</p>
      </a>

    </section>
    </div>
  </nav>

    )
}

export default Nav