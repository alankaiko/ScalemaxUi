import {HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';

export abstract class AbstractService {
    protected options(params?: HttpParams, headers?: HttpHeaders): {} {
        return {
            headers: headers ? headers : this.buildHeaders(),
            params: params ? params : this.buildParams()
        }
    }

    private buildHeaders() {
        return new HttpHeaders();
    }

    private buildParams() {
        return new HttpParams();
    }

    protected mapper(jsonObj: any) {
        return jsonObj;
    }

    protected handleError(error: string): Observable<any> {
        return throwError(error);
    }
}
