import * as React from "react"
import styled from "styled-components"
import { Todos } from "./Todos"
import { TodoItem } from "./Todo"

const Pad = styled.div`
  background-color: #fdfd96;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-top: 30px solid darkred;
  position: relative;

  &:before {
    background-color: #ffe4c4;
    display: inline-block;
    width: 5px;
    height: 100%;
    margin-left: 10%;
    content: "";
    position: absolute;
  }

  @media (min-width: 768px) {
    width: 60%;
    min-height: 80%;
  }
`

export class Notepad extends React.Component<{}, NotepadState> {
  constructor(props: any) {
    super(props)

    this.state = {
      todoItems: [],
      newItemText: "",
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value })
  }

  handleClick = () => {
    const { todoItems, newItemText } = this.state

    const newItem: TodoItem = {
      checked: false,
      text: newItemText,
      value: todoItems.length,
    }

    const updatedTodoItems = [...todoItems, newItem]

    this.setState({ todoItems: updatedTodoItems, newItemText: "" })
  }

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { todoItems } = this.state

    const { checked, value } = event.target

    todoItems.find(item => item.value == +value).checked = checked

    this.setState({ todoItems })
  }

  render() {
    const { todoItems, newItemText } = this.state

    return (
      <Pad>
        <Todos
          todoItems={todoItems}
          newItemText={newItemText}
          onInputChange={this.handleInputChange}
          onClick={this.handleClick}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </Pad>
    )
  }
}

interface NotepadState {
  todoItems: TodoItem[]
  newItemText: string
}
