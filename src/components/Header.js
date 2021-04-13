import React from 'react'
import './myStyle.css'

function Header() {
    return (
        <div>
              <header className="bg-secondary sticky-top" >
        
<div className="row text-white" >
<div className="col-md-6 col-7 p-3 pl-5">
<h2  style={{color: 'black'}}><em><strong>Rameez</strong></em></h2>
</div>
<div className="col-md-6 col-5 my-auto " >
    <nav className="navbar navbar-expand-lg navbar-light " >
        
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-dark" href="#home-section">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#service-section">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#exp-section">Experiences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact-section">Contacts</a>
              </li>
          </ul>
         
        </div>
      </nav>
</div>
</div>

    </header>
        </div>
    )
}

export default Header
