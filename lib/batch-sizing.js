var calcBatchSize = function (totalPeople, plannedBatch) {
    var proposedBatchSize = Math.round(totalPeople / plannedBatch);
    var currentBatch = 0;
    var peopleEntered = 0;
 
    return function () {
        var peopleLeft = totalPeople - peopleEntered;
        if (peopleLeft > 0) {
            var people1 = peopleEntered + proposedBatchSize;
            var people2 = Math.round((currentBatch + 1) * totalPeople / plannedBatch);
 
            var ret;
            var delta = people2 - people1;
            if (Math.abs(delta) >= 1) {
                ret = proposedBatchSize + delta;
            } else {
                ret = proposedBatchSize;
            }
 
            ret = Math.min(ret, peopleLeft);
            currentBatch++;
            peopleEntered += ret;
 
            console.log(`batch ${currentBatch}, people ${ret}, have enterred ${peopleEntered}`)
 
            return ret;
        } else if (peopleLeft === 0) {
            return 0;
        } else {
            throw 'There should be error happening';
        }
    }
}

module.exports = calcBatchSize