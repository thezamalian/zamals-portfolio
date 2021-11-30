import React from 'react';

// Download Resume 

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid d-flex flex-row">
          <button class="navbar-toggler w-15 btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"

            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a class="navbar-brand" href="#home"> <h1>Zamal Hossain</h1> </a> */}
            <ul class="navbar-nav  d-flex flex-row  justify-content-center  mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active me-2" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active me-2" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active me-2" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  me-2" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="col-12 col-md-4 border border-2 border-primary" style={{ marginLeft: '-10%', marginRight: '5%', height: '100%', position: 'fixed' }}>

<nav id="navbar-example2" class="navbar navbar-expand-lg navbar-light bg-light   border border-2 border-danger  w-75  mt-5 ms-auto">

  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">

      <a class="navbar-brand" href="#home"><h4>Zamal Hossain</h4> </a>
      <ul class="navbar-nav d-flex flex-column mx-auto bd-highlight">
        <li class="nav-item mx-1">
          <a class="nav-link" href="#scrollspyHeading1">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading3">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading4">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading5">Contact</a>
        </li>
      </ul>
    </div>
  </div>


</nav>

</div> */}
    </div>
  );
};

export default NavBar;