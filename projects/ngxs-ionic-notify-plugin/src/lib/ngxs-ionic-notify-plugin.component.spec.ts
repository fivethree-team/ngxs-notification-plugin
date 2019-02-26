import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsIonicNotifyPluginPage } from './ngxs-ionic-notify-plugin.page';

describe('NgxsIonicNotifyPluginPage', () => {
  let component: NgxsIonicNotifyPluginPage;
  let fixture: ComponentFixture<NgxsIonicNotifyPluginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsIonicNotifyPluginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsIonicNotifyPluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
