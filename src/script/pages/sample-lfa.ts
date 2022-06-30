import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('sample-lfa')
export class SampleLFA extends LitElement {

  @property({ type: Boolean }) enabled = false;
  @query('#status') elemStatus: HTMLDivElement;
  // @query('#filter-input') elemFilterInput: HTMLInputElement;
  @query('#result') elemResult: HTMLDivElement; 
  @query('#fonts-select') elemFontsSelect: HTMLSelectElement;
  @query('#error-message') elemErrorMessage: HTMLDivElement; 
  @query('#font-info') elemFontInfo: HTMLDivElement;
  @query('#font-info-postscript-name') elemFontInfoPostscriptName: HTMLDivElement;
  @query('#font-info-full-name') elemFontInfoFullName: HTMLDivElement;
  @query('#font-info-style') elemFontInfoStyle: HTMLDivElement;
  @query('#font-info-family') elemFontInfoFamily: HTMLDivElement;
  @query('#font-info-outline-format') elemFontInfoOutlineFormat: HTMLDivElement;
  @property({ type: Map }) fontMap = new Map();

  private async _showStatus() {
    if (!window.queryLocalFonts) {
      console.log('queryLocalFonts() 不存在');
      this.enabled = false;
      return;
    } else {
      this.enabled = true;
      console.log('queryLocalFonts() 可用');
    }
    
    const status = await navigator.permissions.query({ name: "local-fonts" });
    let statusMessage;
    if (status.state === "granted")
      statusMessage = '已授予权限 👍';
    else if (status.state === "prompt")
      statusMessage = '将要请求权限';
    else
      statusMessage = '权限被拒绝 👎';
      
    console.log(statusMessage);
    this.elemStatus.innerHTML = statusMessage
  }

  private async _loadFonts() {
    if (!this.enabled)
    return;
  
    try {
      this._reset();
      
      // Query fonts, with optional postsscript name filter.
      // const optionalFilterArr =
      //     this.elemFilterInput.value.split(',')
      //         .map(str => str.trim())
      //         .filter(str => str !== '');
      let fonts;
      // if (optionalFilterArr.length > 0) {
      //   fonts = await window.queryLocalFonts({postscriptNames: optionalFilterArr});
      // } else {
        fonts = await window.queryLocalFonts();
      // }
      
      // Processed response.     
      if (fonts.length === 0) {
        this.elemErrorMessage.innerText = '无字体返回.';
        return;
      }
      this.elemResult.style.display = 'block';
      this.elemFontsSelect[0] = new Option('-- 选择字体 --', '');
      fonts.forEach((font:any, index:any) => {
        this.fontMap.set(font.postscriptName, font);
        this.elemFontsSelect[index + 1] = new Option(font.fullName, font.postscriptName);
      });
    } catch(e) {
      this.elemErrorMessage.innerText = `无法枚举字体: ${e.message}`;
    } finally {
      this._showStatus();
    }
  }

  private _reset() {
    this.fontMap.clear();  
    while (this.elemFontsSelect.options.length > 0) {                
      this.elemFontsSelect.remove(0);
    }   
    this.elemFontInfo.style.display = 'none';
    this.elemFontInfoPostscriptName.innerText = '';
    this.elemFontInfoFullName.innerText = '';
    this.elemFontInfoStyle.innerText = '';
    this.elemFontInfoFamily.innerText = '';
    this.elemErrorMessage.innerText = '';
  }

