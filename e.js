var http = require('http');
var querystring = require('querystring');



var that = this;

this.msqAdd = function(){
    var contents = querystring.stringify({
   	 count: 10
	});

	var options = {
   	  host: 'wx.hortor.net',
  	  path: '/goose/add-coin',
  	  method: 'POST',
   	  headers: {
      	  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
       	  'Content-Length': contents.length,
	  'Cookie': 'OpenId=otVZyt2j5_XfqMyggZsQ2Nih4xBI'
    	  }
    
	};

	var req = http.request(options, function(res){
   	 console.log('STAtus:' + res.statusCode);
  	  //console.log('Headers:' + JSON.stringify(res.headers));
  	  res.setEncoding('utf8');
  	  res.on('data', function(data){
     	   console.log('add money success' + data);
  	  });
	});

	req.on('error',function(e){
 	  console.log(e.message);
	});
    
    	req.write(contents);
    	req.end();
        setTimeout(function(){that.msqAdd();},2000);
    	
    
}

this.msqCollect = function(){
    var contents = "";

	var options = {
   	  host: 'wx.hortor.net',
  	  path: '/goose/collect-coin',
  	  method: 'POST',
   	  headers: {
       	  'Content-Length': contents.length,
	  'Cookie': 'OpenId=otVZyt2j5_XfqMyggZsQ2Nih4xBI'
    	  }
    
	};

	var req = http.request(options, function(res){
   	 console.log('·þÎñÆ÷·µ»ØStatus:' + res.statusCode);
  	  //console.log('Headers:' + JSON.stringify(res.headers));
  	  res.setEncoding('utf8');
  	  res.on('data', function(data){
     	   console.log('collect success:' + data);
  	  });
	});

	req.on('error',function(e){
 	  console.log(e.message);
	});
    
    	req.write(contents);
    	req.end();
	setTimeout(function(){that.msqCollect();},10000);
    	
    
}

this.msqAdd();
this.msqCollect();
