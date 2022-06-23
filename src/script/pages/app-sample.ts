import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-sample')
export class AppSample extends LitElement {
  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/mediaplayer">播放</fluent-breadcrumb-item>
      </fluent-breadcrumb>

      <div>
        <h2>媒体播放器</h2>
      </div>
    `;
  }
}
