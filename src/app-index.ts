import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { registerSW } from 'virtual:pwa-register';

import './script/pages/app-home';
import './script/components/header';
import './script/components/nav';
import './script/components/footer';
import './script/components/footer-home';
import './styles/global.css';

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: '/2022',
            component: 'app-2022',
            action: async () => {
              await import('./script/pages/app-2022.js');
            },
          },
          {
            path: '/2021',
            component: 'app-2021',
            action: async () => {
              await import('./script/pages/app-2021.js');
            },
          },
          {
            path: '/mp',
            component: 'app-mediaplayer',
            action: async () => {
              await import('./script/pages/app-mediaplayer.js');
            },
          },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              await import('./script/pages/app-about.js');
            },
          },
          {
            path: '/news',
            component: 'app-news',
            action: async () => {
              await import('./script/pages/app-news.js');
            },
          },
          {
            path: '/mobile',
            component: 'app-mobile',
            action: async () => {
              await import('./script/pages/app-mobile.js');
            },
          },
          {
            path: '/tutorial',
            component: 'app-tutorial',
            action: async () => {
              await import('./script/pages/app-tutorial.js');
            },
          },
          {
            path: '/code-of-conduct',
            component: 'app-coc',
            action: async () => {
              await import('./script/pages/app-coc.js');
            },
          },
          {
            path: '/privacy',
            component: 'app-privacy',
            action: async () => {
              await import('./script/pages/app-privacy.js');
            },
          },
        ],
      } as any,
    ]);
    registerSW({ immediate: true });
  }

  render() {
    return html`
      <main id="routerOutlet">
      </main>
    `;
  }
}
