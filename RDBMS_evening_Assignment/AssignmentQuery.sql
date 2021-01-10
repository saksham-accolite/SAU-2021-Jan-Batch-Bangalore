/*  ddl   */
create database worldcupdb;
use worldcupdb;

create table list_of_finals (
year int unique,
host varchar(30),
stadiumId int not null,
winner varchar(30) not null,
result varchar(100) not null,
runnerup varchar(30) not null,
primary key(year)
);


create table team (
teamid int unique,
country varchar(30) not null,
name varchar(30) not null,
captain_name varchar(30) not null,
manager varchar(30) not null,
year int not null,
primary key(teamid)
);

create table stadium(
stadiumid int unique,
name varchar(30) not null,
place varchar(30) not null,
country varchar(30) not null,
capacity int not null,
primary key(stadiumid)
);

create table cricket_match(
matchid int unique, 
team1id int not null,
team2id int not null,
result varchar(30) not null,
winner varchar(30) not null,
match_type varchar(30) not null,
match_time varchar(30) not null,
stadiumid int not null,
primary key(matchid),
foreign key(team1id) references team(teamid),
foreign key(team2id) references team(teamid),
foreign key(stadiumid) references stadium(stadiumid)
);



create table player (
playerid int unique,
teamid int not null,
name varchar(30) not null,
jercyno int not null,
playertype varchar(30) not null,
primary key(playerid),
foreign key(teamid) references team(teamid)
);

create table scoreboard(
playerid int not null,
matchid int not null,
teamid int not null,
runs int not null,
wicket int not null,
balls_faced int not null,
balls_bowled int not null,
constraint pk_scoreboard primary key(playerid, matchid),
foreign key(playerid) references player(playerid),
foreign key(matchid) references cricket_match(matchid),
foreign key(teamid) references team(teamid)

);


/*     dml   
..............
...................................
...........................................................  */

insert into stadium values (1, 'wankhade', 'mumbai','India',1000);

insert into list_of_finals values(2021, 'india', 1, 'India', 'india won by 40 runs', 'NewZeland');

insert into team values(1, 'India', 'Team_India', 'Virat Kohli', 'Indian Manager Name1',2021);

insert into team values(2, 'NewZeland', 'Team_NewZeland', 'NewZeland Captain name1', 'NewZeland Manager Name1',2021);

insert into cricket_match values(1, 1, 2, 'india won by 40 runs','India', 'world cup finale', '10:00 AM', 1 );

insert into player values(1, 1, 'Virat', '10', 'allrounder');
insert into player values(2, 1, 'Rohit', '20', 'bowler');
insert into player values(3, 1, 'Dhoni', '30', 'batsman');
insert into player values(4, 1, 'player4', '40', 'allrounder');
insert into player values(5, 1, 'player5', '50', 'allrounder');
insert into player values(6, 1, 'player6', '60', 'batsman');
insert into player values(7, 1, 'player7', '70', 'allrounder');
insert into player values(8, 1, 'player8', '80', 'batsman');
insert into player values(9, 1, 'player9', '90', 'allrounder');
insert into player values(10, 1, 'player10', '23', 'allrounder');
insert into player values(11, 1, 'player11', '19', 'allrounder');


insert into player values(22, 2, 'player1', '11', 'allrounder');
insert into player values(12, 2, 'player2', '21', 'bowler');
insert into player values(13, 2, 'player3', '31', 'batsman');
insert into player values(14, 2, 'player4', '41', 'allrounder');
insert into player values(15, 2, 'player5', '51', 'allrounder');
insert into player values(16, 2, 'player6', '61', 'batsman');
insert into player values(17, 2, 'player7', '71', 'allrounder');
insert into player values(18, 2, 'player8', '81', 'batsman');
insert into player values(19, 2, 'player9', '91', 'allrounder');
insert into player values(20, 2, 'player10', '24', 'allrounder');
insert into player values(21, 2, 'player11', '33', 'allrounder');

insert into scoreboard values(1,1,1,11,2,5,6);
insert into scoreboard values(2,1,1,23,3,5,6);
insert into scoreboard values(3,1,1,10,1,5,6);
insert into scoreboard values(4,1,1,45,0,5,6);
insert into scoreboard values(5,1,1,5,1,5,6);
insert into scoreboard values(6,1,1,44,1,5,6);
insert into scoreboard values(7,1,1,3,0,5,6);
insert into scoreboard values(8,1,1,34,0,5,6);
insert into scoreboard values(9,1,1,10,1,5,6);
insert into scoreboard values(10,1,1,10,0,5,6);
insert into scoreboard values(11,1,1,10,1,5,6);
insert into scoreboard values(12,1,2,10,0,5,6);
insert into scoreboard values(13,1,2,3,1,5,6);
insert into scoreboard values(14,1,2,4,0,5,6);
insert into scoreboard values(15,1,2,6,1,5,6);
insert into scoreboard values(16,1,2,7,0,5,6);
insert into scoreboard values(17,1,2,5,1,5,6);
insert into scoreboard values(18,1,2,4,0,5,6);
insert into scoreboard values(19,1,2,10,0,5,6);
insert into scoreboard values(20,1,2,10,1,5,6);
insert into scoreboard values(21,1,2,10,1,5,6);
insert into scoreboard values(22,1,2,10,1,5,6);






/*     Assignment   
..............
...................................
...........................................................  */

/* Ans.(a) :  sample data is populated in all tables  */

/*Ans (b) :  Fetch the top 5 batsmen who scored the maximum runs. */

select name, totalruns from player as p1 Inner Join (select playerid, sum(runs) as totalruns from scoreboard group by playerid order by sum(runs) desc limit 5) as p2 on p1.playerid=p2.playerid;

/* Ans (c). Fetch the top 5 bowlers who has taken the maximum wickets. */ 
select name, totalWickets from player as p1 Inner Join (select playerid, sum(wicket) as totalWickets from scoreboard group by playerid order by sum(wicket) desc limit 5) as p2 on p1.playerid=p2.playerid;

/* Ans (d) Fetch the average score scored by each team considering the matches played. */ 
select country, name, captain_name, manager, avgScore from team as t1 inner join (select teamid, avg(runs) as avgScore from scoreboard group by teamid) as t2 on t1.teamid=t2.teamid;

/* Ans (f). Create a procedure which takes country as the input and gives the highest score of the country up to date, as output*/
DELIMITER $$
DROP PROCEDURE IF EXISTS CountryHighestScore$$
CREATE PROCEDURE CountryHighestScore(country1 VARCHAR(255), OUT score INT)
BEGIN
    select max(scores) into score from (select teamid from team) as t1 inner join (select teamid, sum(runs) as scores from scoreboard group by teamid having teamid=any(select teamid from team where country='india')) as t2 on t1.teamid=t2.teamid;
END$$
DELIMITER ;
CALL CountryHighestScore('India',@score);
SELECT @score;


/* Ans (e)  Increase the scores of each batsmen in the team, which has the least average computed in Step d, by 10 runs.*/ 

update scoreboard set runs=runs+10 where playerid = any(select playerid from (select playerid from player where not playertype='bowler') as p1 inner join (select playerid as pid2 from scoreboard where teamid=(select teamid from scoreboard group by teamid order by avg(runs) asc limit 1)) as p2 on p1.playerid=p2.pid2 );