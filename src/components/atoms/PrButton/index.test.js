import { mount } from '@vue/test-utils'
import PrButton from '.'

describe('Atom - PrButton', () =>
  test("Tag should be <a> if href prop is set", () => {
    const wrapper = mount(PrButton, {
      propsData: { href: "http://google.com" }
    });

    expect(wrapper.contains("a")).toBe(true);
    expect(wrapper.attributes().href).toBe(
      "http://google.com"
    )
  })
})
