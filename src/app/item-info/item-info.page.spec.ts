import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemInfoPage } from './item-info.page';

describe('ItemInfoPage', () => {
  let component: ItemInfoPage;
  let fixture: ComponentFixture<ItemInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
