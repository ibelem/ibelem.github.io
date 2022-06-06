import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  @property({ type: String }) subtitle = '第二届';
  @property({ type: String }) title = '中国 PWA 开发者日';
  @property({ type: String }) time = '2022年8月6日 13:00-17:00';
  @property({ type: String }) description = `
    为加速推动渐进式 Web 应用 (PWA) 在中国的发展，微软与英特尔携手举办“第二届中国 PWA 开发者日”。
    本次活动邀请一众业界大咖围绕 PWA 技术展开探讨，分享技术进展，切实地融入 PWA 生态的实践与落地。
    
    期待与您线上相聚。
    `;


  @property() message = 'Welcome!';

  static get styles() {
    return css`
      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media (min-width: 1024px) {
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media (prefers-color-scheme: light) {
      }

      @media (prefers-color-scheme: dark) {
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: '中国 PWA 开发者日',
        text: '中国 PWA 开发者日',
        url: 'https://pwadeveloperday.github.com/pwa-developer-day',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <div>
        <div>
          <h2>${this.subtitle}</h2>
          <h1>${this.title}</h1>
          <h2>${this.time}</h2>
        <div>
        <div id="welcomeBar">
 
          <h2>${this.description}</h2>
          <fluent-button appearance="primary" @click="${this.share}" >分享 中国 PWA 开发者日</fluent-button>
 
          <fluent-tabs activeid="entrees">
              <fluent-tab id="apps">Appet</fluent-tab>
              <fluent-tab id="entrees">Entrees</fluent-tab>
              <fluent-tab id="desserts">Desserts</fluent-tab>
              <fluent-tab-panel id="appsPanel">
                  <ol>
                      <li><fluent-anchor href="#" appearance="hypertext">Stuffed artichokes</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Bruschetta</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Oven-baked polenta</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Salami and Fig Crostini with Ricotta</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Rosemary-Potato Focaccia with Goat Cheese</fluent-anchor></li>
                  </ol>
              </fluent-tab-panel>
              <fluent-tab-panel id="entreesPanel">
                  <ol>
                      <li><fluent-anchor href="#" appearance="hypertext">Mushroom-Sausage Ragù</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Tomato Bread Soup with Steamed Mussels</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Grilled Fish with Artichoke Caponata</-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Celery Root and Mushroom Lasagna</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Osso Buco with Citrus Gremolata</fluent-anchor></li>
                  </ol>
              </fluent-tab-panel>
              <fluent-tab-panel id="dessertsPanel">
                  <ol>
                      <li><fluent-anchor href="#" appearance="hypertext">Tiramisu</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Spumoni</fluent-anchor></li>
                      <li><fluent-anchor href="#" appearance="hypertext">Limoncello and Ice Cream with Biscotti</fluent-anchor></li>
                  </ol>
              </fluent-tab-panel>
          </fluent-tabs>

 
 
        </div>

        <pwa-install>安装 中国 PWA 开发者日</pwa-install>
      </div>
    `;
  }
}

