const express = require('express');
const app = express();
const perf = require('execution-time')();
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.use(bodyParser());

app.post('/uploaded', function (req, res, next) {
    var inputword = req.body.input;
    console.log(txt_folder_name)
    console.log("henlo")
    readJson(inputword);
});

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(8080, () => console.log('Server Running on Port 8080'));


function readJson(inputword) {
    const fs = require('fs')

    fs.readFile(__dirname + "/js/file.json", 'utf8', (err, fileContents) => {
        if (err) {
            console.error(err)
            return
        }
        try {
            var data = JSON.parse(fileContents)
            console.log("Loaded JSON into data variable");
            var henlo = data[18];
            console.log(henlo.smart);
        } catch (err) {
            console.error(err)
        }
    })
}

function linearSearch(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            const results = perf.stop();
            console.log(results.time);
            return i;
        }
    }
    const results = perf.stop();
    console.log(results.time);
    return null;

}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


function interpolationSearch(sortedArray, seekElement) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
        const indexDelta = rightIndex - leftIndex;
        const valueDelta = seekElement - sortedArray[leftIndex];
        if (valueDelta < 0) {
            return -1;
        }
        if (!rangeDelta) {
            return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
        }

        const middleIndex = leftIndex + Math.floor(valueDelta * indexDelta / rangeDelta);

        if (sortedArray[middleIndex] === seekElement) {
            return middleIndex;
        }
        if (sortedArray[middleIndex] < seekElement) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
}


function jumpSearch(arrayToSearch, valueToSearch) {
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length) - 1;
    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }

    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        lowerBound++;
        if (lowerBound == upperBound) {
            return -1;
        }
    }
    if (arrayToSearch[lowerBound] == valueToSearch) {
        return lowerBound;
    }
    return -1;
}
