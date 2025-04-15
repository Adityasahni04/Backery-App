-- init.sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  image TEXT
);

INSERT INTO products (name, category, price, stock, image)
VALUES
  ('Khari Biscuit', 'Bakery', 35.00, 120, 'https://www.swadishtrecipe.com/wp-content/uploads/2024/07/IMG_20240726_101657-768x432.jpg'),
  ('Jeera Cookies', 'Bakery', 45.00, 80, 'https://m.media-amazon.com/images/I/71dnbT7RL9L._AC_UF1000,1000_QL80_.jpg'),
  ('Atta Biscuit', 'Bakery', 30.00, 150, 'https://m.media-amazon.com/images/I/515NBDLAfwL._AC_UF1000,1000_QL80_.jpg'),
  ('Cake Rusk', 'Bakery', 60.00, 60, 'https://www.generalmillsindiabfs.in/wp-content/uploads/2020/10/Pillsbury-India-ElaichiPremiumCakeRusk-770x513-1.jpg'),
  ('Nankhatai', 'Bakery', 50.00, 90, 'https://aromaticessence.co/wp-content/uploads/2015/06/nankhatai_featured-500x500.jpg'),
  ('Fruit Cake', 'Bakery', 70.00, 40, 'https://cookingfromheart.com/wp-content/uploads/2023/01/Eggless-Rum-Fruit-Cake-Recipe.jpg'),
  ('Honey Almond Cake', 'Bakery', 120.00, 30, 'https://gingerskillet.com/wp-content/uploads/2021/02/HONEYALMONDCAKE_F.jpg'),
  ('Veg Puff', 'Bakery', 25.00, 200, 'https://easyindiancookbook.com/wp-content/uploads/2022/08/veg-puff-recipe-2.jpg');
