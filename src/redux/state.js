let state = {
    people: [
        { id: 1, name: 'Sasha', },
        { id: 2, name: 'Masha', },
        { id: 3, name: 'Pasha', },
        { id: 4, name: 'Andruha', },
    ],
    messages: [
        { id: 1, message: "Ayooo", messageCode: 'sent_to' },
        { id: 2, message: "Wassup Man!", messageCode: "sent_from" },
        { id: 3, message: "Maincraft is my life!!! And you are gay", messageCode: 'sent_to' },
        { id: 4, message: "No, man, red panties isn't gay", messageCode: "sent_from" },
    ]
}

export const sendMessage = (messageText) => {

    let message = {
        id: ++state.messages[state.messages.length - 1].id,
        message: messageText,
        messageCode: "sent_to"
    }

    state.messages.push(message)
    console.log(state.messages)
}


export default state;