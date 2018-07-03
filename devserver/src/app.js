const axios = require('axios');

console.log('dev')

console.log(axios);

axios.post('/meta/lottery/get', {"advID":3526908054,"params":{"LotteryID":123123}}).then((resolve, reject) => {
    console.log(resolve.data)


}).catch( (e)=>{
    console.log(e)
} )

