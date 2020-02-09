import { TodoItem } from "../components/Todo"
import { partition } from "lodash"

export const sortTodoItems = (todosItems: TodoItem[]) => {
  const [unchecked, checked] = partition(
    todosItems,
    (item: TodoItem) => !item.checked
  )

  return [...unchecked, ...checked]
}
