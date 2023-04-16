const express = require ('express');
const app = express()

app.get('/', function(req,res){
  res.send({
    msg:'api is working'
  })

})

app.get('/products', function(req,res) {
  res.send(
    [ 
      {
        name :'meghla',
        age:'23',

      }
    ]
  )
})
app.post('/products', (reg,res) =>{
  console.log('request received');
  res.send('ok')
})

app.listen(5000, () => console.log('app is running http://localhost:5000'))