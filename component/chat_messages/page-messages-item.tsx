import clasess from './page-messages.module.css'
const Chat_List = ({
    chatId,
    userId,
    userName,
    text,
    avatarUrl,
    date
} : {
    chatId:string,
    userId: number,
    userName : string,
    text: string,
    avatarUrl : string,
    date: Date
})=> {
    const formatted = new Date(date).toLocaleString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      


    return (
        <div>
            <div className={`${clasess.chat_list_container}`}>
            <span>{userName}</span>
            <span>{formatted}</span>
            </div>

        </div>
    )
}
export default Chat_List;