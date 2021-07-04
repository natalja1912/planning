export const dateFormatter = (date) => {
    let newDate = new Date(date);
    const monthNames = ["янв", "фев", "марта", "апр", "мая", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"
    ];


    Date.prototype.getFullMinutes = function () {
        if (this.getMinutes() < 10) {
            return '0' + this.getMinutes();
        }
        return this.getMinutes();
    };
    newDate = newDate.getDay() + ' ' + monthNames[newDate.getMonth()] + ', ' + newDate.getHours() + ':' + newDate.getFullMinutes();
    return newDate;
}
