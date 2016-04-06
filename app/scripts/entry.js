

import $ from 'jquery';
import Backbone from 'backbone';
const stock = [
  {
    id: 1,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_back.png",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_back.png",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_back.png",
    title: "Forrest Walk",
    price: 19

  }
];

console.log(stock);

const items = Backbone.View.extend({
    initialize: function(id,itemsArray) {
        this.id=id;
        this.imageUrlBack=itemsArray[id-1].imageUrlBack;
        this.imageUrlFront=itemsArray[id-1].imageUrlFront;
        this.titel=itemsArray[id-1].titel;
        this.price=itemsArray[id-1].price;
        
    },
    template: function(){
        
    },
    template1: function() {
        
        return `<img src=${this.imageUrlFront}>`
    },
    template2: function(){
        return `<img src=${this.imageUrlBack}>`;
      }  ,
    template3: function(){
        return `<span>${this.title}</span>`;
    },
    template4: function(){
        return `<span>${this.price}</span>`;
    },
    tagName: 'div',
    render: function(type) {
        if(type==='price'){
            this.$el.append(this.template4());
            $('body').append(this.el);
        }
        else if(type==='title'){
            this.$el.append(this.template3());
            $('body').append(this.el);
        }
        else if(type==='back'){
            this.$el.append(this.template2());
            $('body').append(this.el);
        }
        else if(type==='front'){
            this.$el.append(this.template1());
            $('body').append(this.el);
        }
        else{
            this.$el.append(this.template());
            $('body').append(this.el);
        }


    }
});
    



const saveMyTrees = new items(1,stock);
const natureLover = new items(2,stock);
const forestWalk = new items(3,stock);


saveMyTrees.render('back');
saveMyTrees.render('front');



// var googleLink = new basicView('http://google.com', 'google');
// var tiyLink = new basicView('http://theironyard.com', 'tiy');

// googleLink.render();
// tiyLink.render();







    // <nav class=" well well-sm navbar navbar-default">
    //   <div class="container">

    //     <div class="navbar-header">
    //      <h2><span class="label label-primary"> To.Do.</span><span class="label label-info">List</span></h2>

      
    // </nav>