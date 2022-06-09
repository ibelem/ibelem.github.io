import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-2022')
export class App2022 extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  @property({ type: String }) subtitle = '第二届';
  @property({ type: String }) title = '中国 PWA 开发者日';
  @property({ type: String }) time = '2022 年 8 月 6 日 13:00 - 17:00';
  @property({ type: String }) description = `
    为加速推动渐进式 Web 应用 (PWA) 在中国的发展，微软与英特尔携手举办“第二届中国 PWA 开发者日”。
    本次活动邀请一众业界大咖围绕 PWA 展开分享，探讨最新技术进展，及 PWA 生态的实践与落地。
    
    期待与您线上相聚。
    `;

  @property() message = 'Welcome!';

  static get properties() {
    return {
      data: { type: Object }
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();

  }

  async fetchData() {
    await fetch('/data.json');
    const response = await fetch('/data.json');
    this.data = await response.json();
  }

  static get styles() {
    return css`
    .p2022 {
      background: #62278d;
      background: linear-gradient(to bottom,  rgba(61, 20, 136, 1) 0%, #62278d 80%, #229679 100%);
      color: #fff;
    }

      pwa-install {
        position: fixed;
        bottom: 16px;
        right: 16px;
        --install-button-color: transparent;
      }

      pwa-install:hover {
        border: 2px solid #fff;
        border-radius: 50% 50%;
      }

      #openButton:hover {
        background: rgba(61, 20, 136, 0.8);
      }

      pwa-install svg {
        fill: #fff;
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      .hero {
        padding: 3rem 0;
        text-align: center;
        text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.4);
      }

      .hero h1 {
        margin: 2rem;
        font-size: clamp(36px, 6vw, 82px);
        letter-spacing: 4px;
        line-height: 1.2;
        font-weight: 900;
      }

      .hero .h1b {
        margin-top: -2rem;
      }

      .hero h2 {
        margin: 0px;
        font-size: clamp(26px, 4vw, 44px);
        letter-spacing: 4px;
      }
      .hero h3 {
        margin: 0rem auto;
        font-size: clamp(20px, 3vw, 28px);
        letter-spacing: 2px;
      }

      #schedule, .box {
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 0px;
        margin-bottom: 16px;
      }

      fluent-card {
        padding: 1rem;
        color: #fff;
        border: 0px;
        border-radius: 0px;
        background: transparent;
        box-shadow: none;
      }

      fluent-card:hover {
        background: rgba(0, 0, 0, 0.4);
      }

      #schedule fluent-card {
        display: flex;
        align-items: center;
      }

      fluent-card {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      fluent-card:last-child {
        border-bottom:0px;
      }

      @media (min-width: 1024px) {
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media (prefers-color-scheme: light) {
      }

      @media (prefers-color-scheme: dark) {
      }

      :host {
        --install-button-color: #3d1488;
      }

      .time, .divider, .topic {
        padding: 0 4px;
      }

      .divider {
        margin: 0px;
      }

      .divider svg {
        width: 20px;
        height: 20px;
        fill: rgba(255, 255, 255, 0.9);
        margin-bottom:-5px;
      }

      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
      }

      .details {
        display: flex;
        margin-top: 8px;
      }

      .avatar_ {
        border: 5px solid hsl(100 100% 60%);
        border-image-slice: 1;
        border-image-source: conic-gradient(
          from var(--startDeg, 0deg),
          hsl(100 100% 60%), 
          hsl(200 100% 60%),
          hsl(100 100% 60%)
        );
      }

      .avatar {
        width: 60px;
        height: 60px;
        background-size: 60px 60px;
        margin-right: 10px;
        border: 4px solid hsl(100 100% 60%);
        border-radius: 50px;
      }

      .description {
        align-self: center;
      }

      .team {
        font-size: 11px;
      }

      #icon_qi {
        background-image: url('assets/2022/people/120/qi.png');
      }
      #icon_alex {
        background-image: url('assets/2022/people/120/alex.png');
      }
      #icon_harry {
        background-image: url('assets/2022/people/120/harry.png');
      }
      #icon_edwin {
        background-image: url('assets/2022/people/120/edwin.png');
      }
      #icon_belem {
        background-image: url('assets/2022/people/120/belem.png');
      }

      .p2022 {
        padding: 16px;
      }
     `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('欢迎您!');
  }

  render() {
    if (this.data) {

      let fluentcard = '';

      for(let i of this.data.event) {
        let t = `
          <fluent-card>
            <div class="time">${i.time}</div>
            <div class="divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>  
            </div>
            <div class="topic">
              <div class="title">${i.title}</div>
              <div class="details">
                <div class="avatar" id="icon_${i.iconid}"></div>
                <div class="description">
                  <div class="nametitle">${i.speaker} / ${i.pos}</div>
                  <div class="team">${i.com}</div>
                </div>
              </div>
            </div>
          </fluent-card>
        `;

        fluentcard += t;
      }

      return html`
        <app-header ?enableBack="${true}"></app-header>
        <div class="p2022">
          <div class="hero">
            <h3>${this.subtitle}</h3>
            <h2>${this.title}</h2>
            <h3 class="h3b">${this.time}</h3>
          </div>
          <fluent-card class="box"> ${this.description} </fluent-card>

          <div id="schedule">
            ${unsafeHTML(fluentcard)}
          </div>
          <pwa-install title="安装 中国 PWA 开发者日">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
              />
            </svg>
          </pwa-install>

          <app-footer-home></app-footer-home>
        </div>
      `;
    }
  }
}