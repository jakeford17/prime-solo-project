--DATABASE NAME: hockeyprospectdb

--TABLE "user"
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--TABLE "forward"
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80),
    "admin" INT DEFAULT 1
);

SELECT * FROM "user";

CREATE TABLE "forward" (
	"id" SERIAL PRIMARY KEY,
	"fname" VARCHAR (50) NOT NULL,
	"lname" VARCHAR (50) NOT NULL,
	"dob" DATE NOT NULL,
	"position" VARCHAR (20),
	"shoots" VARCHAR (1),
	"team" VARCHAR (30),
	"league" VARCHAR (20),
	"height" VARCHAR (5),
	"weight" INT,
	"epurl" VARCHAR (200),
	"skating" INT,
	"skating_comments" TEXT,
	"puck_skills" INT,
	"puck_skills_comments" TEXT,
	"competitiveness" INT,
	"comp_comments" TEXT,
	"physicality" INT,
	"phys_comments" TEXT,
	"iq" INT,
	"iq_comments" TEXT,
	"defense" INT,
	"def_comments" TEXT,
	"psych" INT,
	"psych_comments" TEXT,
	"player_type" VARCHAR (50),
	"round" VARCHAR (10)
);

SELECT * FROM "forward";

DELETE FROM "forward" WHERE "id" > 0;

--TABLE "defense"
CREATE TABLE "defense" (
	"id" SERIAL PRIMARY KEY,
	"fname" VARCHAR (50) NOT NULL,
	"lname" VARCHAR (50) NOT NULL,
	"dob" DATE NOT NULL,
	"shoots" VARCHAR (1),
	"team" VARCHAR (30),
	"league" VARCHAR (20),
	"height" VARCHAR (5),
	"weight" INT,
	"epurl" VARCHAR (200),
	"skating" INT,
	"skating_comments" TEXT,
	"puck_skills" INT,
	"puck_skills_comments" TEXT,
	"competitiveness" INT,
	"comp_comments" TEXT,
	"physicality" INT,
	"phys_comments" TEXT,
	"iq" INT,
	"iq_comments" TEXT,
	"defense" INT,
	"def_comments" TEXT,
	"psych" INT,
	"psych_comments" TEXT,
	"player_type" VARCHAR (50),
	"round" VARCHAR (10)
);

SELECT * FROM "defense";

DELETE FROM "defense" WHERE "id" > 0;

--TABLE "goalie"
CREATE TABLE "goalie" (
	"id" SERIAL PRIMARY KEY,
	"fname" VARCHAR (50) NOT NULL,
	"lname" VARCHAR (50) NOT NULL,
	"dob" DATE NOT NULL,
	"catches" VARCHAR (1),
	"team" VARCHAR (30),
	"league" VARCHAR (20),
	"height" VARCHAR (5),
	"weight" INT,
	"epurl" VARCHAR (200),
	"net_coverage" INT,
	"nc_comments" TEXT,
	"quickness" INT,
	"quickness_comments" TEXT,
	"rebound_control" INT,
	"rc_comments" TEXT,
	"competitiveness" INT,
	"comp_comments" TEXT,
	"skills" INT,
	"skills_comments" TEXT,
	"psych" INT,
	"psych_comments" TEXT,
	"where" VARCHAR (50),
	"style" VARCHAR (50),
	"personality" VARCHAR (50),
	"round" VARCHAR (10)
);

SELECT * FROM "goalie";

DELETE FROM "defense" WHERE "id" > 0;

