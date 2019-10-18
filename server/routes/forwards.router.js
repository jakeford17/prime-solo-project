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

module.exports = router;
