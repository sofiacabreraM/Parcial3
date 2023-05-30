import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
   
        const FormRecetas = this.ownerDocument.createElement('app-formrecetas');
        this.shadowRoot?.appendChild(FormRecetas);
    }
}

customElements.define('app-container', AppContainer)