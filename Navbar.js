import { Link } from 'react-router-dom';
import { React, useState } from 'react';





function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav-pills">
        <div class="container-fluid">
          <Link class="navbar-brand mb-0 h1" to="/">BAD BANK</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

<li className="nav-item">
    <Link className="nav-link" to="/createaccount/">Create Account</Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/deposit/">Deposit</Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/withdraw/">Withdraw</Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/alldata/">All Data</Link>
</li>


</ul>
            
          </div>
        </div>
      </nav>
    );
}

export default Navbar;