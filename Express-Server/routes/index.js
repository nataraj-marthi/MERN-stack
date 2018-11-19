const routes = require('express').Router();
const playerController = require('../controllers/PlayersController');

routes.route('/cricket/api')
        .get((req, res, next) => {
                res.status(200).json({ message: 'You have done it!!!' })
        });

routes.route('/cricket/api/players')
        .get(playerController.getPlayers)
        .post(playerController.createPlayer)

routes.route('/cricket/api/players/:id')
        .get(playerController.getPlayer)
        .delete(playerController.deletePlayer)
        .patch(playerController.updatePlayer)


module.exports = routes;