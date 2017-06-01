import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class ServiceMainService {

  constructor(private _http: Http) { }


  urlServer: string = "http://dmfzero.com/";
  urlFolder: string = "p/pon-api-serve/";
  urlPhp: string = "apiserve-dmfzero.php/";
  dbServer: string = "db_dentstock";

  //http://dmfzero.com/p/pon-api-serveapi-serve-dmfzero.phpgetData4/33/10702/2016-10-01/2017-09-30/s/db_dentstock

  private _api = this.urlServer + this.urlFolder + this.urlPhp;
  getData4(key: any, param1: any, param2: any, param3: any, param4: any): Observable<any> {
    const url = this._api + `getData4/${key}/${param1}/${param2}/${param3}/${param4}/${this.dbServer}`;
    // console.log(url);
    return this._http.get(url)//this._productUrlOne)
      .map((response: Response) => response.json())
    // .catch(this.handleError)
  }

}
