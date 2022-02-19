import { Component, Inject } from '@angular/core';
import { logClass } from './custom-decorators/class.decorator';
import { DependencyModule } from './custom-decorators/dependency/dependency-class';
import { DependencyParam } from './custom-decorators/dependency/dependency-property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @DependencyParam('single')
  instance1: SingletonClass | undefined;

  constructor() {
  }

  createInstanceAndPrint() {
    this.instance1?.print();
  }
}

class SingletonClass {
  private random = Math.floor(Math.random() * 100);

  print() {
    console.log('This instance number is ', this.random);
  }
}
@DependencyModule({
  single: new SingletonClass()
})
class CustomModule { }

