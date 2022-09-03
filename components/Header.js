app.component("header-section", {
  props: {},
  methods: {

  },
  template:
    /*html*/
    `
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-items" href="#">Benefits</a>
            </li>
            <li class="nav-item">
              <a class="nav-items" href="#">Products</a>
            </li>
              <a class="d-none d-lg-block" href="#">
                <img class="logo-blu" src="./imgs/logo-blu-white.png" alt="Logo oficial Agua BLU" />
              </a>
            <li class="nav-item">
              <a class="nav-items" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-items" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
    `,
});


