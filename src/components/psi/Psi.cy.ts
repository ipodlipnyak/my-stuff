import Psi from './Psi.vue';
import { circlesList } from './psiTailed';

describe('<Psi />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.viewport(550, 900);
    cy.mount(Psi, { props: {
      //
    }});
  })
});

describe('<Psi preset="tail" />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.viewport(550, 900);
    cy.mount(Psi, { props: {
      preset: 'tail'
    }});
  })
});

describe('<Psi circles-list="[{cy: `5`, cx: `5`, r: `5`}]" />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.viewport(550, 900);
    cy.mount(Psi, { props: {
      circlesList: [{
        cy: '50',
        cx: '50',
        r: '5'
      }],
    }});
  })
});
