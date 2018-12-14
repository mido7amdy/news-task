import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsreaderComponent } from './newsreader.component';

describe('NewsreaderComponent', () => {
  let component: NewsreaderComponent;
  let fixture: ComponentFixture<NewsreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
