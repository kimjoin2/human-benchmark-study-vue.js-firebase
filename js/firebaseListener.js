firebase.database()
    .ref('records')
    .on('value', function(snapshot) {
        let dataSet = [];
        snapshot.forEach(function(childSnapshot) {
            let childData = childSnapshot.val().record;
            dataSet.push(childData);
        });
        dataSet.sort(function(a,b) { return a - b;});
        let recordTable = document.getElementsByClassName("records");
        for(let i=0; i<recordTable.length; i++){
            if(dataSet.length > i){
                recordTable[i].innerHTML = dataSet[i] + " sec";
            } else {
                recordTable[i].innerHTML = "";
            }
        }
});
