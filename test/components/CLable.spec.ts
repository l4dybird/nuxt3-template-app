import { mount } from '@vue/test-utils';
import { CLable } from "#components";

describe('CLable', () => {
    test('render component', () => {
        const wrapper = mount(CLable, {            
            props: {
                modelValue: "Hello world",
            },
        });
        expect(wrapper.text()).toBe('Hello world');
    });
});
