(function() {
	var template = Handlebars.compile(solve()());

	// Sample test 1

	//var data = {
	//	title: 'Conspiracy Theories',
	//	posts: [{
	//		author: '',
	//		text: 'Dear God,',
	//		comments: [{
	//			author: 'G',
	//			text: 'Yes, my child?'
	//		}, {
	//			author: '',
	//			text: 'I would like to file a bug report.'
	//		}]
	//	}, {
	//		author: 'Cuki',
	//		text: '<a href="https://xkcd.com/258/">link</a>',
	//		comments: []
	//	}]
	//};

	// Sample test 2

	 var data = {
	 	title: 'Todor Jivkov Alive?',
	 	posts: [{
	 		author: 'cuki',
	 		text: 'hello guys',
	 		comments: [{
	 			author: 'kon',
	 			text: 'hello'
	 		}, {
	 			text: 'hello'
	 		}]
	 	}, {
	 		author: 'cuki',
	 		text: 'this works',
	 		comments: [{
	 			author: 'cuki',
	 			text: 'well, ofcourse!\nregards'
	 		}, {
	 			text: 'you are fat',
	 			deleted: true
	 		}]
	 	}, {
	 		author: 'pesho',
	 		text: 'is anybody out <a href="https://facebook.com/">there</a>?',
	 		comments: []
	 	}]
	 };

	document.getElementById('thread-container')
		.innerHTML = template(data);
}());
