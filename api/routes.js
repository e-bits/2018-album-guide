module.exports = function (app) {
  const AlbumController = require('./controllers/AlbumController');

  app.route('/albums')
    .post(AlbumController.createAlbum);

  app.route('/albums/:albumId')
    .get(AlbumController.getAlbum)
    .put(AlbumController.postStickers)
    .delete(AlbumController.deleteAlbum);
};
