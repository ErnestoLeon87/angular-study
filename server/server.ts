import * as express from 'express';
import { Application } from 'express';
import { getAllTareas } from './get-tareas.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/tareas').get(getAllTareas);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
