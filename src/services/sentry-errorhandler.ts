import { IonicErrorHandler } from 'ionic-angular';  
import Raven from 'raven-js';

Raven  
    .config('https://d7beb35433e0407db6918e09b5b2541a@sentry.io/291788')
    .install();

export class SentryErrorHandler extends IonicErrorHandler {

    handleError(error) {
        super.handleError(error);

        try {
          Raven.captureException(error.originalError || error);
        }
        catch(e) {
          console.error(e);
        }
    }
}