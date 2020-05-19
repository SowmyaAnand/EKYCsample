import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyapplicationsPage } from './myapplications.page';

describe('MyapplicationsPage', () => {
  let component: MyapplicationsPage;
  let fixture: ComponentFixture<MyapplicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyapplicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyapplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
