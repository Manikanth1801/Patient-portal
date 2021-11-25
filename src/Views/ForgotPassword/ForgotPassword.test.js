import { shallow } from 'enzyme';
import ForgotPassword from './ForgotPassword';

describe("Test cases or Login Component",() => {
    const wrapper = shallow(<ForgotPassword />)
    it('Should render the component properly',() => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull();
    })
})