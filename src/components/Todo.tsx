import * as React from "react"

export const Todo = ({ todoItem, onChange }: TodoProps) => {
  const { value, checked, text } = todoItem

  const todoTextStyle = checked ? { textDecoration: "line-through" } : undefined

  return (
    <label>
      <input
        style={{ marginRight: "5%" }}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span style={todoTextStyle}>{text}</span>
    </label>
  )
}

interface TodoProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  todoItem: TodoItem
}

export type TodoItem = { text: string; value: number; checked: boolean }
