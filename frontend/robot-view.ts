import {ParamValue, BeforeLeaveObserver, EmptyCommands, PreventCommands, Router, RouterLocation, IndexedParams} from "@vaadin/router";
import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';
import "@vaadin/vaadin-button";
import {router} from "./index";

@customElement('robot-view')
class RobotView extends LitElement implements BeforeLeaveObserver {

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
        // reading unnamed parameter
        let param1: ParamValue = location.params[0];
        // reading named parameter
        let param2: ParamValue = location.params["doornumber"];
        console.log("Stairwell " +  param1.toString() +
                    ", door number " + param2.toString());
    }


    protected render() {
        return html`
            <h1>Robot-view</h1>
        `;
    }

    click() {

    }


}