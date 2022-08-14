import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPreciosComponent } from './productos-precios.component';

describe('ProductosPreciosComponent', () => {
  let component: ProductosPreciosComponent;
  let fixture: ComponentFixture<ProductosPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPreciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
