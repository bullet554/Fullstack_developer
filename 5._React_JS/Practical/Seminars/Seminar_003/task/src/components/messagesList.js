import { Messages } from "./dataMessages";
import Message from "./message";


function MessagesList() {
    return (
        <>
            {Messages.map((message) => (
                <Message key={Messages.id} {...message}/>
            ))}
        </>
    );
}

export default MessagesList;