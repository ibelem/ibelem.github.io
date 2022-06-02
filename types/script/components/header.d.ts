import { LitElement } from 'lit';
export declare class AppHeader extends LitElement {
    title: string;
    enableBack: boolean;
    static get styles(): import("lit").CSSResult;
    constructor();
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
