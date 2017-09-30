var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'atika1498',
    database:'atika1498',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
        title:'ARTICLE-ONE ATIKA',
        heading:'ARTICLE ONE',
        date:'SEP 5, 2016',
        content:`<p> This is the first article: content for my webapp is here: content for my webapp is here: content for my webapp is here: content for my webapp is here: content for my webapp is here: content for my webapp is here: content for my webapp is here: content for my webapp is here:
        </p>
        <p>
        content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is h:content for my webapp is here:
        </p>
        <p>
        content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is here:content for my webapp is h:content for my webapp is here:
        </p>`
},
'article-two':{
        title:'ARTICLE-TWO ATIKA',
        heading:'ARTICLE TWO',
        date:'SEP 10, 2016',
        content:`<p> This is about the first article </p>`
},
'article-three':{
        title:'ARTICLE-THREE ATIKA',
        heading:'ARTICLE THREE',
        date:'SEP 15, 2016',
        content:`<p> This is about the third  article  </p>`
}
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
       <link href="/ui/style.css" rel="stylesheet" />
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/"> Home </a>
        </div>
        <hr/>
        <h3> ${heading} </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    </html>`;
return htmlTemplate;
}
app.get('/test-db',function(req,res){
    //make a select request
    //return the response with the results
});
var pool=new Pool(config);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    // articleName==article-one
   // article[articleName]=={} content object for articleone
     var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
