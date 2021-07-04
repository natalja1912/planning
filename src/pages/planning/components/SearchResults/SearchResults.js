import * as Image from '../../icons';
import './SearchResults.scss'

function SearchResults() {
    /*Переменная RESULTSNUMBER - временная, в дальнейшем будет 
    заменена количеством найденных программ*/
    const RESULTSNUMBER = 34;

    return (
        <section className="results">
            <p className="results__text">{RESULTSNUMBER} сессии</p>
            <div className="results__btn-group results__btn-group_first">
                <Image.Scale />
                <button className="results__btn results__btn_blue">Настроить фильтр</button>
            </div>
            <div className="results__btn-group">
                <Image.CloseButton />
                <button className="results__btn results__btn_grey">Сбросить</button>
            </div>
        </section>
    );
}

export default SearchResults;