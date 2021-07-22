import { shallow } from 'enzyme';
import Ticket from './Ticket';

it('should increment total when clicking button', () => {
    const wrapper = shallow(<Ticket />);
    const total1 = wrapper.find('h2.total').text();
    //to find by classname, html.classname
    expect(total1).toBe('0')

    //NOW TO CLICK THE button
    const button = wrapper.find('button')
    //simulate a click
    button.simulate('click'); //for fun do more than one simulate
    //need to target the number again
    const total2 = wrapper.find('h2.total').text();
    expect(total2).toBe('1')
})

it('should render ticket name in title', () => {
    const wrapper = shallow(<Ticket name="NHL Tickets" />)
    const title = wrapper.find('h2.title').text();

    expect(title).toBe('NHL Tickets')
})