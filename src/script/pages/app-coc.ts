import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-coc')
export class AppCoC extends LitElement {
  static get styles() {
    return css`
    .spam {
      display: none;
    }

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

    fluent-card svg {
      width: 16px;
      height: 16px;
      margin-bottom: -2px;
      fill: #3D3D3D;
    }

    a {
      color: rgba(0,113,197, 0.9);
      text-decoration: none;
    }

    a:hover {
      color: rgba(0,113,197, 1.0);
      border-bottom: 1px dashed rgba(0,113,197, 1);
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
        <h2>行为准则</h2>
        <fluent-card>
          <h3>中国 PWA 开发者日旨在成为一个包容并欢迎所有人的活动</h3>
          <p> 
          中国 PWA 开发者日要求尊重每一个人，并互相尊重。每个人都有权参与并享受我们的分享，而不必担心骚扰、歧视或傲慢。</p>
          <p>中国 PWA 开发者日不会容忍任何原因的歧视或骚扰，包括但不限于以下特征：种族、肤色、宗教（包括宗教服饰和仪容仪表）、性别、性取向、性别认同或表达、国家出身、血统、精神或身体残疾、医疗状况、怀孕、军人或退伍军人身份、遗传信息、公民身份和婚姻状况。</p>
          <p>我们希望参加我们活动的每个人都避免发表不恰当或冒犯性的言论（诽谤、辱骂等），或从事针对他人的不恰当或冒犯的行为。</p>
          <p>任何违反这些规则的人，包括但不限于与会者、赞助商和组织者，都可能被会议组织者开除会议。</p>
          </fluent-card>
        <fluent-card>
          <h3>行为准则适用于谁？它适用于什么地方？</h3>
          <p>行为准则适用于所有人，包括与会者、赞助商、演讲者和组织者。它适用于任何中国 PWA 开发者日主办的线上或线下活动，包括代码存储库和宣传推广渠道（微信分享、微博分享、直播平台、活动聊天等）。不容忍任何形式的不当行为或骚扰。
          </p>
          </fluent-card>
          <fluent-card>
          <h3>报告行为准则问题</h3>
          <p>如果您需要任何形式的帮助或者报告不良情况，请联系我们：
          </p>
          <p>电子邮件: pwadeveloperday<span class="spam">spam</span>@<span class="spam">spam</span>outlook<span class="spam">spam</span>.com</p>
          <p>本行为准则深受 <a href="https://pwasummit.org/code-of-conduct/">PWASummit 行为准则</a> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
          的影响。</p>
          </fluent-card>
          <app-footer></app-footer>
      </div>
    `;
  }
}
