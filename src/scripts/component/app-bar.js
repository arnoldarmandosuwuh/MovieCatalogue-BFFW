class AppBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand">Movie Catalogue</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" id="navHome" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" id="navMovie" href="#movie">Movie <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" id="navTv" href="#tv">Tv Show <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                </div>
            </nav>`;
    }

}

customElements.define("app-bar", AppBar);