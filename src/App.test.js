import App from './App';
import { shallow } from 'enzyme';
//now need to import footer and ticket
import Footer from './components/Footer';
import Ticket from './components/Ticket'

describe('app', () => {
  it('should render Ticket and Footer', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);
    const ticket = wrapper.find(Ticket);
    expect(footer.exists()).toBe(true)
    expect(ticket.exists()).toBe(true)
})
})

