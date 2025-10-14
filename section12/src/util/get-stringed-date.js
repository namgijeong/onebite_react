//날짜객체 -> YYYY-MM-DD
export const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    //0부터 시작하므로
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10){
        month = `0${month}`;
    }

    if(date < 10){
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
}