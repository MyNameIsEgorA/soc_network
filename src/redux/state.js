const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_POST = 'SEND-POST'
const UPDATE_POST = 'UPDATE-POST'

export const addNewMessageAction = text => ({ text: text, type: SEND_MESSAGE })
export const onMessageChangeAction = text => ({ text: text, type: UPDATE_MESSAGE })
export const onPostChangeAction = text => ({ text: text, type: UPDATE_POST })
export const addPostAction = text => ({ text: text, type: SEND_POST })

export let store = {

    renderLayout() { console.log("started") },

    state: {
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
        ],
        posts: [
            { id: 1, text: 'Здарова, заебал. Я Санька, но можешь меня звать Александ Григорьевич!', first_name: 'Александр', last_name: "Александров", likes: 23 },
            { id: 2, text: 'Это начало моего босяцкого блога про говно и мух)', first_name: 'Александр', last_name: 'Александров', likes: 410 }
        ],

        currentMessageText: '1',
        currentPostText: '2',
        first_name: 'Александр',
        last_name: 'Александров'
    },

    newPost(text) {

        let post = {
            text: text,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            likes: 0,
            id: ++this.state.posts[this.state.posts.length - 1].id,
        }

        this.state.posts.push(post)
        this.state.currentPostText = ''
        this.renderLayout(this.state)

        console.log(this.state.posts)
    },

    subscribe(observer) {
        this.renderLayout = observer
    },

    dispatch(context) {

        if (context.type === 'SEND-MESSAGE') {

            debugger

            let message = {
                id: ++this.state.messages[this.state.messages.length - 1].id,
                message: context.text,
                messageCode: "sent_to"
            }

            this.state.messages.push(message)
            this.state.currentMessageText = ''
            this.renderLayout(this.state)

        } else if (context.type === 'UPDATE-MESSAGE') {

            this.state.currentMessageText = context.text
            this.renderLayout(this.state)

        } else if (context.type === 'SEND-POST') {

            let post = {
                text: context.text,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                likes: 0,
                id: ++this.state.posts[this.state.posts.length - 1].id,
            }

            this.state.posts.push(post)
            this.state.currentPostText = ''
            this.renderLayout(this.state)

            console.log(this.state.posts)

        } else if (context.type === 'UPDATE-POST') {

            console.log(this.state.currentPostText)

            debugger

            this.state.currentPostText = context.text
            this.renderLayout(this.state)
            console.log(this.state.currentPostText)

        }
    }
}