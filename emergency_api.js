const express = require('express');
const app = express();
const request = require('request');
const convert = require("xml-js");
require("dotenv").config( {path: "/home/ec2-user/project/emergency_room_ChatBot/.env"} );
const EMERGENCY_KEY=process.env.EMERGENCY_KEY;

var url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getSrsillDissAceptncPosblInfoInqire';
var queryParams = '?' + encodeURIComponent('serviceKey') + EMERGENCY_KEY;
queryParams += '&' + encodeURIComponent('STAGE1') + '=' + encodeURIComponent('����Ư����'); /* */
queryParams += '&' + encodeURIComponent('STAGE2') + '=' + encodeURIComponent('������'); /* */
queryParams += '&' + encodeURIComponent('SM_TYPE') + '=' + encodeURIComponent(''); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (err, res, body) {
    if(err){
        console.log(`err => ${err}`)
    }
    else{
        var result = body
        var xmlTojson = convert.xml2json(result, {compact: true, spaces:1});
        console.log(xmlTojson)
    }
    }
);