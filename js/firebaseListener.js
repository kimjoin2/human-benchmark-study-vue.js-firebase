firebase.database()
    .ref('records')
    .on('value', function(snapshot) {
        let recordArray = [];
        let nameMap = new Map();
        snapshot.forEach(function(childSnapshot) {
            let record = childSnapshot.val().record;
            let name = childSnapshot.val().name;
            recordArray.push(record);
            nameMap.set(record, name);
        });
        recordArray.sort(function(a,b) { return a - b;});
        let recordTable = document.getElementsByClassName("record");
        let nameTable = document.getElementsByClassName("userName");

        for(let i=0; i<recordTable.length; i++){
            if(recordArray.length > i){
                let record = recordArray[i];
                recordTable[i].innerHTML = record + " sec";
                nameTable[i].innerHTML = nameMap.get(record);
            } else {
                recordTable[i].innerHTML = "";
                nameTable[i].innerHTML = "";
            }
        }
});
