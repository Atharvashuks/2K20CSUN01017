var axios = require("axios").default;

const getToken = (req,res) => {
    var options = {
      method: "POST",
      url: "http://20.244.56.144/train/auth",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      },
      data: {
        companyName: "ABC Railways",
        clientID: "3f901fd0-9370-4c19-b91d-9e327c538177",
        ownerName: "A",
        ownerEmail: "abc@railway.com",
        rollNo: "2K20CSUN01017",
        clientSecret: "BVyDFfPWGaZQntPi",
      },
    };

    axios
      .request(options)
      .then(async function (response) {
          console.log("sasasa",response.data.access_token);
          
        //    return await response.data.access_token;
          res.send(response.data.access_token);
      })
      .catch(function (error) {
        console.error(error);
      });
}

const getALlTrains = async (req,res) => {

    const token = getToken();
    
    console.log("tokrn",token)
  var options = {
    method: "GET",
    url: "http://20.244.56.144/train/trains",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk3NzkwNzksImNvbXBhbnlOYW1lIjoiQUJDIFJhaWx3YXlzIiwiY2xpZW50SUQiOiIzZjkwMWZkMC05MzcwLTRjMTktYjkxZC05ZTMyN2M1MzgxNzciLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMksyMENTVU4wMTAxNyJ9.GO2JhJZ-OppXkmbGGADFgCMJqMlPUozY2mIEXnZ9mi4",
    },
  };

  await axios
    .request(options)
    .then((response) => {
    //   console.log(response.data.trainName);
        const resp =  response.data;
        console.log(resp);
        let newList = [];

        resp.forEach((item) => {
            console.log(item.departureTime);
            
            var currentdate = new Date();
            var dateTime = currentdate.getHours();
            var getmin = currentdate.getMinutes();


            if (
              item.departureTime.Minutes  >
                getmin + 30 &&
              item.departureTime.Hours <= dateTime + 12
            ) {
              console.log("ture");
              newList.push(item);
            }

            newList.sort();
            
         
        });

        newList.reverse();

        console.log("New list", newList);
        
        res.status(200).json(newList);
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = {
  getALlTrains,
  getToken,
};