import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header-home')
export class AppHeaderHome extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: String }) subtitle = '第二届';
  @property({ type: String }) title = '';
  @property({ type: String }) time = '8 月 6 日 (周六) 09:00 - 17:00';

  static get styles() {
    return css`
     header {
      height: 100vh;
      width: 100%;
     }
     
    .text-gradient {
      background-image: linear-gradient(
        45deg,
        rgba(119, 255, 51, 1) 10%,
        rgba(0, 199, 253, 1) 60%,
        rgba(255, 255, 255)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

     .topbar {
      padding: 8px 16px 4px 16px;
     }

      header svg {
        height: 40px;
        width: 60px;
        display: inline-flex;
      }

      .hero {
        display: flex;
        text-align: center;
        text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.03);
        color: rgba(255, 255, 255, 0.9);
        height: calc(100vh - 56px);
        justify-content: center;
        align-items: center;
      }

      .hero:hover {
        color: rgba(255, 255, 255, 1.0);
      }

      @media only screen and (max-width: 1024px) {
        .hero {
          flex-direction: column;
          flex-wrap: nowrap;
        }
      }

      @media only screen and (min-width: 1025px) {
        .hero {
          flex-direction: row;
          flex-wrap: nowrap;
        }
      } 

      .hero h1 {
        margin: 2rem;
        font-size: clamp(36px, 6vw, 82px);
        letter-spacing: 4px;
        line-height: 1.2;
        font-weight: 900;
      }

      .hero h2, .hero h3 {
        text-shadow: 1px 1px 1px rgba(0,113,197, 0.1);
      }

      .hero h3 {
        color: rgba(0, 113, 197, 0.9); 
      }
 
      .hero h2 {
        color: rgba(0, 113, 197, 1.0); 
      }

      .hero h2 svg {
        margin: 0;
      }

      .hero:hover h3 {
        color: rgba(0, 113, 197, 1.0); 
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
        letter-spacing: 1px;
      }

      .super {
        z-index: 0;
      }

      #sidepromote {

      }

      .hf {
        align-self: center;
        z-index: 0;
      }

      .share {
        cursor: pointer;
        margin-left: -32px;
      }

      .share svg {
        width: 24px;
        height: 24px;
        fill: rgba(0, 113, 197, 0.9);
      }

      .share:hover svg {
        fill: rgba(0, 113, 197, 1);
      }

      .hf svg {
        fill: rgba(0, 113, 197, 0.9);
      }

      .hf:hover svg {
        fill: rgba(0, 113, 197, 1.0);
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(255, 255, 255, 0.9);
      }

      .back:hover svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(255, 255, 255, 1);
      }

      @media(prefers-color-scheme: light) {
      }

      

      .register {
        margin: 4rem auto;
        text-align: center;
      }

      .register a {
        display: inline-block;
        --startDeg: 0deg;
        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
        border: 3px solid hsl(100 100% 60%);
        border-image-slice: 1;
        border-image-source: conic-gradient(
          from var(--startDeg, 0deg),
          hsl(100 100% 60%), 
          hsl(200 100% 60%),
          hsl(100 100% 60%)
        );

        font-weight: 600;
        letter-spacing: 2px;
        color: rgba(0, 199, 253, 0.9);
        padding: 12px 36px;
        box-sizing: border-box;
        text-decoration: none;
      }

      .register a:hover {
        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.5);
        color: rgba(0, 113, 197, 1.0); 
        border-image-source: conic-gradient(
          hsl(100 100% 60%) 40%,
          hsl(200 100% 60%) 0
        );
        letter-spacing: 8px;
      }

      .joint {
        color: rgba(255, 255, 255, 0.9) !important;
      }

      .coll {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }
      .coll svg path#ms {
        fill: rgba(255, 255, 255, 0.9);
      }

      #msft svg {
        height: 60px;
        width: 152px;
      }
      #intel {
        width: 98px;
        height: 38px;
        background: url('/assets/logo/intel-logo.png') no-repeat center center/cover;
        margin-top: -6px;
      }

      /*

      .webapi {
        position: absolute;
        bottom: 0px;
        display: block;
        left:0px;
        width: 100%;
        overflow: hidden;
        color: #fff;
        font-size: 10px;
        background: rgba(0, 199, 253, 0.9);
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .webapi div {
        animation: marquee linear 60s infinite;
        position: relative;
        white-space: nowrap;
      }

      .webapi span {
        margin: 0 16px;
      }

      @keyframes marquee {
        from {transform: translateX(0);}
        to {transform: translateX(-800%);}
      }

      .webapi:hover {
        background: rgba(0, 113, 197, 1.0);
      }

      .webapi:hover div {
        animation-play-state: paused;
      }

      */

      @media only screen and (max-width: 640px) {
        .coll {
          grid-column-gap: 16px;
        }

        #msft svg {
          height: 56px;
          width: 144px;
        }
        #intel {
          width: 80px;
          height: 32px;
        }
      }

      @media only screen and (max-width: 420px) {

      }

      @media only screen and (min-width: 421px) and (max-width: 1023px) {

      }

      @media only screen and (min-width: 1024px) {

      }

      @media only screen and (max-width: 420px) and (orientation: portrait) {
        .hero h1 {
          font-size: clamp(26px, 4vw, 44px)
        }

        .hero h2 {
          margin: 0.5rem auto;
        }
        
        .hero .h3b {
          font-size: clamp(14px, 2.2vw, 18px)
        }

        .hero .h1b {
          margin-top: -1.5rem;
        }
      }

      @media only screen and (max-height: 400px) and (orientation: landscape) {
        .hero h1 {
          display: none;
        }
      }

      @media only screen and (max-width: 1024px) and (orientation: landscape) {
        .hero {
          height: calc(100vh - 56px);
        }

        .hero h2 {
          font-size: clamp(20px, 3vw, 28px);
        }
        .hero h3 {
          font-size: clamp(16px, 2.4vw, 22px)
        }

        .register {
          margin: 1rem auto;
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

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: '中国 PWA 开发者日',
        text: '中国 PWA 开发者日',
        url: 'https://pwadev.io',
      });
    }
  }

  render() {
    return html`
      <header>
        <div id="back-button-block" class="topbar">
          ${this.enableBack ? html`<fluent-anchor class="back" appearance="primary" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
          </fluent-anchor>` : null}
          <div class="hf">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill="#5A0FC8" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg>
          </div>
          <div class="hf">
            <a class="share" @click="${this.share}" title="分享 中国 PWA 开发者日">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"/></svg>
            </a>
          </div>
          <app-nav-home></app-nav-home>
        </div>
        <div class="hero">
          <div class="super">
            <h3>${this.subtitle}</h3>
            <h2>中国 <pwa-logo></pwa-logo> 开发者日</h2>
            <h3 class="h3b">${this.time}</h3>
            <h1 class="text-gradient">在线 免费 分享</h1>
            <h1 class="h1b text-gradient">借助 PWA 获得成功</h1>
            <div class="register">
              <a href="" title="即刻预约" id="book">
                即刻预约
              </a>
            </div>
            <h3 class="joint">联合主办</h3>
            <div class="coll">
              <div></div>
              <div id="intel"></div>
              <div id="msft">
                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="534" viewBox="0 0 1033.746 220.695"><path id="ms" d="M1033.746 99.838v-18.18h-22.576V53.395l-.76.234-21.205 6.488-.418.127v21.415h-33.469v-11.93c0-5.555 1.242-9.806 3.69-12.641 2.431-2.801 5.908-4.225 10.343-4.225 3.188 0 6.489.751 9.811 2.232l.833.372V36.321l-.392-.144c-3.099-1.114-7.314-1.675-12.539-1.675-6.585 0-12.568 1.433-17.786 4.273-5.221 2.844-9.328 6.904-12.205 12.066-2.867 5.156-4.322 11.111-4.322 17.701v13.116h-15.72v18.18h15.72v76.589h22.567V99.838h33.469v48.671c0 20.045 9.455 30.203 28.102 30.203 3.064 0 6.289-.359 9.582-1.062 3.352-.722 5.635-1.443 6.979-2.213l.297-.176v-18.348l-.918.607c-1.225.816-2.75 1.483-4.538 1.979-1.796.505-3.296.758-4.458.758-4.368 0-7.6-1.177-9.605-3.5-2.028-2.344-3.057-6.443-3.057-12.177V99.838h22.575zM866.635 160.26c-8.191 0-14.649-2.716-19.2-8.066-4.579-5.377-6.899-13.043-6.899-22.783 0-10.049 2.32-17.914 6.901-23.386 4.554-5.436 10.95-8.195 19.014-8.195 7.825 0 14.054 2.635 18.516 7.836 4.484 5.228 6.76 13.03 6.76 23.196 0 10.291-2.14 18.196-6.36 23.484-4.191 5.248-10.493 7.914-18.732 7.914m1.003-80.885c-15.627 0-28.039 4.579-36.889 13.61-8.844 9.032-13.328 21.531-13.328 37.153 0 14.838 4.377 26.773 13.011 35.468 8.634 8.698 20.384 13.104 34.921 13.104 15.148 0 27.313-4.643 36.159-13.799 8.845-9.146 13.326-21.527 13.326-36.784 0-15.07-4.205-27.094-12.502-35.731-8.301-8.641-19.977-13.021-34.698-13.021m-86.602 0c-10.63 0-19.423 2.719-26.14 8.08-6.758 5.393-10.186 12.466-10.186 21.025 0 4.449.74 8.401 2.196 11.753 1.465 3.363 3.732 6.324 6.744 8.809 2.989 2.465 7.603 5.047 13.717 7.674 5.14 2.115 8.973 3.904 11.408 5.314 2.38 1.382 4.069 2.771 5.023 4.124.927 1.324 1.397 3.136 1.397 5.372 0 6.367-4.768 9.465-14.579 9.465-3.639 0-7.79-.76-12.337-2.258a46.347 46.347 0 0 1-12.634-6.406l-.937-.672v21.727l.344.16c3.193 1.474 7.219 2.717 11.964 3.695 4.736.979 9.039 1.477 12.777 1.477 11.535 0 20.824-2.732 27.602-8.125 6.821-5.43 10.278-12.67 10.278-21.525 0-6.388-1.861-11.866-5.529-16.284-3.643-4.382-9.966-8.405-18.785-11.961-7.026-2.82-11.527-5.161-13.384-6.958-1.79-1.736-2.699-4.191-2.699-7.3 0-2.756 1.122-4.964 3.425-6.752 2.321-1.797 5.552-2.711 9.604-2.711 3.76 0 7.607.594 11.433 1.758 3.823 1.164 7.181 2.723 9.984 4.63l.922.63v-20.61l-.354-.152c-2.586-1.109-5.996-2.058-10.138-2.828-4.123-.765-7.863-1.151-11.116-1.151m-95.157 80.885c-8.189 0-14.649-2.716-19.199-8.066-4.58-5.377-6.896-13.041-6.896-22.783 0-10.049 2.319-17.914 6.901-23.386 4.55-5.436 10.945-8.195 19.013-8.195 7.822 0 14.051 2.635 18.514 7.836 4.485 5.228 6.76 13.03 6.76 23.196 0 10.291-2.141 18.196-6.361 23.484-4.191 5.248-10.49 7.914-18.732 7.914m1.006-80.885c-15.631 0-28.044 4.579-36.889 13.61-8.844 9.032-13.331 21.531-13.331 37.153 0 14.844 4.38 26.773 13.014 35.468 8.634 8.698 20.383 13.104 34.92 13.104 15.146 0 27.314-4.643 36.16-13.799 8.843-9.146 13.326-21.527 13.326-36.784 0-15.07-4.206-27.094-12.505-35.731-8.303-8.641-19.977-13.021-34.695-13.021M602.409 98.07V81.658h-22.292v94.767h22.292v-48.477c0-8.243 1.869-15.015 5.557-20.13 3.641-5.054 8.493-7.615 14.417-7.615 2.008 0 4.262.331 6.703.986 2.416.651 4.166 1.358 5.198 2.102l.937.679V81.496l-.361-.155c-2.076-.882-5.013-1.327-8.729-1.327-5.602 0-10.615 1.8-14.909 5.344-3.769 3.115-6.493 7.386-8.576 12.712h-.237zm-62.213-18.695c-10.227 0-19.349 2.193-27.108 6.516-7.775 4.333-13.788 10.519-17.879 18.385-4.073 7.847-6.141 17.013-6.141 27.235 0 8.954 2.005 17.171 5.968 24.413 3.965 7.254 9.577 12.929 16.681 16.865 7.094 3.931 15.293 5.924 24.371 5.924 10.594 0 19.639-2.118 26.891-6.295l.293-.168v-20.423l-.937.684c-3.285 2.393-6.956 4.303-10.906 5.679-3.94 1.375-7.532 2.07-10.682 2.07-8.747 0-15.769-2.737-20.866-8.133-5.108-5.403-7.698-12.99-7.698-22.537 0-9.607 2.701-17.389 8.024-23.131 5.307-5.725 12.342-8.629 20.908-8.629 7.327 0 14.467 2.481 21.222 7.381l.935.679V84.371l-.302-.17c-2.542-1.423-6.009-2.598-10.313-3.489-4.286-.889-8.478-1.337-12.461-1.337m-66.481 2.284h-22.292v94.766h22.292V81.659zm-10.918-40.371c-3.669 0-6.869 1.249-9.498 3.724-2.64 2.482-3.979 5.607-3.979 9.295 0 3.63 1.323 6.698 3.938 9.114 2.598 2.409 5.808 3.63 9.54 3.63 3.731 0 6.953-1.221 9.582-3.626 2.646-2.42 3.988-5.487 3.988-9.118 0-3.559-1.306-6.652-3.879-9.195-2.571-2.538-5.833-3.824-9.692-3.824m-55.62 33.379v101.758h22.75V44.189H398.44l-40.022 98.221-38.839-98.221H286.81v132.235h21.379V74.657h.734l41.013 101.768h16.134l40.373-101.758h.734z" /><path d="M104.868 104.868H0V0h104.868v104.868z" fill="#f1511b"/><path d="M220.654 104.868H115.788V0h104.866v104.868z" fill="#80cc28"/><path d="M104.865 220.695H0V115.828h104.865v104.867z" fill="#00adef"/><path d="M220.654 220.695H115.788V115.828h104.866v104.867z" fill="#fbbc09"/></svg>
              </div>
              <div></div>
            </div>
          </div>
          <div id="sidepromote" class="super">
 
          </div>
        </div>
        <!-- 
        <div class="webapi"><div>
        <span>Absolute Orientation Sensor</span>
        <span>Add to Home Screen</span>
        <span>Async Clipboard</span>
        <span>Background Fetch</span>
        <span>Badging</span>
        <span>Cache Storage</span>
        <span>Compression Streams</span>
        <span>Contact Picker</span>
        <span>Content Index</span>
        <span>Declarative Link Capturing</span>
        <span>Device Memory</span>
        <span>Digital Goods</span>
        <span>EyeDropper</span>
        <span>File Handling</span>
        <span>File System Access</span>
        <span>Gamepad</span>
        <span>getInstalledRelatedApps</span>
        <span>Gyroscope</span>
        <span>HapticsDevice</span>
        <span>Launch Handler</span>
        <span>Linear Acceleration Sensor</span>
        <span>Local Font Access</span>
        <span>Media Capabilities</span>
        <span>Media Session</span>
        <span>Navigation Preload</span>
        <span>Notification Triggers</span>
        <span>Payment Request</span>
        <span>Periodic Background Sync</span>
        <span>Persistent Storage</span>
        <span>Pointer Lock</span>
        <span>Protocol Handlers</span>
        <span>Push</span>
        <span>Relative Orientation Sensor</span>
        <span>Screen Wake Lock</span>
        <span>Service Worker</span>
        <span>Shape Detection (Barcodes)</span>
        <span>Shortcuts</span>
        <span>Storage Estimation</span>
        <span>Tabbed Application Mode</span>
        <span>URL Handlers</span>
        <span>VirtualKeyboard</span>
        <span>Web Assembly (Wasm)</span>
        <span>Web Share</span>
        <span>WebBluetooth</span>
        <span>WebGPU</span>
        <span>WebNN</span>
        <span>WebHID</span>
        <span>WebNFC</span>
        <span>WebOTP</span>
        <span>WebSerial</span>
        <span>WebUSB</span>
        <span>Window Controls Overlay</span>
        </div></div>
        -->
      </header>
    `;
  }
}