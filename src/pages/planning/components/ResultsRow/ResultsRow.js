import { dateFormatter } from '../../../../utils/dateFormatter';
import React, { useState, useRef } from "react";
import { Overlay, Popover } from 'react-bootstrap';
import * as Image from '../../icons';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ResultsRow.scss'

function ResultsRow({ data }) {
    /*функция для форматирования даты из формата ISO в формат dd mm, hh */
    const date = dateFormatter(data.date);

    /*функция для всплывающего окна с кнопками удаления/редактирования ряда таблицы */
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    return (
        <>
            <div ref={ref} className="table__row table__row_data">
                <p className={`table__text ${!data.active && `table__text_inactive`}`}>{date}</p>
                <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.name}</p>
                <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.participants}</p>
                <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.trainer}</p>
                <div className="table__icon-group">
                    <div className="table__icon"><Image.Process /></div>
                    <p className={`table__text ${!data.active && `table__text_inactive`}`}>
                        {data.progress}</p></div>
                <button className="table__btn" onMouseEnter={handleClick} onClick={handleClick}><Image.DottedLine /></button>

                <Overlay
                    show={show}
                    target={target}
                    placement="top"
                    container={ref.current}
                >
                    <Popover className="popover">
                        <Popover.Content className="popover__body">
                            <button className="popover__btn">
                                <div className="popover__icon"><Image.Edit /></div>
                                <p className='popover__text'>Редактировать</p>
                            </button>
                            <button className="popover__btn">
                                <div className="popover__icon"><Image.Delete /></div>
                                <p className='popover__text'>Удалить</p>
                            </button>
                        </Popover.Content>
                    </Popover>
                </Overlay>
            </div>
        </>
    );
}

export default ResultsRow;