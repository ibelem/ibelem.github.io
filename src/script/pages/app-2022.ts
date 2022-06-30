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

  @property({ type: Object }) jsondata = {
      "name": "PWA Developer Day 2022",
      "t2022" : [
        {
            "id": 1,
            "time": "13:00",
            "tag": "",
            "title": "开幕致辞",
            "des": "",
            "speaker": "张琦",
            "pos": "资深技术总监",
            "com": "英特尔 SATG Web 平台工程",
            "iconid": "qi",
            "icon": "assets/2022/people/120/qi.png",
            "icon5": "assets/2022/people/500/qi.png",
            "bio": "",
            "pdf": "",
            "bilibili": "https://www.bilibili.com/video/BV1Kv4y1G7L8",
            "aid": "554870624",
            "cid": "741436422",
            "youtube": "https://youtu.be/npMpZHMizUc" 
          }
        ],
      "t2021": [
        {
          "id": 1,
          "tag": "opening",
          "title": "Web 开发的现状与未来（开场介绍）",
          "des": "",
          "speaker": "张琦",
          "pos": "资深技术总监",
          "com": "软件与先进技术事业部 Web 平台工程",
          "icon": "",
          "icon5": "assets/2022/people/500/qi.png",
          "bio": "",
          "pdf": "https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/02.pdf",
          "bilibili": "https://www.bilibili.com/video/BV1Kv4y1G7L8",
          "aid": "554870624",
          "cid": "741436422",
          "youtube": "https://youtu.be/npMpZHMizUc" 
        }
      ]
    };

  @property({ type: String }) screenwidth = "";
  @property({ type: String }) screenheight = "";

  screenres() {
    let sw = screen.availWidth;
    let rsw = sw - 32;
    let rsh = (rsw * 9)/16;
    this.screenwidth = rsw.toString();
    this.screenheight = rsh.toString();
  }

  async connectedCallback() {
    super.connectedCallback();
    this.screenres();
    await this.fetchData();
  }

  async fetchData() {
    await fetch('/data.json');
    const response = await fetch('/data.json');
    this.jsondata = await response.json();
  }

  static get styles() {
    return css`
      .section {
        color: #3d3d3d;
      }

      pwa-install {
        position: fixed;
        bottom: 16px;
        right: 16px;
        --install-button-color: transparent;
      }

      pwa-install:hover {
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 50% 50%;
      }

      #openButton:hover {
        background: rgba(0,113,197, 0.8);
      }

      pwa-install svg {
        fill: rgba(255, 255, 255, 0.95);
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      .hero {
        margin-top: -6rem;
        padding: 0rem 0px 6rem;
        text-align: center;
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

      .hero h2, .hero h3 {
        color: rgba(0,113,197, 0.9);
      }

      .hero:hover h2, .hero:hover h3 {
        color: rgba(0,113,197, 1);
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

      .section {
        display: flex;
        height: calc(100vh - 56px);
        flex-direction: column;
        justify-content: center;
      }

      .box {
        padding: 32px;
        height: auto;
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0);
        background-color: rgba(255, 255, 255, 0.2);
      }

      .box:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      fluent-card {
        padding: 1rem;
        color: #3d3d3d;
        border: 0px;
        border-radius: 0px;
        box-shadow: none;
        background: rgba(255, 255, 255, 0.2);
      }

      fluent-card:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #000;
      }
 
      @media (min-width: 1024px) {
        .hero {
          margin: 1rem auto;
          padding: 0rem 0px 1rem;
        }

        .title {
          margin: 1rem auto;
          text-align: center;
        }
        
        .section {
          height: auto;
          background: transparent;
        }

        fluent-card {
          background: transparent;
        }

        fluent-card:hover {
          background: transparent;
        }

        .topic {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-row-gap: 0px;
          flex-direction: none;
          align-items: center;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) #ffffff;
        }
     
        *::-webkit-scrollbar {
          width: 5px;
        }
    
        *::-webkit-scrollbar-track {
          background: transparent;
        }
    
        *::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
          border: 0px solid transparent;
        }
        
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media (prefers-color-scheme: light) {
      }

      @media (prefers-color-scheme: dark) {
      }

      :host {
        --install-button-color: rgba(0,113,197, 1);
      }

      .time, .topic {
        padding: 0 4px;
        display: flex;
        flex-direction: column;
      }

      
      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
        color: rgba(0,113,197, 0.9);
      }

      fluent-card:hover .title {
        color: rgba(0,113,197, 1);
      }

      .details {
        display: flex;
        margin-top: 8px;
      }

      .des {
        margin: 16px auto;
        padding: 16px;
        font-size: 13px;
        overflow-y: auto;
        background: rgba(255, 255, 255, 0.2);
      }

      .bio {
        margin: 16px auto;
        padding: 16px;
        font-size: 13px;
        overflow-y: auto;
        background: rgba(255, 255, 255, 0.2);
      }

      .des:hover, .bio:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      @media (max-width: 1024px) {
        .p2022 {
          background-image: none;
        }

        .scroll100 {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
        }

        .section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          object-fit: cover;
          object-position: center;
          width: 100%;
          background-image: linear-gradient(180deg,  rgba(227, 253, 245, 0.7) 5%, #E3FDF5 10%, #FFE6FA 100%);
        }
  
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
        font-size: 13px;
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

      .bili {
        margin: 16px auto;
        text-align: center;
      }

      iframe {
        max-width: 480px;
        max-height: 320px; 
      }

      #scrollicon svg {
        display: none;
      }

      @keyframes flickerAnimation { 
        0%   { opacity:1; }
        50%  { opacity:0; }
        100% { opacity:1; }
      }

      @media only screen and (max-height: 415px) and (orientation: landscape) {
        .p2022 {
          height: calc(100vh - 56px);
        }
        .hero {
          margin-top: 0;
          padding: 0;
        }
        #scrollicon {
          margin: 0px auto;
          text-align: center;
          position: absolute;
          bottom: 16px;
          width: 100%;
        }
        #scrollicon svg {
          display: inline-block;
          height: 20px;
          width: 20px;
          cursor: pointer;
          animation: flickerAnimation 2s infinite;
        }
        #scrollicon svg path {
          fill: rgba(0, 113, 197, 0.8);
        }
        #scrollicon:hover svg path {
          fill: rgba(0, 113, 197, 1);
        }

        .topic {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 16px;
          grid-row-gap: 0px;
          flex-direction: none;
          align-items: center;
        }
        iframe {
          max-width: 288px;
          max-height: calc((100vh - 56px)*0.6);
        }

        .box {
          padding: 16px;
          margin: 16px auto;
        }

        .bili {
          margin: 6px auto;
        }

        .des {
          max-height: 20vh;
        }
 
      }

      @media only screen and (max-width: 420px) and (orientation: portrait) {
        #scrollicon {
          margin: 0px auto;
          text-align: center;
          position: absolute;
          bottom: 16px;
          width: 100%;
        }
        #scrollicon svg {
          display: inline-block;
          height: 20px;
          width: 20px;
          cursor: pointer;
          animation: flickerAnimation 2s infinite;
        }
        #scrollicon svg path {
          fill: rgba(0, 113, 197, 0.8);
        }
        #scrollicon:hover svg path {
          fill: rgba(0, 113, 197, 1);
        }

        .bili {
          margin: 16px auto;
        }

        .des {
          max-height: 20vh;
        }
      }
      
      .bio a, .des a {
        color: rgba(0, 113, 197, 0.8);
        text-decoration: none;
        border-bottom: 1px dashed rgba(0, 113, 197, 1);;
      }

      .bio a:hover, .des a:hover {
        color: rgba(0,113,197, 1);
        text-decoration: none;
        border-bottom: 1px dashed rgba(0,113,197, 1);
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
    if (this.jsondata) {

      let fluentcard = '';
      let t = '';

      for(let i of this.jsondata.t2022) {
        t = `
          <fluent-card class="section">
            <div class="title">${i.title}</div>
            <div class="topic">
              <div class="bili">
                <iframe width="${this.screenwidth}" height="${this.screenheight}" src="https://player.bilibili.com/player.html?cid=${i.cid}&aid=${i.aid}&page=1&as_wide=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
              </div>
              <div>
                <fluent-tabs activeid="entrees">
                  <fluent-tab id="apps">主题概要</fluent-tab>
                  <fluent-tab id="entrees">嘉宾介绍</fluent-tab>
                  <fluent-tab-panel id="appsPanel" class="des">
                    ${i.des.replace(/\n/g, '<br>')}
                  </fluent-tab-panel>
                  <fluent-tab-panel id="entreesPanel" class="des">
                    ${i.bio}
                  </fluent-tab-panel>
                </fluent-tabs>

                <div class="details">
                  <div class="avatar" id="icon_${i.iconid}"></div>
                  <div class="description">
                    <div class="nametitle">${i.speaker}</div>
                    <div class="team">${i.pos}</div>
                    <div class="team">${i.com}</div>
                  </div>
                </div>
              </div>
            </div>
          </fluent-card>
        `;

        fluentcard += t;
      }

      return html`
        <app-header ?enableBack="${true}"></app-header>
        <div class="scroll100">
          <div class="p2022 section">
            <div class="hero">
              <h3>${this.subtitle}</h3>
              <h2>中国 <pwa-logo></pwa-logo> 开发者日</h2>
              <h3 class="h3b">${this.time}</h3>
            </div>
            <fluent-card class="box"> ${this.description}</fluent-card>
            <div id="scrollicon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/>
              </svg>
            </div>
          </div>
          ${unsafeHTML(fluentcard)}
        </div>
        <pwa-install title="安装 中国 PWA 开发者日">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
            />
          </svg>
        </pwa-install>
      `;
    } else {
      return html`<div>No data</div>`;
    }
  }
}