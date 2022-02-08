import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';
import "@vaadin/vaadin-button";
import {Router} from "@vaadin/router";

@customElement('home-view')
class HomeView extends LitElement {

    protected render() {
        return html`<h2>HomeView</h2>
        <p>Hello home</p>
        <vaadin-button @click=${this.click}>Go to About</vaadin-button>
        `;
    }

    click() {
        Router.go("about");
    }

}

