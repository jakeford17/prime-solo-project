const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// // Handles Ajax request for user information if user is authenticated
// router.get('/', rejectUnauthenticated, (req, res) => {
//   // Send back user object from the session (previously queried from the database)
//   res.send(req.user);
// });

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/', (req, res, next) => {
    console.log("Object: ", req.body)
    let forward = req.body;
    const queryText = `INSERT INTO "forward" ("fname", "lname", "dob", "position", "shoots", "team", "league", "height", "weight", "epurl", "skating", "skating_comments", "puck_skills", "puck_skills_comments", "competitiveness", "comp_comments", "physicality", "phys_comments", "iq", "iq_comments", "defense", "def_comments", "psych", "psych_comments", "player_type", "round")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,  $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26);`;
    pool.query(queryText, [forward.fname, forward.lname, forward.dob, forward.position, forward.shoots, forward.team, forward.league, forward.height, forward.weight, forward.epurl, forward.skating, forward.skatingComments, forward.puckSkills, forward.puckSkillsComments, forward.competitiveness, forward.compComments, forward.physical, forward.physicalComments, forward.hockeyIQ, forward.hockeyIQComments, forward.defense, forward.defenseComments, forward.psych, forward.psychComments, forward.playerType, forward.round])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "forward";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT forwards query', err);
            res.sendStatus(500);
        });
});

router.get('/forwardprofile/:id', (req, res) => {
    const queryText = `SELECT * FROM "forward" WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error in SELECT MOVIE query', err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const updatedF = req.body;
    const queryText = `UPDATE "forward" SET "fname" = $1, "lname" = $2, "dob" = $3, "position" = $4, "shoots" = $5, "team" = $6, "league" = $7, "height" = $8, "weight" = $9, "epurl" = $10, "skating" = $11, "skating_comments" = $12, "puck_skills" = $13, "puck_skills_comments" = $14, "competitiveness" = $15, "comp_comments" = $16, "physicality" = $17, "phys_comments" = $18, "iq" = $19, "iq_comments" = $20, "defense" = $21, "def_comments" = $22, "psych" = $23, "psych_comments" = $24, "player_type" = $25, "round" = $26 WHERE "id" = $27;`;
    const queryValues = [
        updatedF.fname, updatedF.lname, updatedF.dob, updatedF.position, updatedF.shoots, updatedF.team, updatedF.league, updatedF.height, updatedF.weight, updatedF.epurl, updatedF.skating, updatedF.skating_comments, updatedF.puck_skills, updatedF.puck_skills_comments, updatedF.competitiveness, updatedF.comp_comments, updatedF.physicality, updatedF.phys_comments, updatedF.iq, updatedF.iq_comments, updatedF.defense, updatedF.def_comments, updatedF.psych, updatedF.psych_comments, updatedF.player_type, updatedF.round, updatedF.id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE MOVIE query', err);
            res.sendStatus(500);
        });
});

module.exports = router;
