import * as React from "react"
import styled from "styled-components"
import { TodoItem, Todo } from "./Todo"
import { sortTodoItems } from "../helpers/sortTodoItems"

const Row = styled.li`
  min-height: 40px;
  margin-bottom: 0;
  border-bottom: 1px solid blue;
  padding-left: 15%;
  line-height: 40px;

  &:last-of-type {
    border: none;
  }
`

Row.displayName = "Row"

export const Todos = ({
  todoItems,
  newItemText,
  onInputChange,
  onClick,
  onCheckboxChange,
}: TodosProps) => {
  const extraLinesNeeded = todoItems.length > 20 ? 0 : 20 - todoItems.length

  const blankLines = Array(extraLinesNeeded).fill(null)

  const sortedTodoItems = sortTodoItems(todoItems)
  return (
    <ul style={{ margin: 0, listStyleType: "none" }}>
      <Row>
        <input
          value={newItemText}
          onChange={onInputChange}
          style={{ height: "30px", width: "60%" }}
          type="text"
        />
        <button
          onClick={onClick}
          style={{ height: "30px", marginLeft: "5%", lineHeight: "25px" }}
        >
          add
        </button>
      </Row>
      {[...sortedTodoItems, ...blankLines].map((item, i) => (
        <Row key={i}>
          {!!item && <Todo onChange={onCheckboxChange} todoItem={item} />}
        </Row>
      ))}
    </ul>
  )
}

interface TodosProps {
  todoItems: TodoItem[]
  newItemText: string
  onInputChange(event: React.ChangeEvent): void
  onCheckboxChange(event: React.ChangeEvent): void
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
