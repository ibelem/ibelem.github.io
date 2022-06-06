import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-2021')
export class App2021 extends LitElement {
  @property({ type: String }) description = `
    随着 PWA 技术引入以及多种 Web 平台能力的增强，PWA 技术的 Web 应用获得了与传统本地应用几乎相同的用户体验并且得到了广泛的应用，也促进了小程序生态的发展。
  `;

  static get styles() {
    return css`
      fluent-card {
        padding: 1rem;
        margin-top: 1rem;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <fluent-card> ${this.description} </fluent-card>

      <div id="schedule">
        <fluent-card> Web 开发的现状与未来（开场介绍） - 张琦 </fluent-card>
        <fluent-card> PWA 在阿里巴巴交易履约业务中的实践 - 林燕燕 </fluent-card>
        <fluent-card> 对构建面向未来的网络应用程序的探索 - 陆远 </fluent-card>
        <fluent-card> Progressively build your PWA - 丛慧君 </fluent-card>
        <fluent-card> 当操作系统遇上 PWA - Diego González </fluent-card>
        <fluent-card> PWAs 的过去、现在和未来 - 元凯宁 </fluent-card>
        <fluent-card> 基于 Web 内核的微信小程序框架实践 - 陈博学 </fluent-card>
      </div>

      <app-footer></app-footer>
    `;
  }
}

