import {Observable} from '../../Observable';
import {windowTime} from '../../operator/windowTime';
Observable.prototype.windowTime = windowTime;
