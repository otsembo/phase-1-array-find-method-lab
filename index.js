// code your solution here
function superbowlWin(record){
    let year;
    for (let i = 0; i<record.length; i++){
        const data = record[i];
        if(data.result == "W"){
            year = data.year;
            break;
        }
    }
    return year;
}
