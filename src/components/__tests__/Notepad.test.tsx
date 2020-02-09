import * as React from "react"
import * as Enzyme from "enzyme"
import { Notepad } from "../Notepad"

it("given an event is passed into handleInputChange, the Todos components newItemText prop should be updated", () => {
  const shallowWrapper = Enzyme.shallow(<Notepad />, {
    disableLifecyleMethods: true,
  })

  const event = {
    target: {
      value: "foo",
    },
  }
  shallowWrapper
    .find("Todos")
    .props()
    .onInputChange(event)

  expect(shallowWrapper.find("Todos").props().newItemText).toBe("foo")
})

it("given an handleClick is called, expect a new todoItem to be added and newItemText should be an empty string", () => {
  const shallowWrapper = Enzyme.shallow(<Notepad />, {
    disableLifecyleMethods: true,
  })

  const event = {
    target: {
      value: "foo",
    },
  }

  shallowWrapper
    .find("Todos")
    .props()
    .onInputChange(event)

  shallowWrapper
    .find("Todos")
    .props()
    .onClick()

  const todoItems = [
    {
      value: 0,
      checked: false,
      text: "foo",
    },
  ]

  expect(shallowWrapper.find("Todos").props().todoItems).toEqual(todoItems)
  expect(shallowWrapper.find("Todos").props().newItemText).toBe("")
})

it("given an onCheckboxChange is called, expect the todoItems checked property to be changed", () => {
  const shallowWrapper = Enzyme.shallow(<Notepad />, {
    disableLifecyleMethods: true,
  })

  const inputEvent = {
    target: {
      value: "foo",
    },
  }

  shallowWrapper
    .find("Todos")
    .props()
    .onInputChange(inputEvent)

  shallowWrapper
    .find("Todos")
    .props()
    .onClick()

  const checkboxEvent = {
    target: {
      value: "0",
      checked: true,
    },
  }

  shallowWrapper
    .find("Todos")
    .props()
    .onCheckboxChange(checkboxEvent)

  const todoItems = [
    {
      value: 0,
      checked: true,
      text: "foo",
    },
  ]

  expect(shallowWrapper.find("Todos").props().todoItems).toEqual(todoItems)
})
