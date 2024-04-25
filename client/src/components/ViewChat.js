import React from 'react'
import I5 from '/home/soham/SE Projects 3/test3/with_phone/client/src/images/I5.png'

const ViewChat = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">
      
    <img src={I5} alt="Image not found" style={{ maxWidth: '15%', height: 'auto' }} />
      <p>Legal Assist</p>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registrationform">
            Registration
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Chatbot
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/chatpage">
                Chat With Us
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/viewchat">
                View chat History
              </a>
            </li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search" action="https://www.google.com/search" method="get" target="_blank">
    <input
        className="form-control me-2"
        type="search"
        name="q" // Name attribute for the search query parameter
        placeholder="Search on Google"
        aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
        Search
    </button>
</form>

    </div>
  </div>
</nav>

        <h1>
        This is View Chat Page.
      </h1>
    </div>
  )
}

export default ViewChat;