--INSERTING DATA INTO TABLES
--FORWARDS
INSERT INTO "forward" ("fname", "lname", "dob", "position", "shoots", "team", "league", "height", "weight", "epurl", "skating", "skating_comments", "puck_skills", "puck_skills_comments", "competitiveness", "comp_comments", "physicality", "phys_comments", "iq", "iq_comments", "defense", "def_comments", "psych", "psych_comments", "player_type", "round")
VALUES ('Alexis', 'Lafreniere', '10-11-01', 'LW', 'L', 'Cape Breton', 'QMJHL', '6-1', '192', 'https://www.eliteprospects.com/player/296697/alexis-lafreniere',  9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 1), ('Carter', 'Savoie', '01-23-02', 'LW', 'L', 'Sherwood Park', 'AJHL', '5-9', '170', 'https://www.eliteprospects.com/player/201925/carter-savoie', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 3), ('Luke', 'Tuch', '03-07-02', 'LW', 'L', 'USNDTP', 'USHL', '6-2', '203', 'https://www.eliteprospects.com/player/470086/luke-tuch', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 2), ('Yu', 'Sato', '04-17-02', 'LW', 'L', 'Quebec', 'QMJHL', '5-9', '163', 'https://www.eliteprospects.com/player/589908/yu-sato', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 7), ('Ryder', 'Rolston', '10-31-01', 'C/RW', 'R', 'Waterloo', 'USHL', '6-0', '165', 'https://www.eliteprospects.com/player/369853/ryder-rolston', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 3), ('Antonio', 'Stranges', '02-05-02', 'C/LW', 'L', 'London', 'OHL', '5-10', '170', 'https://www.eliteprospects.com/player/369848/antonio-stranges', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 2), ('Luke', 'Evangelista', '02-21-02', 'RW', 'R', 'London', 'OHL', '5-11', '165', 'https://www.eliteprospects.com/player/503976/luke-evangelista', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 4), ('William ', 'Dufour', '01-28-02', 'RW', 'R', 'Chicoutimi', 'QMJHL', '6-2', '181', 'https://www.eliteprospects.com/player/294583/william-dufour', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 5), ('Cole ', 'Mackay', '06-13-01', 'RW', 'R', 'Sault Ste. Marie', 'OHL', '5-11', '185', 'https://www.eliteprospects.com/player/360061/cole-mackay', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 6), ('Jean-Luc', 'Foudy', '05-13-02', 'C', 'R', 'Windsor', 'OHL', '5-11', '168', 'https://www.eliteprospects.com/player/360061/cole-mackay', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 2), ('Zion', 'Nybeck', '05-12-02', 'RW', 'L', 'HV71', 'SuperElit', '5-8', '176', 'https://www.eliteprospects.com/player/470015/zion-nybeck', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 3), ('Carson', 'Bantle', '01-22-02', 'LW', 'L', 'Madison', 'USHL', '6-4', '201', 'https://www.eliteprospects.com/player/201849/carson-bantle', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 7), ('Cross', 'Hanas', '01-05-02', 'LW', 'L', 'Portland', 'WHL', '6-1', '165', 'https://www.eliteprospects.com/player/252712/cross-hanas', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 7), ('Jake', 'Neighbours', '03-29-02', 'LW', 'L', 'Edmonton', 'WHL', '5-11', '201', 'https://www.eliteprospects.com/player/391048/jake-neighbours', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 3), ('Primo', 'Self', '11-27-01', 'C/RW', 'R', 'Cowichan Valley', 'BCHL', '5-9', '170', 'https://www.eliteprospects.com/player/415484/primo-self', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 5), ('Landon', 'Slaggert', '06-25-02', 'C', 'L', 'USNTDP', 'USHL', '6-0', '183', 'https://www.eliteprospects.com/player/418245/landon-slaggert', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 4), ('Ozzy', 'Wiesblatt', '03-09-02', 'RW', 'R', 'Prince Albert', 'WHL', '5-10', '194', 'https://www.eliteprospects.com/player/201810/ozzy-wiesblatt', 9, 'Powerful skater with high-end speed', 10, 'Hard, accurate shot and great hands', 8, 'Consistent effort level, captain of his team', 7, 'Willing to go to dirty areas to make a play', 10, 'Amazing vision and playmaking ability; makes teammates better', 8, 'Reliable backchecker with good anticipation', 10, 'Confident player and great leadership abilities', 'Skilled Forward', 2);

