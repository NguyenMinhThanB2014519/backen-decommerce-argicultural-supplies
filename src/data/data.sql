drop database luanvan;
create database luanvan;

use luanvan;


CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username NVARCHAR(255),
    password NVARCHAR(255),
    email NVARCHAR(255),
    role INT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





CREATE TABLE profiles (
    profile_id INT,
    user_id INT,
    fullname NVARCHAR(255),
    address TEXT, 
    phone NVARCHAR(255),
    PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);




CREATE TABLE categories (
    category_id INT,
    category_name NVARCHAR(255),
    PRIMARY KEY (category_id)
);


CREATE TABLE products (
    product_id INT, 
    category_id INT,
    product_name NVARCHAR(255),
    PRIMARY KEY (product_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);



CREATE TABLE orders (
    order_id INT,
    user_id INT,
    total_price DECIMAL(10, 2),
    order_status ENUM('pending', 'shipped', 'delivered', 'canceled'),
    created_at TIMESTAMP,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);

CREATE TABLE order_items (
    order_item_id INT,
    order_id INT, 
    product_id INT, 
    quantity INT,
    price DECIMAL(10, 2),
    PRIMARY KEY (order_item_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);


-- Insert 10 users
INSERT INTO users (user_id, username, password, email, role) VALUES
(1, 'nguyenvan01', 'password1', 'nguyenvan01@example.com', 1),
(2, 'tranthi02', 'password2', 'tranthi02@example.com', 0),
(3, 'phamhoang03', 'password3', 'phamhoang03@example.com', 0),
(4, 'leminh04', 'password4', 'leminh04@example.com', 0),
(5, 'trinhhieu05', 'password5', 'trinhhieu05@example.com', 0),
(6, 'buituan06', 'password6', 'buituan06@example.com', 0),
(7, 'dangthu07', 'password7', 'dangthu07@example.com', 0),
(8, 'doanlan08', 'password8', 'doanlan08@example.com', 0),
(9, 'huynhhoang09', 'password9', 'huynhhoang09@example.com', 0),
(10, 'hoangminh10', 'password10', 'hoangminh10@example.com', 0);

-- Insert 10 profiles
INSERT INTO profiles (profile_id, user_id, fullname, address, phone) VALUES
(1, 1, 'Nguyen Van A', '123 Le Loi, TP. HCM', '0123456789'),
(2, 2, 'Tran Thi B', '456 Nguyen Trai, TP. HCM', '0123456790'),
(3, 3, 'Pham Hoang C', '789 Pham Van Dong, Ha Noi', '0123456791'),
(4, 4, 'Le Minh D', '123 Cach Mang, Da Nang', '0123456792'),
(5, 5, 'Trinh Hieu E', '321 Dien Bien Phu, TP. HCM', '0123456793'),
(6, 6, 'Bui Tuan F', '654 Tran Hung Dao, TP. HCM', '0123456794'),
(7, 7, 'Dang Thu G', '321 Vo Thi Sau, TP. HCM', '0123456795'),
(8, 8, 'Doan Lan H', '987 Le Duan, Ha Noi', '0123456796'),
(9, 9, 'Huynh Hoang I', '543 Vo Nguyen Giap, Da Nang', '0123456797'),
(10, 10, 'Hoang Minh J', '789 Vo Van Kiet, TP. HCM', '0123456798');

-- Insert 10 categories (agricultural supplies)
INSERT INTO categories (category_id, category_name) VALUES
(1, 'Fertilizers'),
(2, 'Seeds'),
(3, 'Pesticides'),
(4, 'Farm Machinery'),
(5, 'Irrigation Tools'),
(6, 'Animal Feed'),
(7, 'Greenhouse Supplies'),
(8, 'Organic Fertilizers'),
(9, 'Plant Protection'),
(10, 'Soil Conditioners');

-- Insert 10 products related to agricultural supplies
INSERT INTO products (product_id, category_id, product_name) VALUES
(1, 1, 'NPK Fertilizer 16-16-8'),
(2, 1, 'Urea Fertilizer'),
(3, 2, 'Hybrid Rice Seeds'),
(4, 2, 'Maize Seeds'),
(5, 3, 'Insecticide - Fipronil'),
(6, 3, 'Herbicide - Glyphosate'),
(7, 4, 'Mini Tractor'),
(8, 4, 'Rotavator'),
(9, 5, 'Drip Irrigation System'),
(10, 5, 'Sprinkler Irrigation Kit');

-- Insert 10 orders
INSERT INTO orders (order_id, user_id, total_price, order_status, created_at) VALUES
(1, 1, 120.50, 'pending', CURRENT_TIMESTAMP),
(2, 2, 240.00, 'shipped', CURRENT_TIMESTAMP),
(3, 3, 75.30, 'delivered', CURRENT_TIMESTAMP),
(4, 4, 500.20, 'canceled', CURRENT_TIMESTAMP),
(5, 5, 150.00, 'pending', CURRENT_TIMESTAMP),
(6, 6, 600.50, 'shipped', CURRENT_TIMESTAMP),
(7, 7, 350.00, 'delivered', CURRENT_TIMESTAMP),
(8, 8, 420.70, 'pending', CURRENT_TIMESTAMP),
(9, 9, 99.90, 'delivered', CURRENT_TIMESTAMP),
(10, 10, 299.00, 'pending', CURRENT_TIMESTAMP);

-- Insert 10 order items (one product per order as an example)
INSERT INTO order_items (order_item_id, order_id, product_id, quantity, price) VALUES
(1, 1, 1, 2, 60.25),
(2, 2, 2, 4, 60.00),
(3, 3, 3, 5, 15.06),
(4, 4, 4, 2, 250.10),
(5, 5, 5, 3, 50.00),
(6, 6, 6, 1, 600.50),
(7, 7, 7, 1, 350.00),
(8, 8, 8, 2, 210.35),
(9, 9, 9, 1, 99.90),
(10, 10, 10, 3, 99.67);



select * from categories ca join products pr on ca.category_id = pr.category_id;


DELIMITER $$

CREATE PROCEDURE getProductsAndCategoryName()
BEGIN
    SELECT ca.category_id, ca.category_name, pr.product_id, pr.product_name
    FROM categories ca
    JOIN products pr ON ca.category_id = pr.category_id;
END$$

DELIMITER ;
-- drop procedure getproductsbycategory;
call getProductsAndCategoryName();


DELIMITER $$

CREATE PROCEDURE LaySanPhamTheoDanhMuc(IN p_category_id INT)
BEGIN
    SELECT ca.category_id, ca.category_name, pr.product_id, pr.product_name
    FROM categories ca
    JOIN products pr ON ca.category_id = pr.category_id
    WHERE ca.category_id = p_category_id;
END$$

DELIMITER ;

CALL LaySanPhamTheoDanhMuc(1);



