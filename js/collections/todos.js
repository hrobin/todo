var app = app || {};

(function () {

	var TodoList = Backbone.Collection.extend({
		model: app.Todo,
		localStorage: new Backbone.LocalStorage ('todos-backbone'),
		completed: function () {
			return this.filter(function (todo) {
				return todo.get('completed');
			});
		},
		remaining: function () {
			return this.without.apply(this, this.completed());
		},
		nextOrder: function () {
			// this.length = 0
			// !0 == false
			// this.length =1
			//!1 ==true
			//this.length == true
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},
		comparator: function (todo) {
			return todo.get('order');
		
		}
	});
	
		app.Todos = new TodoList();

})();