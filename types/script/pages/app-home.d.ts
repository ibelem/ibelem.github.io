import { LitElement } from 'lit';
import '@pwabuilder/pwainstall';
export declare class AppHome extends LitElement {
    subtitle: string;
    title: string;
    time: string;
    description: string;
    message: string;
    static get styles(): import("lit").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
