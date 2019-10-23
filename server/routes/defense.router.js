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
    let defense = req.body;
    const queryText = `INSERT INTO "defense" ("fname", "lname", "dob", "shoots", "team", "league", "height", "weight", "epurl", "skating", "skating_comments", "puck_skills", "puck_skills_comments", "competitiveness", "comp_comments", "physicality", "phys_comments", "iq", "iq_comments", "defense", "def_comments", "psych", "psych_comments", "player_type", "round")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,  $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25);`;
    pool.query(queryText, [defense.fname, defense.lname, defense.dob, defense.shoots, defense.team, defense.league, defense.height, defense.weight, defense.epurl, defense.skating, defense.skatingComments, defense.puckSkills, defense.puckSkillsComments, defense.competitiveness, defense.compComments, defense.physical, defense.physicalComments, defense.hockeyIQ, defense.hockeyIQComments, defense.defense, defense.defenseComments, defense.psych, defense.psychComments, defense.playerType, defense.round])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "defense" ORDER BY "round";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT defense query', err);
            res.sendStatus(500);
        });
});

router.get('/defenseprofile/:id', (req, res) => {
    const queryText = `SELECT * FROM "defense" WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error in SELECT MOVIE query', err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const updatedD = req.body;
    const queryText = `UPDATE "defense" SET "fname" = $1, "lname" = $2, "dob" = $3, "shoots" = $4, "team" = $5, "league" = $6, "height" = $7, "weight" = $8, "epurl" = $9, "skating" = $10, "skating_comments" = $11, "puck_skills" = $12, "puck_skills_comments" = $13, "competitiveness" = $14, "comp_comments" = $15, "physicality" = $16, "phys_comments" = $17, "iq" = $18, "iq_comments" = $19, "defense" = $20, "def_comments" = $21, "psych" = $22, "psych_comments" = $23, "player_type" = $24, "round" = $25 WHERE "id" = $26;`;
    const queryValues = [
        updatedD.fname, updatedD.lname, updatedD.dob, updatedD.shoots, updatedD.team, updatedD.league, updatedD.height, updatedD.weight, updatedD.epurl, updatedD.skating, updatedD.skating_comments, updatedD.puck_skills, updatedD.puck_skills_comments, updatedD.competitiveness, updatedD.comp_comments, updatedD.physicality, updatedD.phys_comments, updatedD.iq, updatedD.iq_comments, updatedD.defense, updatedD.def_comments, updatedD.psych, updatedD.psych_comments, updatedD.player_type, updatedD.round, updatedD.id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE MOVIE query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "defense" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM "defense" WHERE "id" > 0;`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;
