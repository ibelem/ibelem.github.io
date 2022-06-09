import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-mobile')
export class AppMobile extends LitElement {
  static get styles() {
    return css`
    .scroll-container {
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
    }
    
    .section {
      height: 100vh;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    
    .section {
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
    
    body {
      margin: 0;
    }
    #bg {
      background-image: url('https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png');
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div id="bg"></div>

      <div class="scroll-container">
        <img class="section" crossorigin="Anonymous" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png">
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png">
        <!-- https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70 -->
        <img class="section" crossorigin="Anonymous" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
       </div>
    `;
  }
}
