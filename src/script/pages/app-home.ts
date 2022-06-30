import { LitElement, css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@pwabuilder/pwainstall';
import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import SimplexNoise from 'simplex-noise';
import hsl from "hsl-to-hex";
import debounce from "debounce";

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

  @query('.orb-canvas') canvas: HTMLCanvasElement;  
  @query('#herovideo') _herovideo: HTMLVideoElement;
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

  private _showCanvas = () => {
    const app = new PIXI.Application({
      // render to <canvas class="orb-canvas"></canvas>
      view: this.canvas,
      resizeTo: window,
      transparent: true
    });

    const colorPalette = new ColorPalette();

    app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    const orbs:[] = [];

    for (let i = 0; i < 10; i++) {
      const orb = new Orb(colorPalette.randomColor());
      app.stage.addChild(orb.graphics);
      orbs.push(orb);
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  }
 
  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
    this._showCanvas();
    // this._checkVideoAutoPlay();
  }

  async fetchData() {
    await fetch('/data.json');
    const response = await fetch('/data.json');
    this.jsondata = await response.json();
  }

  static get styles() {
    return css`
    #herohome {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, hsl(0, 82, 57, 85%) 10%, hsl(252, 82, 57) 100%);
    }

    .orb-canvas {
      height: 100vh;
      width: 100%;
      position: absolute;
      overflow: hidden;
      z-index: 0;
    }

    /*
    #superhero {
      height: 100vh;
      width: 100%;
      position: absolute;
      overflow: hidden;
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
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 5%, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, .2) 100%);
      z-index: 0;
    }
    */

    .home {
      color: #3D3D3D;
      background-image: linear-gradient(180deg, #ffffff 2%, #E3FDF5 8%, #FFE6FA 100%);
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
        background: rgba(0,113,197, 0.8);
      }

      pwa-install svg {
        fill: rgba(255, 255, 255, 0.95);
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      fluent-card.box {
        margin-bottom: 16px;
      }

      fluent-card {
        padding: 1rem;
        color: #3D3D3D;
        border: 0;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
      }

      #schedule {
        box-shadow: none;
        border: 0px;
      }

      .box {
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0);
        background-color: rgba(255, 255, 255, 0.1);
      }

      fluent-card.box:hover, fluent-card:hover {
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
      }

      #schedule fluent-card {
        display: flex;
        align-items: center;
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
        --install-button-color: rgba(0,113,197, 1);
      }

      .time, .divider, .topic {
        padding: 0 2px;
      }

      .divider {
        margin: 0px;
      }

      .divider svg {
        width: 15px;
        height: 15px;
        fill: #3d3d3d;
        margin-bottom:-2px;
      }

      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
        color: rgba(0,113,197, 0.9);
      }

      #schedule fluent-card:hover .title {
        color: rgba(0,113,197, 1);
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

      #icon_haoyu {
        background-image: url('assets/2022/people/120/haoyu.png');
      }
      #icon_pwabuilder {
        background-image: url('assets/2022/people/120/pwabuilder.png');
      }

      .home {
        padding: 16px;
      }

      #playbar {
        margin: 0 auto 16px auto;
        text-align:center;
      }

      .promote div {
        font-size: 13px;
        height: 12px;
        font-weight: 500;
        padding: 0px !important;
      }
      .promote svg {
        width: 20px;
        height: 20px;
        margin-bottom: -2px;
      }

      @media only screen and (max-width: 420px) and (orientation: portrait) {
        .nametitle {
          height: 20px;
          white-space: nowrap;
          max-width: 158px;
          overflow: hidden;
        }
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
                  <div class="nametitle">${i.speaker}</div>
                  <div class="team">${i.pos}</div>
                  <div class="team">${i.com}</div>
                </div>
              </div>
            </div>
          </fluent-card>
        `;

        fluentcard += t;

      }

      return html`
        <div id="herohome">
          <canvas class="orb-canvas"></canvas>
          <app-header-home></app-header-home>
        </div>
        
        <div class="home" id="home">
          <!--
          <div id="playbar">
            <span id="playpromise">${this.playpromise}</span>
            <button id ="manualplay" @click="${this._playHeroVideo}">Play</button>
            <button id ="manualpause" @click="${this._pauseHeroVideo}">Pause</button>
          </div>
          -->
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



function random(min:number, max:number) {
  return Math.random() * (max - min) + min;
}

// map a number from 1 range to another
function map(n:any, start1:any, end1:any, start2:any, end2:any) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Create a new simplex noise instance
const simplex = new SimplexNoise();

// ColorPalette class
class ColorPalette {
  hue: number;
  complimentaryHue1: number;
  complimentaryHue2: number;
  saturation: number;
  lightness: number;
  baseColor: any;
  complimentaryColor1: any;
  complimentaryColor2: any;
  colorChoices: any[];
  constructor() {
    this.setColors();
    this.setCustomProperties();
  }

  setColors() {
    // pick a random hue somewhere between 220 and 360
    this.hue = ~~random(220, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    // define a fixed saturation and lightness
    this.saturation = 95;
    this.lightness = 50;

    // define a base color
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor1 = hsl(
      this.complimentaryHue1,
      this.saturation,
      this.lightness
    );
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );

    // store the color choices in an array so that a random one can be picked later
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor1,
      this.complimentaryColor2
    ];
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }

  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty("--hue", this.hue.toString());
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      this.complimentaryHue1.toString()
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      this.complimentaryHue2.toString()
    );
  }
}

// Orb class
class Orb {
  bounds: { x: { min: number; max: number; }; y: { min: number; max: number; }; };
  x: number;
  y: number;
  scale: number;
  fill: number;
  radius: number;
  xOff: number;
  yOff: number;
  inc: number;
  graphics: any;
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    this.graphics.clear();

    this.graphics.beginFill(this.fill);
    this.graphics.drawCircle(0, 0, this.radius);
    this.graphics.endFill();
  }
}