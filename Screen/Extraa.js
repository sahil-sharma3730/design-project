// const validate=()=>{
  //   if(user.length==0 || password.length==0){
  //     alert("Required field is missing");
  //   }
  //   else
  //   {
  //     var insertAPIURL = "http://10.0.2.2:80/api/insert.php";
  //     var headers={
  //       'Accept': 'application/json',
  //       'Content-Type':'application.json'
  //     };
  //     var Data={
  //       email:user,
  //       password:password
  //     };
  //     fetch(insertAPIURL,
  //       {
  //            method:'POST',
  //            headers:headers,
  //            body:JSON.stringify(Data)
  //       }
  //       )
  //       .then((response)=>response.json())
  //       .then((response)=>{
  //         alert(response[0].Message);
  //       })
  //       .catch((error)=>{
  //         alert("Error"+error)
  //       })
  //   }
  // }
