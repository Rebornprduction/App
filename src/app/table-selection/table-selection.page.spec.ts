import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableSelectionPage } from './table-selection.page';

describe('TableSelectionPage', () => {
  let component: TableSelectionPage;
  let fixture: ComponentFixture<TableSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
