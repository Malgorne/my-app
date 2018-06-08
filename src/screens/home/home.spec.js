import { Home } from 'screens';

/**
 * Unit tests for component/home.
 */
describe('components/home', () => {
  it('should be defined', () => expect(Home).toBeDefined());
  it('should initialize the component', () => expect(new Home()).toBeDefined());

  /**
   * Test a single element.
   * @param {Object} objectTested React element to test.
   * @param {Object} tests expected result.
   */
  const testElement = (objectTested, tests) => {
    expect(objectTested.type).toBe(tests.type);
    for ( const property in tests) {
      if (property !== 'children' && property !== 'type') {
        expect(objectTested.props[property]).toBe(tests[property]);
      }
    }
  };

  /**
   * Test render's semantic.
   * @param {Object} objectTested React element rendered to test.
   * @param {Object} expected expected result.
   */
  const testSemantic = (objectTested, expected) => {
    testElement(objectTested, expected);
    if (expected.children) {
      expect(objectTested.props.children.length).toBe(expected.children.length);
      for (let i = 0; expected.children[i]; i++) {
        testSemantic(objectTested.props.children[i], expected.children[i]);
      }
    }
  };
  it('should respect the semantic', () => {
    const expectedJsx = {
      type: 'div',
      className: 'home',
      children: [{
        type: 'h1'
      }, {
        type: 'p'
      }]
    };
    testSemantic(new Home().render(), expectedJsx);
  });
});
