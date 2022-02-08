import {AfterEnterObserver, EmptyCommands, Router, RouterLocation} from "@vaadin/router";
import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';
import "@vaadin/vaadin-button";

@customElement('not-found-view')
class NotFoundView extends LitElement implements AfterEnterObserver {

    path = "";

    onAfterEnter(location: RouterLocation, commands: EmptyCommands,
                 router: Router) {
        this.path = location.pathname;
    }

    protected render() {
        return html`Path ${this.path} not found`;
    }
}