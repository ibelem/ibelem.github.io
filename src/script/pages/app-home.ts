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
        --install-button-color: #3d1488;
      }

      pwa-install:hover {
        --install-button-color: rgba(61, 20, 136, 0.8);
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

      .hero h1 {
        margin: 0px;
        font-size: 2rem;
        letter-spacing: 4px;
      }
      .hero h2 {
        margin: 0.5rem auto;
        font-size: 1rem;
        letter-spacing: 2px;
      }

      fluent-card {
        padding: 1rem;
        margin-top: 1rem;
      }

      #schedule fluent-card {
        display: flex;
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

      .time {
        width: 200px;
      }

      .divider {
        margin: 0 40px;
      }

      .divider svg {
        width: 20px;
        height: 20px;
        fill: rgba(0, 0, 0, 0.2);
      }

      .title {
        font-weight: 600;
      }

      .details {
        display: flex;
      }

      .avatar {
        width: 60px;
        height: 60px;
        background-size: 60px 60px;
        margin-right: 10px;
      }

      .description {
        align-self: center;
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
    return html`
      <app-header></app-header>

      <div>
        <div class="hero">
          <h2>${this.subtitle}</h2>
          <h1>${this.title}</h1>
          <h2>${this.time}</h2>
        </div>
        <fluent-card> ${this.description} </fluent-card>

        <div id="schedule">
          <fluent-card>
            <div class="time">13:00</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">开幕致辞</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">张琦 / 资深技术总监</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">13:10</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">PWA 愿景</div>
              <div class="details">
                <div class="avatar" id="icon_alex"></div>
                <div class="description">
                  <div class="nametitle">Alex Russell / PWA 之父</div>
                  <div class="team">微软 Edge 团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">13:40</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">微软 PWA</div>
              <div class="details">
                <div class="avatar" id="icon_edwin"></div>
                <div class="description">
                  <div class="nametitle">宋青见 / 首席产品经理</div>
                  <div class="team">微软 Edge · 开发者生态 Bio</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">14:30</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">Taro PWA</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">Joy? / 资深技术总监</div>
                  <div class="team">京东零售集团凹凸实验室</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">15:20</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">腾讯文档 PWA 实践</div>
              <div class="details">
                <div class="avatar" id="icon_harry"></div>
                <div class="description">
                  <div class="nametitle">彭伟宏 / 前端工程师</div>
                  <div class="team">腾讯 PCG 平台与内容事业群</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">16:10</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">新兴 Web 技术助力 PWA</div>
              <div class="details">
                <div class="avatar" id="icon_belem"></div>
                <div class="description">
                  <div class="nametitle">张敏 / 软件技术经理</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">17:00</div>
            <div class="divider">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                />
              </svg>
            </div>
            <div class="topic">
              <div class="title">嘉宾问答</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">张琦 / 资深技术总监</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <div></div>

          <pwa-install title="安装 中国 PWA 开发者日">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
              />
            </svg>
          </pwa-install>

          <app-footer></app-footer>
        </div>
      </div>
    `;
  }
}

