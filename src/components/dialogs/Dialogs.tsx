import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: string
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
    return (
        <div className={s.conteiner}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Dmitry' id='1' />
                    <DialogItem name='Andrey' id='2' />
                    <DialogItem name='Sveta' id='3' />
                    <DialogItem name='Sasha' id='4' />
                    <DialogItem name='Victor' id='5' />
                    <DialogItem name='Valera' id='6' />
                </div>
                <div className={s.messages}>
                    <Message message='Hi!'/>
                    <Message message='How is your it-kamasutra?' />
                    <Message message='Yo!' />
                </div>
            </div>
        </div>
    );
};

