'use strict';
var express = require('express');
var app=express();
var server =app.listen(3000);
var myMap = new Map()
app.use(express.static('public'));
var socket = require('socket.io');
var io=socket(server);
io.sockets.on('connection',newConnection);
function newConnection(socket){
    console.log("user: "+socket.id);
    socket.on('room', function(data) {

        socket.join(data.room,function(){
            //  console.log(myMap);
            //  console.log("Hiiiiiiiiiii");
              var arr = myMap[data.room];
              var m = new Map(arr);
              var xs = Array.from(m.keys());
              var ys = Array.from(m.values());
              for (var i = 0; i < xs.length; i++) {
                io.sockets.in(data.room).emit('mouse', {x: xs[i], y: ys[i] , room:data.room});
              }
          //    console.log(xs);
          //    console.log(ys);

        });

        console.log("users in room: "+data.room);
        var room = io.sockets.adapter.rooms[data.room];
        console.log(room.length);
    });

    socket.on('mouse',function(data){
        io.sockets.in(data.room).emit('mouse', data);
        myMap[data["room"]] = myMap[data["room"]] || [];
        myMap[data["room"]].push([data["x"],data["y"]]);
      //  console.log(myMap);
       //socket.broadcast.emit('mouse',data);
    });
}
