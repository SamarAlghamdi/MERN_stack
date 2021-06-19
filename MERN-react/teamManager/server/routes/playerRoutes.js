const {createNewPlayer, getAllPlayers, getOnePlayer, editPlayer, deletePlayer,getListPlayerByage, getListPlayersByName} = require("../controllers/playerControllers");


module.exports = app => {

    app.get('/api', getAllPlayers);
    app.get('/api/search', getListPlayersByName);
    app.get('/api/:id', getOnePlayer);
    app.put('/api/:id/edit', editPlayer);
    app.delete('/api/:id/delete', deletePlayer);
    app.post('/api/new/player', createNewPlayer);
    app.get('/api/get/players', getListPlayerByage);
};
