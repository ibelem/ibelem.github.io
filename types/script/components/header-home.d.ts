import { LitElement } from 'lit';
export declare class AppHeaderHome extends LitElement {
    enableBack: boolean;
    subtitle: string;
    title: string;
    time: string;
    static get styles(): import("lit").CSSResult;
    constructor();
    updated(changedProperties: any): void;
    share(): void;
    render(): import("lit-html").TemplateResult<1>;
}
