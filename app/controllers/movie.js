import Controller from '@ember/controller';

export default Controller.extend({
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function () {
      var newMovie = this.store.createRecord('movie', {
        title: this.get('title'),
        body: this.get('description'),
      });
      newMovie.save();
    }
  }
});
