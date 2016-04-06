

import $ from 'jquery';
import Backbone from 'backbone';
const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
];

console.log(tshirts);

const topNav = Backbone.View.extend({
    initialize: function() {
        
    },
    template: function() {
        return `XX`
    },
    tagName: 'nav',
    render: function() {
        this.$el.html(this.template());
        $('body').append(this.el);

    }
});
    

console.log(new topNav());

var navbar = new topNav();
navbar.render();
$('nav').addClass('navbar');


// var googleLink = new basicView('http://google.com', 'google');
// var tiyLink = new basicView('http://theironyard.com', 'tiy');

// googleLink.render();
// tiyLink.render();







    // <nav class=" well well-sm navbar navbar-default">
    //   <div class="container">

    //     <div class="navbar-header">
    //      <h2><span class="label label-primary"> To.Do.</span><span class="label label-info">List</span></h2>

      
    // </nav>