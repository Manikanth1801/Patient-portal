import { shallow } from 'enzyme';
import UserVerification from './UserVerification';

describe("Test cases or Login Component",() => {
    const wrapper = shallow(<UserVerification />)
    it('Should render the component properly',() => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull();
    })
})