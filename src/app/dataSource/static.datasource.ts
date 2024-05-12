
import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';

import { Observable, of } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  
    private products: Product[] = 
        [
            new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)Product 1 (Category 1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit laoreet tortor vel rhoncus. Donec viverra ornare nisl, quis tincidunt urna pellentesque vel. Duis posuere turpis est. Pellentesque consequat nisl nec sollicitudin porttitor. Donec ut tortor vel velit feugiat tempor vitae sed nisl. Fusce vitae magna a mauris malesuada placerat. Vivamus eu vestibulum augue. Maecenas a ligula nec odio maximus maximus iaculis vel risus. Fusce enim lectus, rhoncus rhoncus justo sit amet, tempus pulvinar nisl. Aenean porttitor dui sit amet augue efficitur molestie', 100),
            new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)Product 2 (Category 2)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit laoreet tortor vel rhoncus. Donec viverra ornare nisl, quis tincidunt urna pellentesque vel. Duis posuere turpis est. Pellentesque consequat nisl nec sollicitudin porttitor. Donec ut tortor vel velit feugiat tempor vitae sed nisl. Fusce vitae magna a mauris malesuada placerat. Vivamus eu vestibulum augue. Maecenas a ligula nec odio maximus maximus iaculis vel risus. Fusce enim lectus, rhoncus rhoncus justo sit amet, tempus pulvinar nisl. Aenean porttitor dui sit amet augue efficitur molestie', 200),
            new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)Product 2 (Category 3)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit laoreet tortor vel rhoncus. Donec viverra ornare nisl, quis tincidunt urna pellentesque vel. Duis posuere turpis est. Pellentesque consequat nisl nec sollicitudin porttitor. Donec ut tortor vel velit feugiat tempor vitae sed nisl. Fusce vitae magna a mauris malesuada placerat. Vivamus eu vestibulum augue. Maecenas a ligula nec odio maximus maximus iaculis vel risus. Fusce enim lectus, rhoncus rhoncus justo sit amet, tempus pulvinar nisl. Aenean porttitor dui sit amet augue efficitur molestie', 300),
            new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)Product 2 (Category 4)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit laoreet tortor vel rhoncus. Donec viverra ornare nisl, quis tincidunt urna pellentesque vel. Duis posuere turpis est. Pellentesque consequat nisl nec sollicitudin porttitor. Donec ut tortor vel velit feugiat tempor vitae sed nisl. Fusce vitae magna a mauris malesuada placerat. Vivamus eu vestibulum augue. Maecenas a ligula nec odio maximus maximus iaculis vel risus. Fusce enim lectus, rhoncus rhoncus justo sit amet, tempus pulvinar nisl. Aenean porttitor dui sit amet augue efficitur molestie', 40),
            new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)Product 2 (Category 5)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit laoreet tortor vel rhoncus. Donec viverra ornare nisl, quis tincidunt urna pellentesque vel. Duis posuere turpis est. Pellentesque consequat nisl nec sollicitudin porttitor. Donec ut tortor vel velit feugiat tempor vitae sed nisl. Fusce vitae magna a mauris malesuada placerat. Vivamus eu vestibulum augue. Maecenas a ligula nec odio maximus maximus iaculis vel risus. Fusce enim lectus, rhoncus rhoncus justo sit amet, tempus pulvinar nisl. Aenean porttitor dui sit amet augue efficitur molestie', 300),
            new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)Product 2 (Category 6)', 70),
            new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)Product 2 (Category 7)', 80),
            new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)Product 2 (Category 8)', 100),
            new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)Product 2 (Category 9)', 100),
            new Product(10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100),
            new Product(11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 200),
            new Product(12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 300),
            new Product(13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 400),
            new Product(14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 500),
            new Product(15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 700),
            new Product(16, 'Гантели', 'Тяжеляк', 'Описание гантелей', 400),
            new Product(17, 'Штанга', 'Тяжеляк', 'Описание штанги', 1800),
    ];
  
    public getProducts(): Observable<Product[]>  
    {
        return of(this.products);
    }
}
