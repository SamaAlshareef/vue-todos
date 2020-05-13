//import shallow from '@vue/test-utils'
//import TodoList from '../src/components/TodoList.vue'
//const shallow = require('@vue/test-utils');
const TodoList =require('../src/components/TodoList.vue');

describe('Check Todo List is initialised', ()=> {

  it('testing main component',()=>{
    const wrapper = shallow(TodoList)
    const msg = wrapper.find('h1').text();
    expect(msg).toBe('hi')
  })
 
})