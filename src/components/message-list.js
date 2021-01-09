import React from 'react'
import Button from '@material-ui/core/Button'
import Api from '../api'
import Message from './message'

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    }, () => {
      // Included to support initial direction. Please remove upon completion
    })
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }
  clear = () => {
    this.setState({
      messages: []
    })
  }

  render() {
    const isApiStarted = this.api.isStarted()
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.handleClick}
        >
          {isApiStarted ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button onClick={this.clear} style={{color:'red', margin:'10px'}}>Clear</Button>
        <Message messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageList
