import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Pulse from '../pulse/Pulse.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Pulse, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
