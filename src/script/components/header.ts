import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = '中国 PWA 开发者日';

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav fluent-anchor::part(control) {
          color: initial;
        }
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
      <header>
        <div id="back-button-block">
          ${this.enableBack ? html`<fluent-anchor appearance="accent" href="/">
            Back
          </fluent-anchor>` : null}

          <h1>${this.title}</h1>
        </div>
        Navigation
      </header>
    `;
  }
}
