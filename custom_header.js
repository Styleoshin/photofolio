class CustomHeader extends HTMLElement {
    
    connectedCallback () {
        this.innerHTML = `

        <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid d-flex align-items-center justify-content-between">
    
          <a href="/index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
            <img src="/assets/img/logo.png" alt="">
            <i class="bi bi-camera"></i>
            <h1>Portofolio of Yacine Benaffane</h1>
          </a>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/index.html" class="active">Home</a></li>
              <li><a href="/about.html">About</a></li>
              <li class="dropdown"><a href="#"><span>Gallery</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="/gallery/top.html">Top</a></li>
                  <li><a href="/gallery/nature.html">Nature</a></li>
                  <li><a href="/gallery/animal.html">Animal</a></li>
                  <li><a href="/gallery/street.html">Street</a></li>
                  <li><a href="/gallery/waadate.html">Waadate</a></li>
                  <li><a href="#">Sports (to come)</a></li>
                 <li class="dropdown"><a href="#"><span>Events (To come)</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Wedding</a></li>
                      <li><a href="#">Celebration</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </nav>
    
          <div class="header-social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/Yacinoben/" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/yacine_the_hiker/?hl=fr" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.instagram.com/yacine_photographer/?hl=fr" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/yacine-benaffane/" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
          </div>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    
        </div>
      </header>
        `
    }
 
}

customElements.define('custom-header',CustomHeader)