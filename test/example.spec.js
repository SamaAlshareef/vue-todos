import { mount } from '@vue/test-utils'
import Todo from "../src/components/Todo.vue"

// describe('Is vue instance', () => {
//     it('Is vue instance', () => {
//         const wrapper = mount(Todo,{
//             propsData:{
//                 description: "Task 1",
//                 completed:false
//             }
//         })
//         expect(wrapper.isVueInstance()).toBe(true)
//       })
// })

describe('Component', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Todo)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })