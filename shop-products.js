let tast ={
    tv:"vegan",
    tp:"poultry",
    tb:"beef",
    tc:"cheese",
    ts:"sauces",
    tch:"chocolate",
}

export let shopProductsArr = [
    {
        id:"p-1",
        name:"Spinach Pizza",
        price:14,
        desc:`Spinach adds depth, texture, and flavor to a variety of pizzas.
        DeliceLand uses baby spinach because it is sweeter than mature spinach.
        Spinach is front and center on our Spinach & Feta pizza. The vegetable 
        balances the tangy feta cheese, and spinach’s earthy flavor matches the nuttiness of Parmesan cheese.`,
        img:"/images/shop-spinash-pizza-640X640.jpg",
        stock:10,
        tast:[tast.tv],
        cat:"pizza",
    },
    {
        id:"p-2",
        name:"White Cherry Cake",
        price:12,
        desc:`White Forest Cake is two layers of soft, buttery White
        Chocolate Cake filled with amaretto-spiked Cherry Sauce`,
        img:"/images/shop-white-chocolate-cherry-cake.jpg",
        stock:10,
        tast:[tast.tch],
        cat:"dessert",
    }
    ,{
        id:"p-3",
        name:"Green Salad",
        price:10,
        desc:`Organic kale, dried cranberries, almonds, shaved
        parmesan, avocado, with balsamic vinaigrette dressing`,
        img:"/images//shop-green-salad-640X640.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"salad",
    },{
        id:"p-4",
        name:"Pizza quattro stagioni",
        price:10,
        desc:` Loaded with fresh mushrooms, prosciutto ham, artichoke
        hearts and mozzarella on organic tomato sauce. Dusted
        with fresh parsley.`,
        img:"/images/shop-pizza-quattro-stagioni.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"pizza",
    },
    {
        id:"p-5",
        name:"Dark Brownies",
        price:10,
        desc:`Where it all began—our original brownie recipe has stood
        the test of time and remains our number one best seller!
        Dark and decadent brownies, folded with crunchy pecans,
        hug a layer of creamy caramel. Enjoy four of these
        famous treats in a decorative gift tin.`,
        img:"/images/shop-brownies.jpg",
        stock:10,
        tast:[tast.tch],
        cat:"dessert",
    },
    {
        id:"p-6",
        name:"Pasta and Meat Balls",
        price:10,
        desc:` Where it all began—our original brownie recipe has stood
        the test of time and remains our number one best seller!
        Dark and decadent brownies, folded with crunchy pecans,
        hug a layer of creamy caramel. Enjoy four of these
        famous treats in a decorative gift tin.`,
        img:"/images/shop-pasta-and-meat-balls.jpg",
        stock:10,
        tast:[tast.tb],
        cat:"pasta",
    },
    {
        id:"p-7",
        name:"Mushroom Pizza",
        price:10,
        desc:` Our signature mushroom cream base with mozzarella,
        loaded with fresh sliced mushrooms, Grana Padano cheese,
        and black pepper. Dusted with fresh parsley.`,
        img:"/images/shop-mushroom-pizza.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"pizza",
    },{
        id:"p-8",
        name:"Chocolate cake",
        price:10,
        desc:`Our signature mushroom cream base with mozzarella,
        loaded with fresh sliced mushrooms, Grana Padano cheese,
        and black pepper. Dusted with fresh parsley.`,
        img:"/images/shop-chocolat-cake.jpg",
        stock:10,
        tast:[tast.tch],
        cat:"dessert",
    },
    {
        id:"p-9",
        name:"Salami Pizza",
        price:10,
        desc:` A feast of genoa salami bathed in Pecorino Romano cheese
        and mozzarella on organic tomato sauce. Dusted with
        fresh parsley.`,
        img:"/images/gallery-pizza-3.jpg",
        stock:10,
        tast:[tast.tb],
        cat:"pizza",
    },
    {
        id:"p-10",
        name:"Gnocchi Combination",
        price:10,
        desc:` Gnocchi with three different sauces (bolognese, Alfredo,
            and palomino). Served with a salad, choice of dressing,
            rolls, and butter.`,
        img:"/images/shop-gnocchi-meat-sauce.jpg",
        stock:10,
        tast:[tast.tb,tast.ts],
        cat:"pasta",
    },
    {
        id:"p-11",
        name:"Gourmet Burger",
        price:10,
        desc:`This gourmet burger recipe is made with juicy ground
        beef, a homemade red wine bacon sauce, caramelized
        onions, a whole grain aioli and fresh watercress.`,
        img:"/images/shop-lettuce-wrap-burger.jpg",
        stock:10,
        tast:[tast.tb],
        cat:"others",
    },
    {
        id:"p-12",
        name:"Mediterranean Salad",
        price:10,
        desc:`full of bright fresh vegetables, sprinkled with the best
        parmesan cheese and toasted sunflower seeds and tossed
        with a lemony, red wine vinegar dressing.`,
        img:"/images/shop-mediterranean-salad.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"salad",
    },
    {
        id:"p-13",
        name:"Orzo Pasta Salad",
        price:10,
        desc:`
        Orzo pasta salad with roasted vegetables and lemon
        vinaigrette is the perfect Summer salad. It’s full of
        healthy vegetables and tossed with a bright and zingy
        lemon dressing.`,
        img:"/images/shop-orzo-pasta-salad.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"pasta",
    },
    {
        id:"p-14",
        name:"Sourdough Bagels",
        price:10,
        desc:`
        Sourdough bagels are the ultimate breakfast or brunch
        food. Serve them with cream cheese or butter, or use
        them as a delicious vessel for a breakfast sandwich or
        lox board.`,
        img:"/images/shop-sourdough-bagels.jpg",
        stock:10,
        tast:[],
        cat:"others",
    },
    {
        id:"p-15",
        name:"Creamy Lemon Tart",
        price:10,
        desc:`This creamy lemon tart with fresh berries is a cross
        between a lemon cheesecake and lemon curd tart. It’s
        creamy, lemony and perfect for Spring.`,
        img:"/images/shop-creamy-lemon-tart.jpg",
        stock:10,
        tast:[],
        cat:"dessert",
    },
    {
        id:"p-16",
        name:"Ground Turkey Tacos",
        price:10,
        desc:`Our fresh tacos are delicious any way you make it. Mix
        and match protein, toppings, house-made guacamole and
        salsa. Choose from a hard or soft tortilla and make this
        a meal you may crave again tomorrow.`,
        img:"/images/shop-ground-turkey-tacos.jpg",
        stock:10,
        tast:[tast.tp],
        cat:"others",
    },
    {
        id:"p-17",
        name:"Puff Pastry Tart",
        price:10,
        desc:`Light, versatile and ready to melt in the mouth, puff
        pastry tarts are a winner. From nibbles to main meals or
        delightful desserts, we’ve got just the inspiration you
        need to add a tart or two to any menu.`,
        img:"/images/shop-puff-pastry-tart.jpg",
        stock:10,
        tast:[],
        cat:"others",
    },
    {
        id:"p-18",
        name:"Picanha Steak",
        price:10,
        desc:`Picanha is a popular cut of beef found in Brazil. It is
        also commonly found in Portugal. This cut is known for
        being juicy, tender`,
        img:"/images/shop-picanha-steak.jpg",
        stock:10,
        tast:[tast.tb],
        cat:"others",
    },
    {
        id:"p-19",
        name:"Moist Lemon Cake",
        price:10,
        desc:` Every bite of this supremely moist pound cake is
        bursting with fresh lemon flavor and the lemon glaze on
        top will have you hooked after just one bite.`,
        img:"/images/shop-lemon-cake.jpg",
        stock:10,
        tast:[],
        cat:"dessert",
    },
    {
        id:"p-20",
        name:"Greek Salad",
        price:10,
        desc:`
        Romaine Lettuce, Cherry Tomato, Cucumber, Red Onion,
        Bell Pepper, Feta Cheese, Dill, Olives, Dressed with
        Olive Oil.`,
        img:"/images/shop-feta-salad.jpg",
        stock:10,
        tast:[tast.tc],
        cat:"salad",
    }];