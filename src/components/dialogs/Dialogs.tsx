import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: number
    name: string
}
type MessagePropsType = {
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};


export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ];
    const messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Hello friend!'},
        {id: 5, message: 'Thank you!'},
        {id: 6, message: 'Bye'},
    ];
    return (
        <div className={s.conteiner}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
                </div>
                <div className={s.messages}>
                    {messagesData.map(el => <Message key={el.id} message={el.message} />)}
                </div>
            </div>
        </div>
    );
};

