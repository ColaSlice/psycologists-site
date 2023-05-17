function MessageHandler(tempMessage) {
    let temp = [];
    let final = [];

    temp = Array.from(tempMessage)

    for (let index = 0; index < temp.length; index++) {
        final.push(<li className="message_li" key={index}>{temp[index].message}</li>);
    }

    return final;
}
export default MessageHandler;