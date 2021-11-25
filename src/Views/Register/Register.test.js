import { shallow } from 'enzyme';
import Register from './Register';

describe("Test cases or Login Component",() => {
    const wrapper = shallow(<Register />)
    it('Should render the component properly',() => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull();
    })
})