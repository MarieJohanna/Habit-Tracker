import React from "react"
import "./task.css"

class Task extends React.Component {

  onClickRemove = () => {
    this.props.onRemove(this.props.index)
  }

  handleDone = () => {
    this.props.onChange(this.props.id)
  }

  render() {
    const categoryClass = `daybox category-${this.props.day}`
    return (
      <div className={categoryClass}>
        <label>
          <input
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleDone} />
          <img className="icon" src={this.props.icon} alt="" />
          <span className="text">{this.props.task}</span>
          <button
            className="remove"
            type="button"
            onClick={this.onClickRemove} />
        </label>

      </div>
    )
  }

}

export default Task
