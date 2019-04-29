function inputRecord() {
    let id = (new Date()).getTime();
    let timeRecord = calcTime();
    let userName = document.getElementById("userName").value;
    firebase.database().ref('records/' + id).set({
        name: userName,
        record: timeRecord
    });
    alert(timeRecord + " sec");
}
