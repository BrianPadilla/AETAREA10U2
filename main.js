var mongoose = require('mongoose');
var schema = require ('./schema');
var ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb://localhost:27017/test3')

//parameters are: model name, schema, collection name
var Blogs = mongoose.model('Blogs',schema,'blogs');

var blog1 = new Blogs ({
    
    title: 'EL GALA',
    author:'JOSE',
    body:'Una historia chida',
    comments:[{body:"Muy Agradable",date:'2019-02-27'}],
    meta:{
        votes:5,
        favs:10
    }
    
});

var blog2 = new Blogs ({
    

    title: 'EL GALARDON',
    author:'ANTONIO',
    body:'Una historia chida',
    comments:[{body:"Muy Agradable",date:'2019-02-27'}],
    meta:{
        votes:5,
        favs:10
    }

    
    
});

var blog3 = new Blogs ({
    

    title: 'EL GALARDONADO',
    author:'MACIAS',
    body:'Una historia chida',
    comments:[{body:"Muy Agradable",date:'2019-02-27'}],
    meta:{
        votes:5,
        favs:10
    }

    
    
});





//CREATE
blog1.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    
    console.log("Saved!!");
    
    
});

blog2.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    
    console.log("Saved!!");
    
    
});

blog3.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    
    console.log("Saved!!");
    
    process.exit(0);
});
//

//READ
Blogs.find({author:'MACIAS'},function(error,docs){
    
    if(error){
        console.log(error);
        process.exit(1);
    }
    
    console.log(docs);
});
//



Blogs.update({id: '5c78c1ab48b4ba11dc9fe2f1'},{$set: {author:'Bowser'}},
function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);   
        }
        
        console.log(docs);
        process.exit(0);
    });

//DELETE
    Blogs.findByIdAndRemove({_id: '5c78c1ab48b4ba11dc9fe2f1'}, function (error,docs){
        if(error){
            console.log(error);
            process.exit(1);   
        }
        console.log(docs);
        process.exit(0);
    });

 //   