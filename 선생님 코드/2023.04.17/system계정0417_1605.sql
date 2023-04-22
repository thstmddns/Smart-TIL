CREATE TABLE EMP_DDL(
   EMPNO      NUMBER(4),
   ENAME      VARCHAR2(10),
   JOB        VARCHAR2(9),
   MGR        NUMBER(4),
   HIREDATE   DATE,
   SAL        NUMBER(7,2),
   COMM       NUMBER(7,2),
   DEPTNO     NUMBER(2)
);

insert into EMP_DDL values(1001, 'kimsoo','developer', 2001, '1981-01-01', 500,20,30);
insert into EMP_DDL values(1002, 'yoonhoil','salesman', 2000, '1991-01-01', 400,10,30);
insert into EMP_DDL values(1003, 'jangsosu','developer', 2001, '2001-01-01', 300,20,30);
insert into EMP_DDL(EMPNO,HIREDATE, SAL ,COMM,DEPTNO) values(1004, '2001-01-01', 300,20,30);
insert into EMP_DDL(JOB, MGR, ENAME) values('salesman',2003,'hanjinsa');
update EMP_DDL 
set JOB='salesman', MGR=2003, ENAME='hanjinsa'
where EMPNO=1004;

1.입사일이 2000년 이전에 입사한 사람들의 수당(comm)을 40으로 변경하시오.
update EMP_DDL 
set comm=40
where HIREDATE < '2000-01-01';

select comm,HIREDATE  from  EMP_DDL
where HIREDATE < '2000-01-01';

2. mgr이 2001인 사람의 급여를 1.5배로 인상하시오.

update EMP_DDL 
set sal=sal * 1.5
where mgr=2001;

select sal,mgr  from  EMP_DDL
where mgr=2001;

select * from emp_ddl;

delete from emp_ddl
where empno is null;

3. emp_ddl과 동일한 emp 테이블을 생성하시오.
단, create, select 문을 활용하시오.

create table emp
as select * from emp_ddl;

select * from emp;


4. emp_ddl의 내용을 모두 삭제하시오.
단, delete 명령을 사용하시오.
delete from emp_ddl;

5. data 삽입 후 확인
select * from emp_ddl;

6. emp_ddl 테이블과 그 내용을 모두 삭제하시오. (삭제 후 확인)
drop table emp_ddl;
select * from emp_ddl; 

7. emp 테이블의 내용을 확인
select * from emp;

8. mgr=2001인 사람의  comm을 50으로 수정
update emp set comm=50;
rollback;
select * from emp;

delete emp;
rollback;
select * from emp;

7. create와 select를 이용하여 emp 테이블의 내용을 제외한 
   구조만 복사해서 emp_ddl을 만드시오.
create table emp_ddl 
  as select * from emp 
   where 1<>1 ; 
   
   
8. insert와 select를 활용하여 emp의 내용을 emp_ddl에 복사하시오.
insert into emp_ddl 
       select * from emp;

select * from emp_ddl;

9.empno=1003 인 데이터를 삭제하시오.
delete from emp_ddl 
where empno=1003;
commit;
rollback;
select * from emp_ddl;
DESC emp_DDL;         //dmp_ddl 스키마 구조 확인

10.EMP 테이블의 구조와 내용을 복사해서 EMP_ALTER 테이블을 생성
CREATE TABLE EMP_ALTER
    AS SELECT * FROM EMP;
SELECT * FROM EMP_ALTER;

11. EMP_ALTER 테이블에 HP 필드 삽입 추가 VARCHAR2(20).
ALTER TABLE EMP_ALTER
  ADD HP VARCHAR2(20);
SELECT * FROM EMP_ALTER;

12. emp_alter 테이블의 hp열에 다음의 내용을 입력하시오.
단, update 명령을 사용하시오
update EMP_ALTER set hp='010-1111-2222' where empno=1001;
update EMP_ALTER set hp='010-2222-2222' where empno=1002;
update EMP_ALTER set hp='010-3333-2222' where empno=1003;
update EMP_ALTER set hp='010-4444-2222' where empno=1004;
SELECT * FROM EMP_ALTER;

-- 실습 12-8
ALTER TABLE EMP_ALTER
RENAME COLUMN HP TO TEL;

SELECT * FROM EMP_ALTER;

-- 실습 12-9
ALTER TABLE EMP_ALTER
MODIFY EMPNO NUMBER(5);
DESC EMP_ALTER;

13. EMP_ALTER 테이블의 ename을 varchar2(20)으로 변경하시오.
ALTER TABLE EMP_ALTER
MODIFY ename varchar2(20);
DESC EMP_ALTER;

14. EMP_ALTER 테이블의 TEL 필드 삭제 후 확인
ALTER TABLE EMP_ALTER
 DROP COLUMN TEL;
SELECT * FROM EMP_ALTER;

15. EMP_ALTER 테이블의 이름을 EMP_RENAME으로 변경
RENAME EMP_ALTER TO EMP_RENAME;
DESC EMP_ALTER;  -- 에러발생
DESC EMP_RENAME;

16. P324 Q1,2,3,4,5,6 문제를 풀어보세요.
--Q1
CREATE TABLE EMP_HW(
    EMPNO NUMBER(4),
    ENAME VARCHAR2(10),
    JOB VARCHAR2(9),
    MGR NUMBER(4),
    HIREDATE DATE,
    SAL NUMBER(7,2),
    COMM NUMBER(7,2),
    DEPTNO NUMBER(2)
);
--Q2
ALTER TABLE EMP_HW 
  ADD BIGO VARCHAR2(20);
--Q3
ALTER TABLE EMP_HW 
  MODIFY BIGO VARCHAR2(30);

--Q4
ALTER TABLE EMP_HW 
  RENAME COLUMN BIGO TO REMARK;
  
--Q5
INSERT INTO EMP_HW(EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO,remark) 
    SELECT * FROM EMP;
    
insert into emp_hw
    select empno, ename, job, mgr, hiredate, sal, comm, deptno, null 
    from emp;

--Q6
DROP TABLE EMP_HW;

SELECT * FROM EMP;
-- 논리 연산자 and or
SELECT *
  FROM EMP
 WHERE DEPTNO=30 AND JOB = 'salesman';
 
SELECT *
  FROM EMP
 WHERE DEPTNO = 30 OR JOB = 'CLERK';

--산술연산자  + - * /
SELECT *
  FROM EMP
 WHERE SAL * 12 = 3600;
 
 SELECT *
  FROM EMP
 WHERE SAL > 300;

SELECT *
  FROM EMP
 WHERE ENAME >= 'k';

SELECT *
  FROM EMP
 WHERE ENAME <= 'kim';

SELECT *
  FROM EMP
 WHERE SAL != 300;

SELECT *
  FROM EMP
 WHERE SAL <> 300;

SELECT *
  FROM EMP
 WHERE SAL ^= 300;

SELECT *
  FROM EMP
 WHERE NOT SAL = 300;
 
SELECT *
  FROM EMP
 WHERE JOB = 'developer'  OR JOB = 'salesman';

SELECT *
  FROM EMP
 WHERE JOB IN ('developer', 'salesman');
 
 
 