const {Router} = require(`express`);
const router = Router();
const fs = require('fs');
const uuid = require('uuid');

router.get('',  (req, res) => {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err)
            } else {
                const data = JSON.parse(contents);                
                const page = parseInt(req.query.page);
                const limit = parseInt(req.query.size);
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                const results = {
                    data: data.slice(startIndex, endIndex),
                    limit: Math.ceil(data.length/limit)
                };
                    res.status(200);
                    res.send(results)
            };
        });
});

router.post('',  (req, res) => {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err)
            } else {
                const data = JSON.parse(contents);
                let newPerson = req.body;
                newPerson.id = uuid.v4();
                data.unshift(newPerson);
                fs.writeFileSync('static/db.json', JSON.stringify(data), function(err, result) {
                    if(err) console.log(err);
                });
                res.status(200);
                res.send(newPerson)
            };
        });
});

router.patch('',  (req, res) => {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err)
            } else {
                const data = JSON.parse(contents);
                console.log(data);
                const editPerson = req.body;
                data.forEach((item, index) => {
                    if(item.id === editPerson.id) data.splice(index, 1, editPerson)
                });
                fs.writeFileSync('static/db.json', JSON.stringify(data), function(err, result) {
                    if(err) console.log(err);
                });
                res.status(200);
                res.send(editPerson)
            };
        });
});

router.delete('',  (req, res) => {
    try {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err);
            } else {
                const data = JSON.parse(contents);
                const person = req.body.person;
                data.forEach(function(item, index) {
                    if (item.id === person.id) data.splice(index, 1)
                });
                fs.writeFileSync('static/db.json', JSON.stringify(data), function(err, result) {
                    if(err) console.log(err);
                });
                res.status(200);
                res.send(person)
            };
        });
    } catch(error) {
        res.send(error)
    }
});


module.exports = router;