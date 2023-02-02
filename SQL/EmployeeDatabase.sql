create database CompanyDatabase;
use CompanyDatabase;

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    birth_date DATE,
    sex VARCHAR(2),
    salary INT,
    super_id INT,
    branch_id INT
);

CREATE TABLE branch (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(10),
    mgr_id INT,
    mgr_start_date DATE
);

describe branch;

CREATE TABLE client (
    client_id INT PRIMARY KEY,
    client_name VARCHAR(10),
    branch_id INT
);

CREATE TABLE works_with (
    emp_id INT,
    client_id INT,
    total_sales INT,
    PRIMARY KEY (emp_id , client_id)
);

CREATE TABLE branch_supplier (
    branch_id INT,
    supplier_name VARCHAR(10),
    supply_type VARCHAR(10),
    PRIMARY KEY (branch_id , supplier_name)
);

alter table employee
add foreign key(super_id)
references employee(emp_id);

alter table employee
add foreign key(branch_id)
references branch(branch_id);

alter table branch
add foreign key(mgr_id)
references employee(emp_id);

alter table client
add foreign key(branch_id)
references branch(branch_id);

insert into employee values(100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);

insert into branch values(1, 'Corporate', 100, '2006-02-09');

update employee
set branch_id = 1
where emp_id = 100;

insert into employee values(101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1);

insert into employee values(102, 'Michael', 'Scott', '1961-05-11', 'M', 75000, 100, NULL);

insert into branch values(2, 'Scranton', 102, '1992-04-06');

update employee
set branch_id = 2
where emp_id = 102;

INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2);
INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2);
INSERT INTO employee VALUES(105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2);

insert into employee values(106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, NULL);

insert into branch values(3, 'Stanford', 106, '1998-02-13');

update employee
set branch_id = 3
where emp_id = 106;

INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3);
INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);

select * from employee;

Alter table client
modify client_name varchar(30);

insert into client values(400, 'Dunmore HighSchool', 2);
insert into client values(401, 'Lackawana Country', 2);
insert into client values(402, 'FedEx', 3);
insert into client values(403, 'John Daly LLC', 3);
insert into client values(404, 'Scranton WhitePages', 2);
insert into client values(405, 'Times NewsPaper', 3);
insert into client values(406, 'FedEx', 2);

select * from client;

insert into works_with values(105, 400, 55000);
insert into works_with values(102, 401, 267000);
insert into works_with values(108, 402, 22500);
insert into works_with values(107, 403, 5000);
insert into works_with values(108, 403, 12000);
insert into works_with values(105, 404, 33000);

delete from works_with
where emp_id = 1 AND client_id = 1;

select * from works_with;

insert into works_with values(107,405,26000);
insert into works_with values(102,406,15000);
insert into works_with values(105,406,130000);

alter table branch_supplier
modify supplier_name varchar(50);

alter table branch_supplier
modify supply_type varchar(50);

insert into branch_supplier values(2, 'Hammer Mill', 'paper');
insert into branch_supplier values(2, 'Uni-Ball', 'Writing Utensils');
insert into branch_supplier values(3, 'Patriot Paper', 'Paper');
insert into branch_supplier values(2, 'JT Forms and Labels', 'Custom forms');
insert into branch_supplier values(3, 'Uni-Ball', 'Writing Utensils');

INSERT INTO branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');

select * from branch_supplier;