import {BeforeLeaveObserver, EmptyCommands, PreventCommands, Router, RouterLocation} from "@vaadin/router";
import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';
import "@vaadin/vaadin-button";

@customElement('about-view')
class AboutView extends LitElement implements BeforeLeaveObserver {

    unsavedChanges = false;

    onBeforeLeave(location: RouterLocation,
                  commands: PreventCommands,
                  router: Router) {
        if (this.unsavedChanges) {
            return commands.prevent();
        }
        return;
    }

    onAfterEnter(location: RouterLocation,
                 commands: EmptyCommands,
                 router: Router) {

    }


    protected render() {
        return html`
            <vaadin-button @click=${this.click}>Go to Home</vaadin-button>
        `;
    }

    click() {
        //const params: IndexedParams = {id: "12"};
        Router.go("/");
    }


}