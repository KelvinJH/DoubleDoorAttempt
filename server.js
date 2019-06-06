const NodeLinked = require('./NodeLinked');
const express = require('express');
const app = express();
const port = 3000;

const LinkedList = new NodeLinked();
// this function allows the user to "read" the element selected
// only if it exist in the list. -1 if it does not exist
app.get('/read/:element', (req, res) => {
  const element = req.params.element;
  console.log(`retrieving node ${element}`);
  const node = LinkedList.getIndexOf(element);
  res.send(`${node}`);
});



 //app.get('/add/:element', (req, res) => {
 //  const element = req.params.element;
 //  LinkedList.add(element);
 //  console.log(`adding node ${element}`);
 //  res.send(element); // send back a text to the browser
 //});

app.post('/add/:element', (req, res) => {
  const element = req.body.element;
  LinkedList.add(element);
  console.log(`adding node ${element}`);
  res.send(element);
});



//app.get('/delete/:element', (req, res){
//  const element = req.body.element;
//  LinkedList.remove(element);
//  console.log(`removing node ${element}`);
//  res.send(element);
//});

app.delete('/delete/:element', (req, res) => {
  const element = req.params.element;
  LinkedList.remove(element);
  console.log('deleted node');
  res.end(); // terminating this call
});

app.put('/edit/:element1,:element2', (req, res) => {
  const element1 = req.params.element1;
  const element2 = req.params.element2;
  LinkedList.edit(element1,element2)
  console.log('replacing ${element1} with ${element2}');
  res.end();
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
