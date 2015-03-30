app = require('express.io')()
app.http().io()

// Setup the ready route, and emit talk event.
app.io.route('ready', function(req) {
    req.io.emit('talk', { 
        message: 'io event from an io route on the server'
    })
})

app.io.route('join', function(req) {
	var room = req.data.room
	req.io.join(room);
	req.io.room(room).broadcast('announce', {
        message: 'New client' + req.data.id +' in the ' + room + ' room. '
    })
})

app.io.route('send', function(req) {
	var room = req.data.room
	var data = req.data.data
	req.io.join(room);
	req.io.room(room).broadcast('message', data);
})


/*
	GET A LIST OF SHAREBOX
	======================
	GET sharebox/
	@request null
	@response a list of sharebox
	{
		action: "get a list of sharebox",
		status: "success",
		data: []
	}
*/
app.get('/', function(req, res) {
	// TODO 
	// Code to get a list of sharebox
	var data = {
		action: "get a list of sharebox",
		status: "success",
		data: [
			{
				id: 123,
				creator_id: 23,
				share_with: [22, 33, 11],
				status: "active",
				create_time: "2013-12-01T19:00+0800",
				update_time: "2014-01-01T21:00+0800"
			}
		]
	};

	res.send(data);
});

/*
	CREATE A NEW SHAREBOX
	======================
	POST sharebox/
	@request sharebox info
	{
		creator_id: 23,
		share_with: [22, 33, 11]
	}
	@response a sharebox
	{
		action: "create a new sharebox",
		status: "success",
		data: []
	}
*/
app.post('/', function(req, res) {
	// TODO 
	// Code to create a sharebox

	var data = {
		action: "create a new sharebox",
		status: "success",
		data: [
			{
				id: 123,
				creator_id: req.body.creator_id,
				share_with: req.body.share_with,
				status: "active",
				create_time: "2013-12-01T19:00+0800",
				update_time: "2014-01-01T21:00+0800",
				items:[]
			}
		]
	};

	res.send(data);
});

/*
	GET A SPECIFIC SHAREBOX
	======================
	GET sharebox/:id
	@request null
	@response a sharebox
	{
		action: "get a specific sharebox",
		status: "success",
		data: []
	}
*/
app.get('/:id', function(req, res) {
	var shareboxId = req.params.id;
	// TODO 
	// Code to get a sharebox
	var data = {
		action: "get a specific sharebox",
		status: "success",
		data: [
			{
				id: shareboxId,
				creator_id: 23,
				share_with: [22, 33, 11],
				status: "active",
				create_time: "2013-12-01T19:00+0800",
				update_time: "2014-01-01T21:00+0800",
				items: [
					{
						name: "fuck you morph" ,
						type: "script",
						xml: "<script><block s='forward'><l>10</l></block></script>"
					}
				]
			}
		]
	};

	res.send(data);
});


/*
	UPDATE A SHAREBOX
	======================
	PUT sharebox/
	@request a sharebox items
	{
		items: [
			{
				name: "fuck you morph" ,
				type: "script",
				xml: "<script><block s='forward'><l>10</l></block></script>"
			}
		]
	}
	@response a sharebox
	{
		action: "update a sharebox",
		status: "success",
		data: []
	}
*/
app.put('/:id', function(req, res) {
	var shareboxId = req.params.id;
	// TODO 
	// Code to update a sharebox
	var data = {
		action: "update a sharebox",
		status: "success",
		data: [
			{
				id: shareboxId,
				creator_id: 23,
				share_with: [22, 33, 11],
				status: "active",
				create_time: "2013-12-01T19:00+0800",
				update_time: "2014-01-01T21:00+0800",
				items: req.body.items
			}
		]
	};

	res.send(data);
});

/*
	DELETE A SHAREBOX
	======================
	PUT sharebox/
	@request null
	@response a sharebox
	{
		action: "update a sharebox",
		status: "success",
		data: []
	}
*/
app.delete('/:id', function(req, res) {
	var shareboxId = req.params.id;
	// TODO 
	// Code to delete a sharebox
	var data = {
		action: "delete a sharebox",
		status: "success",
		data: [
			{
				id: shareboxId,
				creator_id: 23,
				share_with: [22, 33, 11],
				status: "active",
				create_time: "2013-12-01T19:00+0800",
				update_time: "2014-01-01T21:00+0800",
				items: [
					{
						name: "fuck you morph" ,
						type: "script",
						xml: "<script><block s='forward'><l>10</l></block></script>"
					}
				]
			}
		]
	};

	res.send(data);
});


var port = parseInt(process.env.PORT, 10) || 4000;
app.listen(port)