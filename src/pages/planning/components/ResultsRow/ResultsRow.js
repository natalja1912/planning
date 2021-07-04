import { dateFormatter } from '../../../../utils/dateFormatter';
import * as Image from '../../icons';
import './ResultsRow.scss'

function ResultsRow({ data }) {
    const date = dateFormatter(data.date);

    return (
        <div className="table__row table__row_data">
            <p className={`table__text ${!data.active && `table__text_inactive`}`}>{date}</p>
            <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.name}</p>
            <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.participants}</p>
            <p className={`table__text ${!data.active && `table__text_inactive`}`}>{data.trainer}</p>
            <div className="table__icon-group">
                <div className="table__icon"><Image.Process /></div>
                <p className={`table__text ${!data.active && `table__text_inactive`}`}>
                    {data.progress}</p></div>

        </div>
    );
}

export default ResultsRow;