import { Home } from '../../components';

describe('components/home', () => {
  it('should be defined', () => expect(Home).toBeDefined());
  it('should initialize the component', () => expect(new Home()).toBeDefined());
  it('should respect the semantic', () => {
    console.log(new Home().render());
    // { '$$typeof': Symbol(react.element),
    //   type: 'div',
    //   key: null,
    //   ref: null,
    //   props: { className: 'home', children: [ [Object], [Object] ] },
    //   _owner: null,
    //   _store: {} }
  });
});
