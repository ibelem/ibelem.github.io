import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media (min-width: 1024px) {
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media(prefers-color-scheme: light) {
      }

      @media(prefers-color-scheme: dark) {
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: '中国 PWA 开发者日',
        text: '中国 PWA 开发者日',
        url: 'https://ibelem.github.com/pwa-developer-day',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>
  
            ${'share' in navigator
              ? html`<fluent-button appearance="primary" @click="${this.share}"
                  >分享 中国 PWA 开发者日</fluent-button
                >`
              : null}
          </fluent-card>

          <fluent-skeleton
          style="
              border-radius: 4px;
              width: 500px;
              height: 250px;
          "
          shape="rect"
          shimmer
      >
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="2.696 5.855 112.526 24.31" width="580" height="122">
      <defs>
        <path d="M64.79 7.02c.99 0 1.79.8 1.79 1.79v8.99c0 .99-.8 1.79-1.79 1.79H41.66c-.99 0-1.8-.8-1.8-1.79V8.81c0-.99.81-1.79 1.8-1.79h23.13Z" id="aUJMA4bMI"/>
        <path d="M29.98 27.82c0 1.3-1.05 2.35-2.34 2.35a2.345 2.345 0 0 1 0-4.69c1.29 0 2.34 1.05 2.34 2.34Z" id="m1AZcqfjwA"/>
        <path d="m22.48 13.75.43.63.15.77-.15.77-.43.63-.63.43-.77.15-.77-.15-.63-.43-.42-.63-.16-.77.16-.77.42-.63.63-.42.77-.16.77.16.63.42Zm-2.19.61-.25.36-.08.44.08.44.25.36.36.24.44.09.44-.09.36-.24.24-.36.09-.44-.09-.44-.24-.36-.36-.25-.44-.08-.44.08-.36.25Z" id="a99wrsIm5"/>
        <path d="M21.08 21.31c0 1.3-1.05 2.34-2.34 2.34-1.29 0-2.34-1.04-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34 1.29 0 2.34 1.05 2.34 2.34Z" id="b2fOGzz6El"/>
        <path d="m36.24 20.16.51.74.18.92-.18.91-.51.74-.74.5-.91.19-.91-.19-.75-.5-.5-.74-.18-.91.18-.92.5-.74.75-.5.91-.19.91.19.74.5Zm-2.59.72-.29.42-.1.52.1.52.29.43.43.28.52.11.52-.11.42-.28.29-.43.1-.52-.1-.52-.29-.42-.42-.29-.52-.11-.52.11-.43.29Z" id="hfanhELPS"/>
        <path d="M17.01 11.16c0 1.3-1.05 2.34-2.34 2.34-1.29 0-2.34-1.04-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34 1.29 0 2.34 1.05 2.34 2.34Z" id="g3EBuH3JyM"/>
        <path d="m24.08 7.44.31.46.11.56-.11.56-.31.46-.46.31-.56.11-.56-.11-.46-.31-.31-.46-.11-.56.11-.56.31-.46.46-.31.56-.11.56.11.46.31Zm-1.6.44-.17.27-.07.32.07.32.17.26.27.17.32.07.32-.07.26-.17.17-.26.07-.32-.07-.32-.17-.27-.26-.17-.32-.07-.32.07-.27.17Z" id="a3SqsBDOg"/>
        <path d="m28.48 20.8.31.45.11.57-.11.56-.31.45-.46.31-.56.12-.56-.12-.46-.31-.31-.45-.11-.56.11-.57.31-.45.46-.31.56-.12.56.12.46.31Zm-1.6.44-.17.26-.07.32.07.32.17.26.26.18.32.06.32-.06.27-.18.17-.26.07-.32-.07-.32-.17-.26-.27-.18-.32-.06-.32.06-.26.18Z" id="i15BKTlpWe"/>
        <path d="m9.79 12.15.31.46.11.56-.11.56-.31.46-.46.31-.56.11-.56-.11-.46-.31-.31-.46-.11-.56.11-.56.31-.46.46-.31.56-.11.56.11.46.31Zm-1.6.44-.17.26-.07.32.07.32.17.27.26.17.32.07.32-.07.27-.17.17-.27.07-.32-.07-.32-.17-.26-.27-.17-.32-.07-.32.07-.26.17Z" id="a7ILsoRCN"/>
        <path d="m34.24 25.9.31.46.11.56-.11.56-.31.46-.46.31-.56.11-.56-.11-.46-.31-.3-.46-.12-.56.12-.56.3-.46.46-.3.56-.12.56.12.46.3Zm-1.59.45-.18.26-.07.32.07.32.18.26.26.18.32.06.32-.06.26-.18.18-.26.06-.32-.06-.32-.18-.26-.26-.18-.32-.07-.32.07-.26.18Z" id="e1SP5zBvIe"/>
        <path d="M31.06 13.17c0 1.29-1.05 2.34-2.34 2.34-1.29 0-2.34-1.05-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34 1.29 0 2.34 1.05 2.34 2.34Z" id="bfBySayYv"/>
        <path d="m21.74 25.9.31.46.11.56-.11.56-.31.46-.46.31-.56.11-.56-.11-.46-.31-.31-.46-.11-.56.11-.56.31-.46.46-.3.56-.12.56.12.46.3Zm-1.6.45-.17.26-.07.32.07.32.17.26.26.18.32.06.32-.06.27-.18.17-.26.07-.32-.07-.32-.17-.26-.27-.18-.32-.07-.32.07-.26.18Z" id="b1cdUukPld"/>
        <path d="m14.97 16.11.31.46.11.56-.11.56-.31.46-.46.31-.56.11-.56-.11-.46-.31-.31-.46-.11-.56.11-.56.31-.46.46-.31.56-.11.56.11.46.31Zm-1.6.44-.17.27-.07.32.07.32.17.26.27.17.32.07.32-.07.26-.17.17-.26.07-.32-.07-.32-.17-.27-.26-.17-.32-.07-.32.07-.27.17Z" id="eK2gZrDmt"/>
        <path d="M7.38 17.85c0 1.3-1.05 2.34-2.34 2.34a2.33 2.33 0 0 1-2.34-2.34c0-1.29 1.04-2.34 2.34-2.34 1.29 0 2.34 1.05 2.34 2.34Z" id="d7YHIEVZ2"/>
        <path d="m7.85 14.43-2.54 3.55" id="a17Or6DtLG"/>
        <path d="m13.44 16.2-3.96-2.5" id="j4QWBAJZw"/>
        <path d="m11.46 23.78 1.98-5.19" id="bhjRTNplq"/>
        <path d="m16.57 20.69-9.38-2.71" id="cUv46xKpz"/>
        <path d="m19.81 15.74-5.02 1.07" id="cf4JQTqTn"/>
        <path d="m26.24 13.7-3.14.73" id="a2mhrsE0Kx"/>
        <path d="m21.75 8.99-4.78 1.38" id="c5ckw7gUg"/>
        <path d="m21.75 13.13.74-3.45" id="bNq0DnU5M"/>
        <path d="m27.39 20.69.48-4.95" id="b1AsRfq0o"/>
        <path d="m21.75 26.3 4.49-3.67" id="a5Fonrsblc"/>
        <path d="m26.24 21.19-4.12-4.38" id="a6xLjyPrwa"/>
        <path d="M32.76 22.02H28.9" id="feqWMbnGx"/>
        <path d="m17.88 19.33-2.29-6.2" id="b877fx0LIT"/>
        <path d="m25.86 26.92-5.08-4.29" id="aHbsBwJX"/>
        <path d="m32.04 27.54-1.93.92" id="b7wp4SAvn"/>
        <path d="m33.52 26.3.87-2.52" id="c4gBuIj7W"/>
        <path d="M35.36 30.17 33.98 28" id="g75dLLAPY"/>
        <path d="m33.96 19.91-3.5-4.96" id="b9EtFKjjmd"/>
        <text id="c5jvJP04B" x="63.6" y="121.55" font-size="10" font-family="Poppins" alignment-baseline="before-edge" transform="translate(-66.796 -104.194)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
          <tspan x="84.8" dy="0em">
            neural network
          </tspan>
        </text>
        <text id="a1vYTZuYgt" x="138.5" y="89" font-size="10" font-family="Poppins" alignment-baseline="before-edge" transform="translate(-136.17 -82.545)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge">
          <tspan x="154.8" dy="0em">
            web
          </tspan>
        </text>
        <style>
          @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400&amp;display=swap);
        </style>
      </defs>
      <use xlink:href="#aUJMA4bMI" fill="#61bafb"/>
      <use xlink:href="#c5jvJP04B" fill="#4777c0" id="c5WataF5oH"/>
      <use xlink:href="#a1vYTZuYgt" fill="#fff" id="flQxJVdR"/>
      <use xlink:href="#a99wrsIm5" fill="#61bafb"/>
      <use xlink:href="#b2fOGzz6El" fill="#4777c0"/>
      <use xlink:href="#hfanhELPS" fill="#61bafb"/>
      <use xlink:href="#g3EBuH3JyM" fill="#4777c0"/>
      <use xlink:href="#a3SqsBDOg" fill="#61bafb"/>
      <use xlink:href="#i15BKTlpWe" fill="#61bafb"/>
      <use xlink:href="#a7ILsoRCN" fill="#61bafb"/>
      <use xlink:href="#e1SP5zBvIe" fill="#61bafb"/>
      <use xlink:href="#bfBySayYv" fill="#4777c0"/>
      <use xlink:href="#b1cdUukPld" fill="#61bafb"/>
      <use xlink:href="#eK2gZrDmt" fill="#61bafb"/>
      <use xlink:href="#a17Or6DtLG" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#d7YHIEVZ2" fill="#4777c0"/>
      <use xlink:href="#j4QWBAJZw" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#bhjRTNplq" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#cUv46xKpz" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#a86zQgXCB" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#cf4JQTqTn" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#a2mhrsE0Kx" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#bmGTT9MeB" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#c5ckw7gUg" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#bNq0DnU5M" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#b1AsRfq0o" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#a5Fonrsblc" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#a6xLjyPrwa" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#feqWMbnGx" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#b877fx0LIT" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#aHbsBwJX" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#m1AZcqfjwA" fill="#4777c0"/>
      <use xlink:href="#b7wp4SAvn" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#c1lg9Iyd5S" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#b531Gp81NK" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#c4gBuIj7W" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#g75dLLAPY" fill-opacity="0" stroke="#61bafb"/>
      <use xlink:href="#b9EtFKjjmd" fill-opacity="0" stroke="#61bafb"/>
    </svg>
    
      </fluent-skeleton>

          <ul>
            <li><fluent-anchor href="/2021" appearance="accent">2021</fluent-anchor></li>
            <li><fluent-anchor href="/mp" appearance="accent">媒体播放器</fluent-anchor></li>
            <li><fluent-anchor href="/about" appearance="accent">Navigate to About</fluent-anchor></li>
          </ul>
 
        </div>

        <pwa-install>安装 中国 PWA 开发者日</pwa-install>
      </div>
    `;
  }
}
