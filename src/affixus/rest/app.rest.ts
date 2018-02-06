import * as express from 'express';

import {WelcomeController} from './welcome.controller';
import {WelcomeController1} from './welcome.controller.1';
let WelcomeController2 = require('./welcome.controller.2');

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    
    // placeholder route handler
    this.express.use('/a', WelcomeController);
    this.express.use('/b', WelcomeController1);
    this.express.use('/c', WelcomeController2);

  }
}
export default new App().express;