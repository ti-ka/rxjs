import {Observable} from '../../Observable';
import {withLatestFrom} from '../../operator/withLatestFrom';
Observable.prototype.withLatestFrom = withLatestFrom;
