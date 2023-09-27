import styles from './popUpAula.module.css';

const PopUpMessage = ({ typeColor, mensagem }) => {

    // IF ternario com variavel.
    let color = (typeColor === 'sucesso') ? styles.sucesso : styles.erro;
    let container = styles.mainDiv + ' ' + color;

    return (
        <div className={container}>
            <h1>{mensagem || 'Mensagem' }</h1>
        </div>
    )

};

export default PopUpMessage;