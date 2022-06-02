import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-mediaplayer')
export class AppMediaPlayer extends LitElement {
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
        <h2>媒体播放器</h2>
      </div>
    `;
  }
}
