import { TodoItem } from "../../components/Todo"
import { sortTodoItems } from "../sortTodoItems"

it("given an array of todoItems, expect checked todos to be moved to the end", () => {
  const todoItems: TodoItem[] = [
    {
      checked: true,
      text: "foo",
      value: 1,
    },
    {
      checked: false,
      text: "foo",
      value: 1,
    },
  ]

  expect(sortTodoItems(todoItems)[0].checked).toBeFalsy()
  expect(sortTodoItems(todoItems)[1].checked).toBeTruthy()
})
