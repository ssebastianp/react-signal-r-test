import ChatProps from './ChatProps';
import Message from './Message';

type Props = {
  chat: ChatProps[];
}


const ChatWindow = (props: Props) => {
    const chat = props.chat
        .map(m => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div>
            {chat}
        </div>
    )
};

export default ChatWindow;