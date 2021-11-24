import { shallow } from "enzyme";
import { describe, expect, test, it } from '@jest/globals';
import Demographics from "./Demographics";

describe('Test Cases for Demographics component',()=>{
    const onClickHandler = jest.fn();
    const demographics = shallow(<Demographics onClick={onClickHandler} />);

    it('should render properly', () => {
        expect(demographics.getElements()).toMatchSnapshot()
    })

    it('should have one AvField[type="textarea"] element', () => {
        const input = demographics.find('AvField[type="textarea"]').length;
        expect(input).toEqual(4)

    })
    it('validates model on button click', () => {
        it('should have button for update the form', () => {
            const buttonElement = demographics.find("button");
            buttonElement.simulate("click");
            expect(onClickHandler).toBeCalledTimes(1);
        })
      });



})