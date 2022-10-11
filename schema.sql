CREATE TABLE products (
  id serial PRIMARY KEY,
  brand_name varchar,
  product_name varchar,
  active_ing varchar,
  price money,
  fill_size_oz int,
  fill_size_ml int,
  qty int
);
