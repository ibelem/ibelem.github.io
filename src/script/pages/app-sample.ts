import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-sample')
export class AppSample extends LitElement {
  static get styles() {
    return css`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
      min-height: calc(100vh - 174px);
    }
    fluent-card {
      border-radius: 0px;
      box-shadow: none;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <app-header ?enableBack="${true}"></app-header>
    <div class="about">  
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/sample-local-font-access">Local Font Access API</fluent-breadcrumb-item>
      </fluent-breadcrumb>
 
    </div>
    <app-footer></app-footer>
    `;
  }
}
