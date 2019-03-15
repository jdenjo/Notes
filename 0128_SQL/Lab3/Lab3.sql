-- Select the product whose stock has the most value (use sale price)

SELECT name, SUM(sale_price * remaining_quantity) AS total_value
    FROM products
    GROUP BY name
    ORDER BY total_value
    DESC
    LIMIT 1;

-- Select the most expensive product whose price is between 25 and 50 with remaining quantity
SELECT MAX(price) FROM products
    WHERE price > 25
    AND price < 50
    AND remaining_quantity > 0 
    AND remaining_quantity IS NOT NULL;

-- Select all products on sale with remaining quantity ordered by their price and then their name
SELECT * from products
    WHERE sale_price < price
    AND remaining_quantity > 0 
    AND remaining_quantity IS NOT NULL
    ORDER BY price, name; 

-- Select the second set 20 results based on the previous query
SELECT * from products
    WHERE sale_price < price
    AND remaining_quantity > 0 
    AND remaining_quantity IS NOT NULL
    ORDER BY price, name
    LIMIT 20 
    OFFSET 2; 

-- Find the average price of all products

SELECT ROUND(AVG(price)) from products;

-- Find the average sale_price of all products that are on sale

SELECT ROUND(AVG(price)) from products
    WHERE sale_price < price;

-- Find the average price of all products that are on sale with remaining quantity

SELECT ROUND(AVG(price)) from products
    WHERE sale_price < price
    AND remaining_quantity > 0 
    AND remaining_quantity IS NOT NULL;

-- Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0

UPDATE products
    SET remaining_quantity = 0 
    WHERE name ILIKE '%paper%';

-- Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25

UPDATE products
    SET remaining_quantity = floor(random() * 20 +1) + 5  
    WHERE name ILIKE '%paper%' 
    OR name ILIKE '%steel%';

-- Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity

SELECT * from products 
    ORDER BY price, sales_price ASC
    LIMIT 10
    OFFSET 2;

-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`