
const Router = require("express").Router;


const User = require("../models/user");
const {SECRET_KEY} = require("../config");
const ExpressError = require("../expressError");


const router = new Router();


/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

 router.get('/', async (req, res, next) => {
    let result = await User.all()
    return res.json(result)
  })


/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/


 router.get('/:username', async (req, res, next) => {
    let username = req.params.username
    let result = await User.get(username)
    return res.json(result)
  })



/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 router.get('/:username/to', async (req, res, next) => {
    let username = req.params.username
    let result = await User.messagesTo(username)
    return res.json(result)
  })

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 router.get('/:username/from', async (req, res, next) => {
    let username = req.params.username
    let result = await User.messagesTo(username)
    return res.json(result)
  })


 module.exports = router;