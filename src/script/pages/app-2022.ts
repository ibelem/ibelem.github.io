import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-2022')
export class App2022 extends LitElement {
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
      <div>
        <h2>2022 中国 PWA 开发者日</h2>
      </div>
      <app-footer></app-footer>
    `;
  }
}
