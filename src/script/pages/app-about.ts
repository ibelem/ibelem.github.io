import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css`
    .about {
      padding: 0 16px;
      margin: 2rem 0 0rem 0;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
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
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <h2>关于中国 PWA 开发者日</h2>
        <fluent-card>
          <h3>为什么要参加中国 PWA 开发者日？</h3>
          <p>中国 PWA 开发者日的使命是帮助您使用渐进式 Web 应用（PWA）取得成功。
          我们创建此活动是为了帮助传播有关 PWA 的技术及实践，包括如何成功构建它们以及如何将它们集成到您现有的 Web 应用中。我们不专注于推销特定的 Web 框架或技术栈。</p>
          <p>该活动是免费的！</p>
        </fluent-card>
        <fluent-card>
          <h3>谁是组织方？</h3>
          <p>中国 PWA 开发者日是来自参与创建 PWA 技术的几家不同公司的人员之间的合作。</p>
          <p>2021年主办方：英特尔 鼎道智联<br>
          2022年主办方：英特尔 微软</p>
          <p>我们的指导委员会是：</p>
          </fluent-card>
      </div>
      <app-footer></app-footer>
    `;
  }
}
