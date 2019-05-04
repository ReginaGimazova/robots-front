import React, {Component} from 'react';
import styles from "./AuthForm.module.css";
import Button from "../../atoms/Button";

class AuthForm extends Component {
    render() {
        return (
            <form className={styles.form}>
                <input placeholder='Введите свое имя' className={styles.form__input}/>
                <Button/>
            </form>
        )
    }
}

export default AuthForm
