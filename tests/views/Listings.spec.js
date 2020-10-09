import { shallowMount } from '@vue/test-utils'
import Listings from '@/views/Listings.vue'

describe('Listings.vue', () => {
  it('Renders at least one Listing', () => {
    const wrapper = shallowMount(Listings)
    const listingsList = wrapper.findAll('.listings li')

    expect(listinglist).toHaveLength.toBe(1)
  })
})