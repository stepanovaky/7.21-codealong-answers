import { shallow } from 'enzyme';
import Footer from './Footer';

//second argument, pass a function, inside we will write our test
it('should render customer service phone number', () => {
    const wrapper = shallow(<Footer />)
    //wrapper is convention in documentation
    const span = wrapper.find('span')
    const result = span.text()
    //text method will take the text within a node
    expect(result).toBe('Customer Service: 1-800-555-4444')
})