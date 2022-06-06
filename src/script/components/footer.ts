import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`
      footer {
        margin-top: 1rem;
      }
      @media(prefers-color-scheme: light) {
      }
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    if (changedProperties.has('enableBack')) {
      console.log('enableBack', this.enableBack);
    }
  }

  render() {
    return html`
      <footer>
        &copy;2022 中国 PWA 开发者日
      </footer>
    `;
  }
}