  private async _onFontSelected() {
    if (this.elemFontsSelect.value === '') {
      // The default option selected.
      return;
    }
    const selectedFontData = this.fontMap.get(this.elemFontsSelect.value);
    console.log(selectedFontData)
    if (selectedFontData /*&& selectedFontData instanceof FontDta*/) {
      console.log(selectedFontData.postscriptName);

      this.elemFontInfoPostscriptName.innerText = `Postscript Name: ${selectedFontData.postscriptName}`;
      this.elemFontInfoFullName.innerText = `Full Name: ${selectedFontData.fullName}`;
      this.elemFontInfoStyle.innerText = `Style: ${selectedFontData.style}`;
      this.elemFontInfoFamily.innerText = `Family: ${selectedFontData.family}`;
      this.elemFontInfoOutlineFormat.innerText = `Outline Format: ${await this._getFormat(selectedFontData)}`;
      this.elemFontInfo.style.fontFamily = "dynamic-font";    
      this.elemFontInfo.style.display = 'block'; 

      let df = document.querySelector('#df');
      if(df) {
        df.remove();
      }

      let styles = `
      @font-face {
        font-family: "dynamic-font";
        src: local("${selectedFontData.postscriptName}");
      }`;
      let css = document.createElement('style');
        css.id = 'df';
        css.type = 'text/css';
         
        if (css.styleSheet)
          css.styleSheet.cssText = styles;
        else
          css.appendChild(document.createTextNode(styles));
      document.querySelectorAll('head')[0].appendChild(css);    
    } else {
      this.elemErrorMessage.innerText = 'Unable to load font data';
    }
  }

  private async _getFormat(fontdata: { blob: () => any; }) {
    const bytes = await fontdata.blob();
    // const sfntVersion = await bytes.slice(0, 4).text();

    const sfntVersion = new TextDecoder().decode(
      // 只选取我们需要的字节：前 4 个字节是 SFNT
      // 版本信息。
      // 规范：https://docs.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
      await bytes.slice(0, 4).arrayBuffer(),
    );

    let outlineFormat = "UNKNOWN";
    switch (sfntVersion) {
      case '\x00\x01\x00\x00':
      case 'true':
      case 'typ1':
        outlineFormat = "truetype";
        break;
      case 'OTTO':
        outlineFormat = "cff";
        break;
    }
    return outlineFormat;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this._showStatus();
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

    fluent-card button.btn {
      border: 1px solid rgba(rgba(0, 113, 197, 0.9);
      background: rgba(255, 255, 255, 0.9);
      color: #3D3D3D;
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
        <h2>本地字体访问 (Local Font Access) API</h2>
        <fluent-card>
          <div class="content">
            <div>
              <div class="status">
                状态: <div id="status"></div>
              </div>
              <div class="q">
              <button @click="${this._loadFonts}">
                枚举本地字体
              </button>
              <select class="select" id="fonts-select" @change="${this._onFontSelected}">
              </select>
              <!--
              <span>with optional filter</span>
              <input class="input" type="text" id="filter-input" placeholder="Type in font names separated by comma(s)...">
              -->
              </div>     
            </div>
            <div id="error-message" class="error"></div>
            <div id="result" class="result">
              <div id="font-info" class="font-info">
                <div id="font-info-postscript-name" class="font-info-item"></div>
                <div id="font-info-full-name" class="font-info-item"></div>
                <div id="font-info-style" class="font-info-item"></div>
                <div id="font-info-family" class="font-info-item"></div>
                <div id="font-info-outline-format" class="font-info-item"></div>
                <div class="previewv" contenteditable="true">
                  <h3>滕王阁序</h3>
                  <h4>王勃</h4>
                  <div>
                    云销雨霁，<br>彩彻区明。<br>落霞与孤鹜齐飞，<br>秋水共长天一色。
                  </div>  
                </div>
                <div class="preview" contenteditable="true">
                  <div>
                    中国 PWA 开发者日 PWA 的特点
                    可发现 (Discoverable) 
                    可安装 (Installable) 
                    可链接 (Linkable) 
                    独立于网络 (Network independent) 
                    渐进式 (Progressive) 
                    可重入 (Re-engageable) 
                    响应式 (Responsive) 
                    安全 (Safe) 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fluent-card>
        <fluent-card>
          启用 chrome://flags/#font-access
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/local-fonts/" title="Use advanced typography with local fonts">
              教程：本地字体的高级排版
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://wicg.github.io/local-font-access/" title="Local Font Access API">Local Font Access API</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/6234451761692672" title="在 Chromium 103 版本支持">🐡 M103</a>
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
