const http = require('http');
const questions = require('./questions');

const server = http.createServer((request, response) => {
    const requestParameters = request.url.split('/');
    let responseData = null;

    switch (requestParameters[1]) {
        case 'questions':
            switch (requestParameters[2]) {
                // questions/count
                case 'count':
                    responseData = questions.length;
                    break;
                // questions/id/{id}
                case 'id':
                    responseData = requestParameters[3] && questions[requestParameters[3]];
                    break;
                default:
                    break;
            }
        default:
            break;
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(responseData));
});

server.listen(3000);
