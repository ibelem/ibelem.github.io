import { LitElement } from 'lit';
import './script/pages/app-home';
import './script/components/header';
import './script/components/header-home';
import './script/components/nav';
import './script/components/nav-home';
import './script/components/footer';
import './script/components/footer-home';
import './styles/global.css';
export declare class AppIndex extends LitElement {
    static get styles(): import("lit").CSSResult;
    constructor();
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
