import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

declare var sqlite3: any;

@Injectable()
export class SqliteService {
  private _subject: Subject<any>;
  db;

  constructor() {
    this._subject = new Subject();
    this.db = new sqlite3.Database('pokedex.sqlite');
  }

  execute(query: string): Observable<any> {
    this.db.serialize(() => {
        this.db.each(query, (err, row) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(row);
            this._subject.next(row);
        });
    });
    return this._subject.asObservable();
  }

}
