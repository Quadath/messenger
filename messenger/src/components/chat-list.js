import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import UserSearch from "./user-search";
import '../sass/chat-list.sass'

const ChatList = (chats) => {
    return (
        <div className="chat-list-wrapper">
            <UserSearch/>
            <ListGroup flush className="chat-list">
                <ListGroupItem className="chat-list-item">
                    Клавиша
                </ListGroupItem>
                <ListGroupItem className="chat-list-item">
                    Антон
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
export default ChatList;