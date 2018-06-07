// var request = require('request');
// var path = require('path');
// var fs = require('fs');

// var filename = 'testFile.txt';

// var target = `http://localhost:3000/api/containers/audio/upload`;
// var headers = {
//     "Content-Type": 'application/json'
// }
// var rs = fs.createReadStream(filename);
// // var ws = request.post(target,headers);
// var formData = {
//     my_file: fs.createReadStream(__dirname + '/testFile.txt'),
// };
// request.post({ url: target, formData: formData }, function optionalCallback(err, httpResponse, body) {
//     if (err) {
//         return console.error('upload failed:', err);
//     }
//     console.log('Upload successful!  Server responded with:', body);
// });

var request = require("request");

var options = {
    method: 'POST',
    url: 'http://localhost:3000/api/containers',
    body: { name: 'someNewContainer' },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});