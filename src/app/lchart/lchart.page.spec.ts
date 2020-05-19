import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LchartPage } from './lchart.page';

describe('LchartPage', () => {
  let component: LchartPage;
  let fixture: ComponentFixture<LchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
