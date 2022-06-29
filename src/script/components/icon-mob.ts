import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('icon-mob')
export class IconMob extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: String }) svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/>
  </svg>
  `

  static get styles() {
    return css`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    ${unsafeHTML(this.svg)}
    `;
  }
}
