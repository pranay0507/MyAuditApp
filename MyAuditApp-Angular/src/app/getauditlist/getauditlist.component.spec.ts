import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetauditlistComponent } from './getauditlist.component';

describe('GetauditlistComponent', () => {
  let component: GetauditlistComponent;
  let fixture: ComponentFixture<GetauditlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetauditlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetauditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
