import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm = (): JSX.Element => {
    const [email, setEmail] = useState<string>('user@mail.com')
    const [password, setPassword] = useState<string>('12345')
    const {store} = useContext(Context);
    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'/>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'/>
            <button
                onClick={() => store.login(email, password)}
            >
                Логин
            </button>
            <button
                onClick={() => store.registration(email, password)}
            >
                Регистрация
            </button>
        </div>
    );
};

export default observer(LoginForm);