--DEFENSE
INSERT INTO "defense" ("fname", "lname", "dob", "shoots", "team", "league", "height", "weight", "epurl", "skating", "skating_comments", "puck_skills", "puck_skills_comments", "competitiveness", "comp_comments", "physicality", "phys_comments", "iq", "iq_comments", "defense", "def_comments", "psych", "psych_comments", "player_type", "round")
VALUES ('Jamie', 'Drysdale', '04-08-02', 'R', 'Erie', 'OHL', '5-11', '165', 'https://www.eliteprospects.com/player/201868/jamie-drysdale',  10, 'Elite skater with a flawless stride', 9, 'Great hands and a really good shot', 7, 'Consistent effort level', 6, 'Willing to play physical, but needs to add muscle', 10, 'Amazing vision and playmaking ability, great nose for the net', 8, 'Very solid in his own end', 10, 'Confident player and great leadership abilities', 'Skilled/Offensive Defenseman', 1), ('Justin', 'Barron', '11-15-01', 'R', 'Halifax', 'QMJHL', '6-2', '187', 'https://www.eliteprospects.com/player/294613/justin-barron', 10, 'Great skating allows him to be effective in all three zones', 6, 'Good shot and average stickhandling skills', 8, 'Very good work ethic and very consistent', 7, 'Uses his bigger frame to his advantage', 10, 'Very smart player with outstanding vision and decision-making ability', 10, 'Very stout defensively; rarely gets beaten 1-on-1', 7, 'Part of the Mooseheads leadership group and always a member of Team Canada at international competitions', 'Stay-at-Home/Defensive Defenseman', 1), ('Shakir', 'Mukhamadullin', '01-10-02', 'L', 'Salavat Yulaev Ufa', 'KHL', '6-2', '170', 'https://www.eliteprospects.com/player/552042/shakir-mukhamadullin', 3, 'Agility and footwork are major weaknesses that need improvement', 7, 'Stickhandling could be better, but he has a heavy, accurate shot from the point', 9, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great at using his frame to defend and rub out players along the boards', 9, 'Very smart player who you can rely on to make smart breakout passes; does not force the puck', 8, 'Strong in his own end and great at killing penalties', 7, 'Confident player who communicates effectively; may need to adjust to language barrier in North America', 'Stay-at-Home/Defensive Defenseman', 2), ('Kienan', 'Lundstrom', '06-23-98', 'L', 'Green Bay', 'USHL', '5-10', '170', 'https://www.eliteprospects.com/player/321310/kienan-lundstrom', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 1), ('Jake', 'Boltmann', '10-19-01', 'R', 'Lincoln', 'USHL', '6-0', '181', 'https://www.eliteprospects.com/player/494419/jake-boltmann', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 4), ('Kasper', 'Puutio', '06-03-02', 'R', 'Swift Current', 'WHL', '6-0', '185', 'https://www.eliteprospects.com/player/467380/kasper-puutio', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 3), ('Nolan', 'Seed', '04-24-02', 'L', 'Owen Sound', 'OHL', '5-11', '168', 'https://www.eliteprospects.com/player/413833/nolan-seed', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 7), ('Casey', 'Roepke', '05-02-02', 'L', 'Green Bay', 'USHL', '6-0', '181', 'https://www.eliteprospects.com/player/541747/casey-roepke', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 7), ('Ben', 'Roode', '01-25-02', 'R', 'Acadie-Bathurst', 'QMJHL', '6-5', '207', 'https://www.eliteprospects.com/player/201790/ben-roode', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 3), ('Leo', 'Loof', '04-25-02', 'L', 'Farjestad', 'SuperElit', '6-0', '168', 'https://www.eliteprospects.com/player/412461/leo-loof', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 2), ('Yan', 'Kuznetsov', '03-21-02', 'L', 'UConn', 'NCAA', '6-3', '201', 'https://www.eliteprospects.com/player/440410/yan-kuznetsov', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 4), ('Daemon', 'Hunt', '05-15-02', 'L', 'Moose Jaw', 'WHL', '6-0', '198', 'https://www.eliteprospects.com/player/201837/daemon-hunt', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 2), ('Jacob', 'Murray', '04-11-02', 'L', 'Kingston', 'OHL', '6-2', '198', 'https://www.eliteprospects.com/player/503980/jacob-murray', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 5);

--GOALIES
INSERT INTO "goalie" ("fname", "lname", "dob", "catches", "team", "league", "height", "weight", "epurl", "net_coverage", "nc_comments", "quickness", "quickness_comments", "rebound_control", "rc_comments", "competitiveness", "comp_comments", "skills", "skills_comments", "psych", "psych_comments", "where", "style", "personality", "round")
VALUES ('Yaroslav', 'Askarov', '06-16-02', 'R', 'SKA-Neva St. Petersburg', 'VHL', '6-3', '176', 'https://www.eliteprospects.com/player/552036/yaroslav-askarov',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 1), ('Drew', 'Commesso', '07-19-02', 'L', 'USNTDP', 'USHL', '6-2', '181', 'https://www.eliteprospects.com/player/201741/drew-commesso',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 4), ('Nick', 'Malik', '04-26-02', 'L', 'HC Frydek-Mistek', 'Czech-2', '6-2', '174', 'eliteprospects.com/player/388222/nick-malik',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 2), ('Antoine', 'Coulombe', '03-16-02', 'R', 'Shawinigan', 'QMJHL', '5-11', '187', 'https://www.eliteprospects.com/player/341613/antoine-coulombe',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 2), ('Garin', 'Bjorklund', '05-28-02', 'L', 'Medicine Hat', 'WHL', '6-2', '168', 'https://www.eliteprospects.com/player/413156/garin-bjorklund',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 'Undrafted'), ('Fabio', 'Iacobo', '10-26-01', 'L', 'Victoriaville', 'QMJHL', '6-2', '190', 'https://www.eliteprospects.com/player/410685/fabio-iacobo',  9, 'Large frame covers most of the net; does not give shooters much space to shoot', 9, 'Great reflexes and recovers very quickly', 9, 'Traps the puck well or directs rebounds to soft spots on the ice', 10, 'Mentally strong and able to shake off goals to keep his team in the game at pivotal times', 7, 'Nice skillset, but could improve at playing the puck', 10, 'Very consistent and confident, no matter the game situation', 'Mostly in Paint', 'Quick Reaction', 'Calm/Laid Back', 6);

--FOR PRESENTATION (DELETE DURING PRESENTATION): KIENAN LUNDSTROM
INSERT INTO "defense" ("fname", "lname", "dob", "shoots", "team", "league", "height", "weight", "epurl", "skating", "skating_comments", "puck_skills", "puck_skills_comments", "competitiveness", "comp_comments", "physicality", "phys_comments", "iq", "iq_comments", "defense", "def_comments", "psych", "psych_comments", "player_type", "round")
VALUES ('Kienan', 'Lundstrom', '06-23-98', 'L', 'Green Bay', 'USHL', '5-10', '170', 'https://www.eliteprospects.com/player/321310/kienan-lundstrom', 10, 'Probably the fastest player in the world', 10, 'Dangles opponents easily and has a 110mph wrist shot', 10, 'Very competitive player; aggressive along the boards and is willing to block shots', 10, 'Great fighter and routinely hits opponents through the glass', 10, 'Knows everything that is going to happen before it happens', 10, 'Has never been on the ice for a goal against', 10, 'Captain of his team and respected by everyone in the league; would be the best player in the NHL if he was on a team right now', 'Skilled/Offensive Defenseman', 1);