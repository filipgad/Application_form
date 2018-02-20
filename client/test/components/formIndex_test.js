import { renderComponent , expect } from '../test_helper';
import FormIndex from '../../src/components/formIndex';

describe('FormIndex', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(FormIndex);
    });

    it('is render', () => {
        expect(component).to.exist;
    });

    it('has a input', () => {
        expect(component.find('input')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        let error_message;

        beforeEach( () => {
            component.find('input').simulate('change', 'new name');
        });

        it('shows that text in the input', () => {
            expect(component.find('input')).to.have.value('new name');
        });
    });

    describe('not entering text', () => {
        let error_message;

        it('shows error message', () => {
            component.simulate('submit');
            error_message = component.find('span');
            expect(error_message).to.exist;
        });
    });
});