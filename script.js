let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  let brr = [
    { id: 5, name: "Superman", age: "23", profession: " junior developer" },
    { id: 7, name: "Iranman", age: "56", profession: "senior developer" },
    { id: 90, name: "Grud", age: "100", profession: "Manager" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.Map((ele) => {
      console.log(ele.profession)
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(() => {
      console.log(ele.profession)
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"})
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.pop();
    console.log(arr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    arr = arr.concat(brr)
    console.log(arr)
  }
  
  concatenateArray()s