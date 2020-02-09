import * as React from "react"
import * as Enzyme from "enzyme"
import { Todo } from "../Todo"

const onChange = jest.fn()
const createProps = (overrides: any = {}) => ({
  onChange,
  todoItem: {
    checked: true,
    text: "foo",
    value: 1,
  },
  ...overrides,
})

it("given the inputs onChange is called, the prop onChange should be called", () => {
  const shallowWrapper = Enzyme.shallow(<Todo {...createProps()} />)

  shallowWrapper
    .find("input")
    .props()
    .onChange()

  expect(onChange).toBeCalled()
})

it("given the item is checked, span should have checked styles", () => {
  const shallowWrapper = Enzyme.shallow(<Todo {...createProps()} />)

  expect(shallowWrapper.find("span").props().style).toEqual({
    textDecoration: "line-through",
  })
})

it("given the item is not checked, span should not have checked styles", () => {
  const todoItem = {
    checked: false,
    text: "foo",
    value: 1,
  }

  const shallowWrapper = Enzyme.shallow(<Todo {...createProps({ todoItem })} />)

  expect(shallowWrapper.find("span").props().style).toBeUndefined()
})
