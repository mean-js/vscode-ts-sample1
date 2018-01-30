import * as http from 'http';
import App from './affixus/rest/app.rest';
const port =  3010;

App.set('port', port);

App.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }
  
    return console.log(`server is listening on ${port}`)
})