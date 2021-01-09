import React from 'react';

const Message = ({messages}) => (
    messages.map(message => {
            if(message.priority === 1){
            return <div style={{backgroundColor: '#F56236', margin:'10px', padding:'10px'}}>{message.message}</div>
            }else if(message.priority === 2){
            return <div style={{backgroundColor: '#FCE788', margin:'10px', padding:'10px'}}>{message.message}</div>
            } else{
            return <div style={{backgroundColor: '#88FCA3', margin:'10px', padding:'10px'}}>{message.message}</div>
            }
        }
    )
)

export default Message