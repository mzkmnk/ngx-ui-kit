import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxUiKitComponent } from './ngx-ui-kit.component';

describe('NgxUiKitComponent', () => {
  let component: NgxUiKitComponent;
  let fixture: ComponentFixture<NgxUiKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUiKitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
