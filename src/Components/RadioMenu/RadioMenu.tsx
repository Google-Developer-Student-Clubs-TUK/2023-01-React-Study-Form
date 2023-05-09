import { useState } from 'react';
import styles from './RadioMenu.module.css';

type RadioMenuProps = {
    summary?: string,
    items: string[]
}

function RadioMenu(prop: RadioMenuProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const reset = () => {
        setSelected(null);
    }
    const select = (s: string) => () => { //TODO
        setSelected(s);
    }
    
    return <form className={styles.root}>
        {prop.summary && <div>{prop.summary}</div>}
        {prop.items.map (e => 
        <div key={e} className={styles.element}>
            <input type="radio" id={e} className={styles.input} name={prop.summary} 
            checked={selected != null && selected === e} 
            onClick={select(e)}/>
            <label className={styles.inputlabel} htmlFor={e}>{e}</label>
        </div>)}
        <div className={styles.removeselect} onClick={reset}>선택해제</div>
    </form>
}
export default RadioMenu;