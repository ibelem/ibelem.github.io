import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-nav')
export class AppNav extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`

      
    #menuToggle
    {
      display: block;
      position: relative;
      top: 0px;
      right: 8px;
      height: 18px;
      width: 18px;
      
      z-index: 1;
      
      -webkit-user-select: none;
      user-select: none;
    }

    #menuToggle input
    {
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: -7px;
      left: -5px;
      
      cursor: pointer;
      
      opacity: 0;
      z-index: 2;
      
      -webkit-touch-callout: none;
    }

    #menuToggle span
    {
      display: block;
      width: 24px;
      height: 3px;
      margin-bottom: 4px;
      position: relative;
      
      background: rgba(0,113,197, 0.9);
      border-radius: 3px;
      
      z-index: 1;
      
      transform-origin: 4px 0px;
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    #menuToggle:hover span {
      background: rgba(0,113,197, 1);
    }

    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(0px, 0px);
      background: rgba(0,113,197, 0.9);
    }

    #menuToggle:hover input:checked ~ span
    {
      background: rgba(0,113,197, 1);
    }

    #menuToggle input:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.1, 0.1);
    }

    #menuToggle input:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(1px, 0px);
    }

    #menu
    {
      position: fixed;
      top: 0px;
      width: 30vw;
      height: 100vh;
      margin: 0px 0px 0px -100vw;
      text-align: center;
      
      background: rgba(255, 255, 255, 0.98);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      
      transform-origin: 0% 0%;
      transform: translate(-100%, 0);
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 1px 9px -2px rgba(0,0,0,0.75);
      z-index: 1;
    }

    #menu div {
      display: block;
      width: 100%;
      padding: 1rem 0px;
    }

    #menu div:hover
    {
      background: rgba(0,113,197, 1);
    }

    #menu div:hover fluent-anchor, #menu .promote:hover div {
      color: #fff;
    }

    #menu fluent-anchor {
      font-size: clamp(18px, 3vw, 32px);
      transition: color 0.3s ease;
      color: rgba(0,113,197, 1);
      margin: 0px auto;
    }

    #menuToggle input:checked ~ #menu
    {
      transform: translate(3vw, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    @media only screen and (max-width: 640px) {
      #menu
      {
        width: 62vw;
      }
      #menuToggle input:checked ~ #menu
      {
        transform: translate(10.5vw, 0);
      }
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

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div id="menu"> 
          <div><fluent-anchor href="/2022" appearance="primary">2022</fluent-anchor></div>
          <div><fluent-anchor href="/2021" appearance="primary">2021</fluent-anchor></div>
          <div><fluent-anchor href="/tutorial" appearance="primary">教程</fluent-anchor></div>
          <div><fluent-anchor href="/" appearance="primary">示例</fluent-anchor></div>
          <div class="promote">
            <div>推荐访问</div>
            <fluent-anchor href="https://pwasummit.org/" appearance="primary">
              PWA Summit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
            </fluent-anchor>
            <div>全球 PWA 峰会 2022 亦将于 10 月举行</div>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}
