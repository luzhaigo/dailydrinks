import React, { useState, useRef, useEffect } from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ updateOrderItem, deleteOrderItem, ...rest }) => {
  const [isNoteFocus, setNoteFocus] = useState(false);
  const [note, setNote] = useState(rest.note);
  const textareaEl = useRef(null);

  useEffect(() => {
    textareaEl.current && textareaEl.current.focus();
  }, [isNoteFocus]);

  const renderNote = () => {
    return (
      <div>note:
        {
          isNoteFocus ? 
          <textarea 
            value={note} 
            className={styles.note} 
            ref={textareaEl} 
            onBlur={(e) => {
              setNoteFocus(false);
              updateOrderItem({
                ...rest,
                note: e.target.value,
              });
            }}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          /> : 
          <pre className={styles.note} onClick={() => {
              setNoteFocus(true);
            }}>{rest.note}
          </pre>
        }
        </div>
    );
  };

  return (
    <li className={styles.item}>
      <div className={styles.name}>{rest.name}</div>
      <div className={styles.info}>
        <div>price: $<span className={styles.price}>{rest.price}</span></div>
        <input type="text" pattern="\d*" className={styles.count} value={rest.count} onChange={(e) => {
          if (+e.target.value < 1) {
            e.target.value = 1;
          }
          updateOrderItem({
            ...rest,
            count: +e.target.value,
          });
        }}/>
      </div>
      {
        rest.note && renderNote()
      }
      <button className={styles.delete} onClick={deleteOrderItem}></button>
    </li>
  );
};

export default OrderItem;