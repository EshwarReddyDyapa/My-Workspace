insert into student values(2, 'test2', 'subject2');

insert into student (student_id, student_name) 
values(7,'name7');

select * from student limit 0, 15;

update student
set student_subject = 'changed'
where student_subject = 'subject4';

delete from student
where student.student_id = 2;

use companydatabase;
-- find employees ordered by salary
select * from employee order by employee.salary;

-- Find employees ordered by sex and name
select * from employee
order by employee.sex, employee.first_name, employee.last_name;

-- find first 5 employees from table
select * from employee LIMIT 5;

-- distict keyword for getting the unique values from the table
select count(DISTINCT employee.sex) as count from employee;

-- find number of female employees born after 1970
select count(emp_id) from employee
where employee.birth_date > '1970-01-01' and employee.sex='F';

-- average of employee salary
select avg(employee.salary) from employee;

select sum(employee.salary) from employee;

select sex, count(sex) from employee 
group by sex;

-- find total sales of each employee
select employee.emp_id, employee.first_name, sum(works_with.total_sales) as 'total sales'
from 
employee join works_with on employee.emp_id = works_with.emp_id
group by employee.emp_id, employee.first_name;

select client.client_id, client.client_name, sum(works_with.total_sales) as 'total'
from client join works_with
on client.client_id = works_with.client_id
group by client.client_id, client.client_name;

select * from employee
where employee.last_name like '%on';

use companydatabase;

select * from employee;

-- employee born in october
select emp_id, first_name, birth_date from employee
where birth_date like '%-02-%';

select branch.branch_name, employee.first_name, employee.emp_id from
branch left join employee on employee.emp_id = branch.mgr_id;

-- names of employee who have sold over 30000 to a single client
select employee.first_name, works_with.total_sales from
employee join works_with on employee.emp_id = works_with.emp_id
where works_with.total_sales > 30000;

-- all clients handled by michael scott's branch
select client.client_name from client
where client.branch_id in (
	select employee.branch_id from employee
    where employee.emp_id = 102
);




















