import * as React from "react"
import * as Enzyme from "enzyme"
import { Todos } from "../Todos"

const todoItems = [
  {
    checked: false,
    text: "foo",
    value: 1,
  },
]

const onInputChange = jest.fn()
const onClick = jest.fn()
const onCheckboxChange = jest.fn()
const createProps = (overrides: any = {}) => ({
  todoItems,
  newItemText: "",
  onInputChange,
  onClick,
  onCheckboxChange,
  ...overrides,
})

it("given less than 20 todoItems, expect there to be one todo and 21 total Rows", () => {
  const shallowWrapper = Enzyme.shallow(<Todos {...createProps()} />)

  expect(shallowWrapper.find("Row")).toHaveLength(21)
  expect(shallowWrapper.find("Todo")).toHaveLength(1)
})

it("given over 20 todoItems, expect there to be the same number of todos and 1 extra row ", () => {
  const todoItem = {
    checked: false,
    text: "foo",
    value: 1,
  }

  const shallowWrapper = Enzyme.shallow(
    <Todos
      {...createProps({
        todoItems: Array(25).fill(todoItem),
      })}
    />
  )

  expect(shallowWrapper.find("Row")).toHaveLength(26)
  expect(shallowWrapper.find("Todo")).toHaveLength(25)
})

it("given the inputs onChange is called, the prop onInputChange should be called", () => {
  const shallowWrapper = Enzyme.shallow(<Todos {...createProps()} />)

  shallowWrapper
    .find("input")
    .props()
    .onChange()

  expect(onInputChange).toBeCalled()
})

it("given the buttons onClick is called, the prop onClick should be called", () => {
  const shallowWrapper = Enzyme.shallow(<Todos {...createProps()} />)

  shallowWrapper
    .find("button")
    .props()
    .onClick()

  expect(onClick).toBeCalled()
})

it("given a Todo`s onChange is called, the prop onCheckboxChange should be called", () => {
  const shallowWrapper = Enzyme.shallow(<Todos {...createProps()} />)

  shallowWrapper
    .find("Todo")
    .props()
    .onChange()

  expect(onCheckboxChange).toBeCalled()
})
