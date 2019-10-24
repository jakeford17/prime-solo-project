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
    let goalie = req.body;
    const queryText = `INSERT INTO "goalie" ("fname", "lname", "dob", "catches", "team", "league", "height", "weight", "epurl", "net_coverage", "nc_comments", "quickness", "quickness_comments", "rebound_control", "rc_comments", "competitiveness", "comp_comments", "skills", "skills_comments", "psych", "psych_comments", "where", "style", "personality", "round")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25);`;
    pool.query(queryText, [goalie.fname, goalie.lname, goalie.dob, goalie.catches, goalie.team, goalie.league, goalie.height, goalie.weight, goalie.epurl, goalie.net_coverage, goalie.nc_comments, goalie.quickness, goalie.quickness_comments, goalie.rebound_control, goalie.rc_comments, goalie.competitiveness, goalie.comp_comments, goalie.skills, goalie.skills_comments, goalie.psych, goalie.psych_comments, goalie.where, goalie.style, goalie.personality, goalie.round])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "goalie" ORDER BY "round";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT goalie query', err);
            res.sendStatus(500);
        });
});

router.get('/goalieprofile/:id', (req, res) => {
    const queryText = `SELECT * FROM "goalie" WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error in SELECT MOVIE query', err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const updatedG = req.body;
    const queryText = `UPDATE "goalie" SET "fname" = $1, "lname" = $2, "dob" = $3, "catches" = $4, "team" = $5, "league" = $6, "height" = $7, "weight" = $8, "epurl" = $9, "net_coverage" = $10, "nc_comments" = $11, "quickness" = $12, "quickness_comments" = $13, "rebound_control" = $14, "rc_comments" = $15, "competitiveness" = $16, "comp_comments" = $17, "skills" = $18, "skills_comments" = $19, "psych" = $20, "psych_comments" = $21, "where" = $22, "style" = $23, "personality" = $24, "round" = $25 WHERE "id" = $26;`;
    const queryValues = [
        updatedG.fname, updatedG.lname, updatedG.dob, updatedG.catches, updatedG.team, updatedG.league, updatedG.height, updatedG.weight, updatedG.epurl, updatedG.net_coverage, updatedG.nc_comments, updatedG.quickness, updatedG.quickness_comments, updatedG.rebound_control, updatedG.rc_comments, updatedG.competitiveness, updatedG.comp_comments, updatedG.skills, updatedG.skills_comments, updatedG.psych, updatedG.psych_comments, updatedG.where, updatedG.style, updatedG.personality, updatedG.round, updatedG.id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE MOVIE query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "goalie" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM "goalie" WHERE "id" > 0;`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;
