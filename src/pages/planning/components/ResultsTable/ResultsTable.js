import * as Image from '../../icons';
import { ResultsRow } from '../index';
import './ResultsTable.scss'

function ResultsTable() {
    /*Переменная RESULTS - временная, показывает данные найденных программ*/
    const RESULTS= [{id: '1', active: true, date: '2020-12-23T09:15:00Z', name: 'Страхование с заботой о клиенте', participants: '12', trainer: '', progress: '92%'},
    {id: '2', active: true, date: '2020-11-14T09:30:00Z', name: 'Главные правила продаж', participants: '10', trainer: '', progress: '90%'},
    {id: '3', active: true, date: '2020-10-19T14:30:00Z', name: 'Первичное обучение КС', participants: '8', trainer: '', progress: '88%'},
    {id: '4', active: true, date: '2020-10-10T16:30:00Z', name: 'Вторичное обучение КС', participants: '18', trainer: '', progress: '82%'},
    {id: '5', active: false, date: '2020-10-05T15:00:00Z', name: 'Вклады: теория и практика', participants: '6', trainer: '', progress: '79%'},
    {id: '6', active: false, date: '2020-09-30T15:00:00Z', name: 'Очное обучение менеджеров', participants: '20', trainer: '', progress: '73%'}];

    return (
        <section className="table">
            <div className="table__row">
                <p className="table__heading">Дата начала</p>
                <p className="table__heading">Название</p>
                <p className="table__heading">Участников</p>
                <p className="table__heading">Тренер</p>
                <p className="table__heading">Прогресс</p>
            </div>
            <ul className="table__list">
            {RESULTS.map(item => <li key={item.id}>
                <ResultsRow data={item} />
            </li>)}
            </ul>
        </section>
    );
}

export default ResultsTable;