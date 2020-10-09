import { mount } from '@vue/test-utils'
import Listings from '@/views/Listings.vue'

describe('Listings.vue', () => {
  it('Renders at least one Listing', () => {
    const wrapper = mount(Listings)
    const listArray = wrapper.findAll('.listing')
    console.log(listArray.at(0).html())
    expect(listArray.length).toBeGreaterThan(0)
  })
})