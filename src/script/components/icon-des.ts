import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('icon-des')
export class IconDes extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: String }) svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z"/>
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
