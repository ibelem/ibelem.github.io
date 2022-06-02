import { LitElement } from 'lit';
import '@pwabuilder/pwainstall';
export declare class AppHome extends LitElement {
    message: string;
    static get styles(): import("lit").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    share(): void;
    render(): import("lit-html").TemplateResult<1>;
}
