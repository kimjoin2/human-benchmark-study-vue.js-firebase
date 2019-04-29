function inputRecord() {
    let id = (new Date()).getTime();
    let timeRecord = calcTime();
    firebase.database().ref('records/' + id).set({
        record: timeRecord
    });
    alert(timeRecord + " sec");
}
