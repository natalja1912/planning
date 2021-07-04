import * as Image from '../../icons';
import './SearchResults.scss'

function SearchResults() {
    /*Переменная RESULTSNUMBER - временная, в дальнейшем будет 
    заменена количеством найденных программ*/
    const RESULTSNUMBER = 34;

    return (
        <section className="results">
            <p className="results__text">{RESULTSNUMBER} сессии</p>
            <button className="results__btn-group results__btn-group_first">
                <Image.Scale />
                <p className="results__btn results__btn_blue">Настроить фильтр</p>
            </button>
            <button className="results__btn-group">
                <Image.CloseButton />
                <p className="results__btn results__btn_grey">Сбросить</p>
            </button>
        </section>
    );
}

export default SearchResults;