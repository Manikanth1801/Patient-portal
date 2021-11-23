import { shallow } from "enzyme";
import { describe, expect, test, it } from '@jest/globals';
import Profile from './Profile'
import pencil from '../../../Assets/Images/pencil.svg'


describe("Test cases for Profile component", () => {
    const onClickHandler = jest.fn();
    const profile = shallow(<Profile onClick={onClickHandler} />);

    it('should render properly', () => {
        expect(profile.getElements()).toMatchSnapshot()
    })



    it('should have one AvField[type="date"] element', () => {
        const input = profile.find('AvField[type="date"]').length;
        expect(input).toEqual(1)

    })


    it('should have one AvField[type="select"] element', () => {
        const input = profile.find('AvField[type="select"]').length;
        expect(input).toEqual(4)

    })

    it('should have button for update the form', () => {
        const buttonElement = profile.find("button");
        buttonElement.simulate("click");
        expect(onClickHandler).toBeCalledTimes(0);
    })
    it('renders an image', () => {
      

        expect(profile.find("img").prop("src")).toEqual(pencil);
      })
        // const editElement = profile.find("img");
        // expect(profile.state('clicked')).toEqual(false);
        // editElement.simulate("click");
        // expect(profile.state("clicked")).toEqual(true);
    
    });


