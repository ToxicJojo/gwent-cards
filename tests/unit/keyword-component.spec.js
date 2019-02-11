import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Keyword from '@/components/Keyword.vue'

describe('Keyword Component', () => {
  const wrapper = mount(Keyword, {
    propsData: {
      keyword: {
        raw: '',
      },
    },
  })

  it('renders the correct markup', () => {
    wrapper.setProps({
      keyword: {
        raw: '<#600101>Test:</color> Lore Ipsum',
      },
    })

    expect(wrapper.html()).to.contain('<span style="color: #600101;"> Test: </span> Lore Ipsum')
  })

  it('renders multiple color tags', () => {
    wrapper.setProps({
      keyword: {
        raw: '<#600101>Test1:</color><#121212>Test2:</color>',
      },
    })

    expect(wrapper.html()).to.contain('<span style="color: #600101;"> Test1: </span>')
    expect(wrapper.html()).to.contain('<span style="color: #121212;"> Test2: </span>')
  })
})
