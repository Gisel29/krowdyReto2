const ffmpeg = require('fluent-ffmpeg');

const video1 = './src videos/video1.mp4';
const video2 = './src videos/video2.mp4';
const video3 = './src videos/video3.mp4';
const video4 = './src videos/video4.mp4';    

ffmpeg({ source: video1})
ffmpeg({ source: video2})
ffmpeg({ source: video3})
ffmpeg({ source: video4})

ffmpeg.on('end',() => console.log('la union esta hecha!'))
ffmpeg.on('error',(err) => console.log('Error',err))
ffmpeg.mergeToFile('out.mp4');