import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('sample-lfa')
export class SampleLFA extends LitElement {

  @query('#font-select') localfontselector: HTMLSelectElement;
  @query('#preview') preview: HTMLDivElement; 
  @query('#btnrequest') _btnrequest: HTMLButtonElement; 

  // (() => {
  //   let text = '';
  //   document.querySelectorAll('.preview').forEach((preview, i) => {
  //     if (i === 0) {
  //       return (text = preview.textContent);
  //     }
  //     preview.textContent = text;
  //   });
  // })();

  private async _requestPermission() {
    if ('fonts' in navigator) {
      console.log('支持本地字体访问 API');
    } else {
      console.log('不支持本地字体访问 API');
    }

    // try {
    //   const status = await navigator.permissions.request({
    //     name: 'local-fonts',
    //   });
    //   if (status.state !== 'granted') {
    //     throw new Error('Permission to access local fonts not granted.');
    //   }
    // } catch (err) {
    //   if (err.name !== 'TypeError') {
    //     throw err;
    //   }
    // }
  }
  
  private _updateFontSelector(e:any) {
    const target = e.target;
    console.log(`🤖 ${target.id}: Value changed to "${target.value}".`);
    this.preview.style.fontFamily = target.value;
  };
 
  private async _showLocalFonts() {
 
      this.localfontselector.disabled = this.localfontselector.disabled || !('queryLocalFonts' in self);
 
      this.localfontselector.addEventListener('change', this._updateFontSelector);
  }

  async connectedCallback() {
    super.connectedCallback();
    // await this._showLocalFonts();
  }

  static get styles() {
    return css`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
      min-height: calc(100vh - 76px);
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.8);
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
        <h2>本地字体访问 API (Local Font Access API)</h2>
        <fluent-card>
          <h3>前提</h3>
          <p>
            <ul>
              <li>Chrome M103 及更高版本</li>
              <li>设置 <a href="chrome://flags/#font-access">chrome://flags/#font-access</a> 并打开</li>
            </ul>
          </p>
          <h3>使用</h3>
          <button id ="btnrequest" @click="${this._requestPermission}">请求本地字体权限</button>
          <select name="font-select" id="font-select"></select>
          <label for="font-select">本地字体</label>
          <div class="preview">
            The quick brown fox jumps over the lazy dog. Jackdaws love my big sphinx
            of quartz. Pack my box with five dozen liquor jugs.<br>
            中国 PWA 开发者日
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `;
  }
}
