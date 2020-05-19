import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DchartPage } from './dchart.page';

describe('DchartPage', () => {
  let component: DchartPage;
  let fixture: ComponentFixture<DchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
