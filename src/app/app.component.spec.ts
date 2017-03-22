/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';


describe('App: TodoApp', () => {
  beforeEach(() => {
    addProviders([AppComponent, ]);
  });

  // it('should create the app',
  //   inject([AppComponent], (app: AppComponent) => {
  //     expect(app).toBeTruthy();
  //   }));

  // it('should have a newTodo todo',
  //   inject([AppComponent], (app: AppComponent) => {
  //     expect(app.newTodo instanceof Todo).toBeTruthy();
  //   }));
});
