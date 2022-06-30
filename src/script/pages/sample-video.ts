import { LitElement, css, html } from 'lit';
import 'lit-video/lit-video.js';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('sample-video')
export class SampleVideo extends LitElement {
  @query('#first-video') video: HTMLVideoElement;

  private async _playLocalVideo() {
    let fileHandle;
    [fileHandle] = await showOpenFilePicker();
    const file = await fileHandle.getFile(); 
    this.video.src = URL.createObjectURL(file)
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
      min-height: calc(100vh - 76px);
    }

    h2 {
      font-size: 1.2rem;
      color: rgba(0, 113, 197, 0.9);
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.5);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
    }

    fluent-card h3 {
      margin: 10px auto;
    }

    fluent-card p {
      margin: 10px auto;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }

    .spam {
      display: none;
    }

    #status {
      display: inline;
    }

    #result {
      display: none;
    }

    .previewv {
      margin: 16px auto;
      text-align: left;
      writing-mode:vertical-rl;
      letter-spacing: 4px;
      font-size: 1.8rem;
    }

    .previewv h3, .previewv h4 {
      margin: 0 auto;
    }

    .previewv h4 {
      margin-left: 16px;
    }

    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      border-bottom: 0px dashed rgba(255, 255, 255, 0.6);;
    }

    a:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      border-bottom: 1px dashed rgba(255, 255, 255, 1);
    }

    #st {
      padding: 0;
    }

    #st {
      color: rgba(255, 255, 255, 0.9);
    }

    #st:hover {
      color: rgba(255, 255, 255, 1.0);
    }

    .tut {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
    }

    .tut a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .tut a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    .w3c {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 199, 253, 0.9);
    }
    .w3c:hover {
      background-color: rgba(0, 199, 253, 1.0);
    }
    
    .imp {
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 113, 197, 0.9);
      align-items: center;
      justify-content: space-around;
    }
    .imp:hover {
      background-color: rgba(0, 113, 197, 1.0);
    }

    .imp .yes {
      fill: rgba(255, 255, 255, 0.9);
    }

    .imp:hover .yes {
      fill: rgba(255, 255, 255, 1.0);
    }

    .imp .no {
      fill: rgba(255, 255, 255, 0.1);
    }

    .imp:hover .no {
      fill: rgba(0, 0, 0, 0.4);
    }

    .des {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 2px 8px;
    }

    .cate, .det {
      display: inline-block;
    }
    .cate .yes, .det .yes, .cate .no, .det .no{
      display: inline-block;
      width: 16px;
      padding: 0 4px;
    }

    .cate {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      display: none;
    }

    .q {
      margin: 16px auto;
    }

    .w3clogo {
      margin-right: 6px;
    }

    .act {
      text-align: center;
    }

    .act button {
      margin-top: 16px;
    }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>文件系统访问 (File System Access) API</h2>
        <fluent-card class="act">
          <lit-video 
            id="first-video"
            intervalreproduction="#t=1,5" 
            option="simple" 
            src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" 
            type="video/mp4">
          </lit-video>
          <button @click="${this._playLocalVideo}">
            播放本地视频
          </button>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/file-system-access/" title="The File System Access API: simplifying access to local files">
              教程：简化对本地文件的访问
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://wicg.github.io/file-system-access/" title="File System Access">File System Access API</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/6284708426022912" title="在 Chromium 86 版本支持">🐡 M86</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome 浏览器"></icon-chr>
              <icon-edg class="yes" title="微软 Edge 浏览器"></icon-edg> <icon-ope class="yes" title="Opera 浏览器"></icon-ope> <icon-viv class="yes" title="Vivaldi 浏览器"></icon-viv>
              <icon-saf class="no" title="Apple Safari 浏览器"></icon-saf> <icon-fir class="no" title="Mozilla Firefox 浏览器"></icon-fir>
              </div>
            </div>
            <div class="des">
              <div class="det">
                <icon-mac class="yes" title="Mac"></icon-mac> <icon-win class="yes" title="Windows"></icon-win> <icon-lin class="yes" title="Linux"></icon-lin> 
              </div>
              <div class="det">
                <icon-and class="no" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `;
  }
}
