import { shallow } from 'enzyme';
import Login from './Login';

describe("Test cases or Login Component",() => {
    const wrapper = shallow(<Login />)
    it('Should render the component properly',() => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull();
    })
})