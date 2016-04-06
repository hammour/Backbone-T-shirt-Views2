

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
    initialize: function(id,itemsArray)  {
        this.id=id;
        this.imageUrlBack=itemsArray[id-1].imageUrlBack;
        this.imageUrlFront=itemsArray[id-1].imageUrlFront;
        this.title=itemsArray[id-1].title;
        this.price=itemsArray[id-1].price;
        
    },
    template: function(){
        return `<div class="container">
                <ul class=cbp-pggrid">
                <li>
                    <div class="cbp-pgcontent">
                            <span class="cbp-pgrotate"></span>
                            <div class="cbp-pgitem">
                                <div class="cbp-pgitem-flip">
                                    <img  src="${this.imageUrlFront}" />
                                    <img class = "hide" src="${this.imageUrlBack}" />
                                </div>
                            </div><!-- /cbp-pgitem -->
                            <ul class="cbp-pgoptions">
                                <li class=" cbp-pgoptcompare">Compare</li>
                                <li class="cbp-pgoptfav">Favorite</li>
                                <li class="cbp-pgoptsize">                              
                                    <span data-size="XL">XL</span>
                                    <div class="cbp-pgopttooltip">
                                        <span data-size="XL">XL</span>
                                        <span data-size="L">L</span>
                                        <span data-size="M">M</span>
                                        <span data-size="S">S</span>
                                    </div>
                                </li>
                                <li class="cbp-pgoptcolor">
                                    <span data-color="c1">Blue</span>
                                    <div class="cbp-pgopttooltip">
                                        <span data-color="c1">Blue</span>
                                        <span data-color="c2">Pink</span>
                                        <span data-color="c3">Orange</span>
                                        <span data-color="c4">Green</span>
                                    </div>
                                </li>
                                <li class="cbp-pgoptcart"></li>
                            </ul><!-- cbp-pgoptions -->
                        </div><!-- cbp-pgcontent -->
                        <div class="cbp-pginfo">
                            <h3>${this.title}</h3>
                            <span class="cbp-pgprice">$${this.price}</span>
                        </div>
                    </li></ul></div>`
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



saveMyTrees.render();
natureLover.render();
forestWalk.render();

