-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `departments` (
	`dept_no` char(4) NOT NULL,
	`dept_name` varchar(40) NOT NULL,
	CONSTRAINT `departments_dept_no` PRIMARY KEY(`dept_no`),
	CONSTRAINT `dept_name` UNIQUE(`dept_name`)
);
--> statement-breakpoint
CREATE TABLE `dept_emp` (
	`emp_no` int NOT NULL,
	`dept_no` char(4) NOT NULL,
	`from_date` date NOT NULL,
	`to_date` date NOT NULL,
	CONSTRAINT `dept_emp_emp_no_dept_no` PRIMARY KEY(`emp_no`,`dept_no`)
);
--> statement-breakpoint
CREATE TABLE `dept_manager` (
	`emp_no` int NOT NULL,
	`dept_no` char(4) NOT NULL,
	`from_date` date NOT NULL,
	`to_date` date NOT NULL,
	CONSTRAINT `dept_manager_emp_no_dept_no` PRIMARY KEY(`emp_no`,`dept_no`)
);
--> statement-breakpoint
CREATE TABLE `employees` (
	`emp_no` int NOT NULL,
	`birth_date` date NOT NULL,
	`first_name` varchar(14) NOT NULL,
	`last_name` varchar(16) NOT NULL,
	`gender` enum('M','F') NOT NULL,
	`hire_date` date NOT NULL,
	CONSTRAINT `employees_emp_no` PRIMARY KEY(`emp_no`)
);
--> statement-breakpoint
CREATE TABLE `salaries` (
	`emp_no` int NOT NULL,
	`salary` int NOT NULL,
	`from_date` date NOT NULL,
	`to_date` date NOT NULL,
	CONSTRAINT `salaries_emp_no_from_date` PRIMARY KEY(`emp_no`,`from_date`)
);
--> statement-breakpoint
CREATE TABLE `titles` (
	`emp_no` int NOT NULL,
	`title` varchar(50) NOT NULL,
	`from_date` date NOT NULL,
	`to_date` date,
	CONSTRAINT `titles_emp_no_title_from_date` PRIMARY KEY(`emp_no`,`title`,`from_date`)
);
--> statement-breakpoint
ALTER TABLE `dept_emp` ADD CONSTRAINT `dept_emp_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `dept_emp` ADD CONSTRAINT `dept_emp_ibfk_2` FOREIGN KEY (`dept_no`) REFERENCES `departments`(`dept_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `dept_manager` ADD CONSTRAINT `dept_manager_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `dept_manager` ADD CONSTRAINT `dept_manager_ibfk_2` FOREIGN KEY (`dept_no`) REFERENCES `departments`(`dept_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `salaries` ADD CONSTRAINT `salaries_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `titles` ADD CONSTRAINT `titles_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `dept_no` ON `dept_emp` (`dept_no`);--> statement-breakpoint
CREATE INDEX `dept_no` ON `dept_manager` (`dept_no`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `current_dept_emp` AS (select `employees`.`l`.`emp_no` AS `emp_no`,`d`.`dept_no` AS `dept_no`,`employees`.`l`.`from_date` AS `from_date`,`employees`.`l`.`to_date` AS `to_date` from (`employees`.`dept_emp` `d` join `employees`.`dept_emp_latest_date` `l` on(((`d`.`emp_no` = `employees`.`l`.`emp_no`) and (`d`.`from_date` = `employees`.`l`.`from_date`) and (`employees`.`l`.`to_date` = `d`.`to_date`)))));--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `dept_emp_latest_date` AS (select `employees`.`dept_emp`.`emp_no` AS `emp_no`,max(`employees`.`dept_emp`.`from_date`) AS `from_date`,max(`employees`.`dept_emp`.`to_date`) AS `to_date` from `employees`.`dept_emp` group by `employees`.`dept_emp`.`emp_no`);
*/