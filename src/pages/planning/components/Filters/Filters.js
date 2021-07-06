import { Form, InputGroup } from 'react-bootstrap';
import * as Image from '../../icons';
import React, { useState } from "react";
import { CustomSelect } from '../index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Filters.scss";

function Filters() {
    const [startDate, setStartDate] = useState(new Date());

    const programOptions = [
        { value: '1', label: 'Все' },
        { value: '2', label: 'Option 1' },
        { value: '3', label: 'Option 2' },
        { value: '4', label: 'Option 3' },
    ]

    return (
        <section className="filters">
            <Form className="form">
                <Form.Group className="form__group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image.Search />
                        </InputGroup.Prepend>
                        <Form.Control className="form__input form__input_search" id="search" placeholder="Поиск" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="form__group form__group_select" controlId="programSelect">
                    <Form.Label className="form__label">Программа</Form.Label>
                    <CustomSelect
                        optionsData={programOptions}
                    />
                </Form.Group>
                <Form.Group className="form__group form__group_select" controlId="programSelect">
                    <Form.Label className="form__label">Период</Form.Label>
                    <div className="form__icon"><Image.DropDown /></div>
                    <DatePicker dateFormat='P' selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>
                <Form.Group className="form__group form__group_select" controlId="programSelect">
                    <Form.Label className="form__label">Статус</Form.Label>
                    <div className="form__icon"><Image.DropDown /></div>
                    <CustomSelect
                        optionsData={programOptions}
                    />
                </Form.Group>
            </Form>
        </section>
    );
}

export default Filters;