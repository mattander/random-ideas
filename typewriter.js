console.clear();

let interval = 50;
let promise = Promise.resolve();
let string = "Hi, I'm Matt";
let para = ["Hi, I'm Matt!", "I like to build websites and I care about my users.", "Take a look at my work and see what you think."];

let text = string.split('');

para.forEach((el, index) => {
	promise = promise.then(() => {
		let text = el.split('');
		let element = document.createElement('p');
		root.appendChild(element);
		
		text.forEach(el => {
		promise = promise.then(function () {
			let node = document.createTextNode(el);
			element.appendChild(node);
			return new Promise(function (resolve) {
				setTimeout(resolve, interval);
			});
		});
	});
		
		return new Promise(function (resolve) {
			setTimeout(resolve, 1000);
		});
	});
})
