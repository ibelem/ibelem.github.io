import { LitElement, css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {
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
          "bilibili": "",
          "aid": "",
          "cid": "",
          "youtube": ""
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

  @query('#herovideo') _herovideo: HTMLVideoElement;
  @query('#herocanvas') _herocanvas: HTMLCanvasElement;
  @query('#manualplay') _manualplay: HTMLButtonElement;
  @query('#manualpause') _manualpause: HTMLButtonElement;
  @property({ type: String }) playpromise = ``

  private _playHeroVideo() {
    this._herovideo.play();
  }

  private _pauseHeroVideo() {
    if (!this._herovideo.paused) {
      this._herovideo.pause();
    }
  }

  private _checkVideoAutoPlay() {
    let promise = this._herovideo.play();

    if (promise !== undefined) {
      promise.then(_ => {
        this.playpromise = 'Autoplay started!';
        console.log("+ Autoplay started!");
      }).catch(_ => {
        this.playpromise = 'Autoplay was prevented!';
        console.log("- Autoplay was prevented!");
      });
    }
  }
 
  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
    this._checkVideoAutoPlay();
  }

  async fetchData() {
    await fetch('/data.json');
    const response = await fetch('/data.json');
    this.jsondata = await response.json();
  }

  static get styles() {
    return css`
    #superhero {
      height: 100vh;
      width: 100%;
      position: absolute;
      overflow: hidden;
      /* background: url(/assets/img/vbg.png) no-repeat center center/cover; */
      z-index: 0;
    }

    video {
      min-width: 100%;
      min-height: 100vh;
      z-index: 0;
    }

    #manualplay, #manualpause {
      color: rgba(0, 0, 0, 0.5);
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      cursor: pointer;
      margin: auto 4px;
    }

    #manualplay:hover, #manualpause:hover {
      color: rgba(0, 0, 0, 1);
      border: 1px solid rgba(0, 0, 0, 1);
    }

    .overlay {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(0deg, rgba(227, 253, 245, 0.3) 5%, rgba(0, 0, 0, .2) 20%, rgba(0, 0, 0, .1) 100%);
      /* bbackground-size: 20px 20px; */
      z-index: 0;
    }

    .home {
      color: #3D3D3D;
      background-image: linear-gradient(180deg, #ffffff 0%, #E3FDF5 10%, #FFE6FA 100%);
      height: 100%;
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
        background: rgba(61, 20, 136, 0.8);
      }

      pwa-install svg {
        fill: rgba(255, 255, 255, 0.95);
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      #schedule, .box {
        background: rgba(255, 255, 255, 0.8);
        border-bottom: 0px;
        margin-bottom: 16px;
      }

      fluent-card {
        padding: 1rem;
        color: #3D3D3D;
        border: 0px;
        border-radius: 0px;
        background: transparent;
        box-shadow: none;
      }

      fluent-card:hover {
        background: rgba(255, 255, 255, 0.95);
      }

      #schedule fluent-card {
        display: flex;
        align-items: center;
      }

      fluent-card {
        border-bottom: 1px solid rgba(227, 253, 245, 0.9);
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
        --install-button-color: rgba(61, 20, 136, 1);
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
        fill: #3d3d3d;
        margin-bottom:-5px;
      }

      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
        color: rgba(61, 20, 136, 0.9);
      }

      #schedule fluent-card:hover .title {
        color: rgba(61, 20, 136, 1);
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
        font-size: 12px;
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

      .home {
        padding: 16px;
      }

      #playbar {
        margin: 0 auto 16px auto;
        text-align:center;
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

      for(let i of this.jsondata.t2022) {
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
        <div>
          <div id="superhero">
            <video poster="/assets/img/vbg.png" autoplay="" playsinline="" loop="" muted="" src="/assets/img/vbg.mp4" id="herovideo"></video>
            <div class="overlay"></div>
          </div>
          <app-header-home></app-header-home>
        </div>
        
        <div class="home">
          <div id="playbar">
            <span id="playpromise">${this.playpromise}</span>
            <button id ="manualplay" @click="${this._playHeroVideo}">Play</button>
            <button id ="manualpause" @click="${this._pauseHeroVideo}">Pause</button>
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
    } else {
      return html`
        <div>No data</div>
      `;
    }
  }
}

