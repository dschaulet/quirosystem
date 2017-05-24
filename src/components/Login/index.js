import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="qs-login">
                <form>
                    <label>Usuário:</label>
                    <input type="text" name="username"/>
                    <label>Senha:</label>
                    <input type="password" name="pass"/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
