const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req, res) => {

	if ((req.method === "GET")) {
		const url = req.url;
		console.log("url:", url);
		req.querystring = querystring.parse(url.split("?")[1])
		console.log("query:", req.querystring);
		res.end(JSON.stringify(req.querystring));
	}
	if ((req.method === "POST")) {
		console.log("content-type", req.headers['content-type'])
		// 接收数据
		let postData = ""
		req.on('data', chunk => {
			postData += chunk
		})
		req.on('end', () => {
			console.log(postData)
			res.end('hello world') // 在这里返回，因为是异步
		})
	}
});

server.listen(8000);
console.log("OK 8000");
