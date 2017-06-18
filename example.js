const { batchSizing } = require('./index')

var getBatchSize = batchSizing(9934, 40)
var stepLength = 0;
while (stepLength = getBatchSize()) { }