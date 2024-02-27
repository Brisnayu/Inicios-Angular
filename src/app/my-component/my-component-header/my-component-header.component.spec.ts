import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentHeaderComponent } from './my-component-header.component';

describe('MyComponentHeaderComponent', () => {
  let component: MyComponentHeaderComponent;
  let fixture: ComponentFixture<MyComponentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
