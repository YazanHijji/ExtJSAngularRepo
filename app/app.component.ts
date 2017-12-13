import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core';

function _window() : any {
  return window;
}

@Injectable()
export class WindowRef {
   get nativeWindow() : any {
      return _window();
   }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = null;
  winRef: WindowRef = new WindowRef();
    constructor(private _http: Http ) {
      this.getMyArticles(this.winRef);
    }

    private getMyArticles(winRef) {
      console.log("MySharedData from Angular App = "+ winRef.nativeWindow.fromExtToNg);
      return this._http.get('https://jsonplaceholder.typicode.com/posts/3')
          .map((res: Response) => res.json())
            .subscribe(data => {
                  this.data = data;
                  //console.log(this.data);
                  //console.log("MySharedData from Angular App = "+ winRef.nativeWindow  );
          });
    }  
}
