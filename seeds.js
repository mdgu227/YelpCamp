var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg",
        description: "Bacon ipsum dolor amet strip steak shank kevin rump tongue, doner pig bresaola jowl pork chop. Jerky porchetta andouille kielbasa tri-tip burgdoggen corned beef pastrami salami. Tri-tip burgdoggen venison, short loin jowl strip steak porchetta pork belly cow. Frankfurter turkey pork chop shank tri-tip alcatra venison corned beef burgdoggen spare ribs drumstick andouille pork short ribs. Pork loin tail biltong, prosciutto jerky drumstick pancetta leberkas. Salami turducken kielbasa pastrami frankfurter ribeye alcatra chicken ball tip."
    },
    {
        name: "Desert Mesa",
        image: "https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3042691-poster-1280-tentsile.jpg",
        description: "Bacon ipsum dolor amet strip steak shank kevin rump tongue, doner pig bresaola jowl pork chop. Jerky porchetta andouille kielbasa tri-tip burgdoggen corned beef pastrami salami. Tri-tip burgdoggen venison, short loin jowl strip steak porchetta pork belly cow. Frankfurter turkey pork chop shank tri-tip alcatra venison corned beef burgdoggen spare ribs drumstick andouille pork short ribs. Pork loin tail biltong, prosciutto jerky drumstick pancetta leberkas. Salami turducken kielbasa pastrami frankfurter ribeye alcatra chicken ball tip."
    },
    {
        name: "Canyon Floor",
        image: "https://www.decathlon.co.uk/ecuk/static/wedze/assets/img/camping/camping-background.jpg",
        description: "Bacon ipsum dolor amet strip steak shank kevin rump tongue, doner pig bresaola jowl pork chop. Jerky porchetta andouille kielbasa tri-tip burgdoggen corned beef pastrami salami. Tri-tip burgdoggen venison, short loin jowl strip steak porchetta pork belly cow. Frankfurter turkey pork chop shank tri-tip alcatra venison corned beef burgdoggen spare ribs drumstick andouille pork short ribs. Pork loin tail biltong, prosciutto jerky drumstick pancetta leberkas. Salami turducken kielbasa pastrami frankfurter ribeye alcatra chicken ball tip."
    }
    
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err) {
       if(err) {
           console.log(err);
       } else {
            console.log("removed campgrounds!")
       }
    });
    //add a few campgrounds
    data.forEach(function(seed) {
        Campground.create((seed), function(err, campground) {
           if(err) {
               console.log(err);
           } else {
               console.log("added a campground");
               //create a comment
               Comment.create(
                   {
                       text: "This place is great",
                       author: "Homer"
                   }, function(err, comment) {
                       if (err) {
                           console.log(err);
                       } else {
                            campground.comments.push(comment);
                            campground.save(); 
                            console.log("Created new comment");
                       }
                       
                   });
           }
        });

    });
    //add a few comments
} 

module.exports = seedDB;