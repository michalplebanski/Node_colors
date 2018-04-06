var os = require('os');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.cyan, release);
    console.log('CPU model:'.yellow, cpu);
    console.log('Uptime: ~'.blue, (uptime / 60).toFixed(0), 'min');
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.green, userInfo.homedir);
}

exports.print = getOSinfo;