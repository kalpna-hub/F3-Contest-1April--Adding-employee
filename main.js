var count = 0;
var employees = [];
const btn = document.getElementById("add-employee-button");
const message = document.getElementById("message");

function addEmployees(e) {
    e.preventDefault();

    const nameValue = document.getElementById('name').value;
    const professionValue = document.getElementById('profession').value;
    const ageValue = document.getElementById('age').value;
    

    //Inputs Mandatory, Blank will not be submitted.
    if (nameValue == "" || professionValue == "" || ageValue == "") {
        message.innerText = `Error : Please Make sure All the fields are filled before adding in an employee !`;
        message.style.color = "red";
        message.style.fontSize = "15px";
        message.style.marginBottom = "15px";
        return;
      }

      let obj =
      {
        id : count++,
        name : nameValue,
        profession: professionValue,
        age : ageValue,
      }
      employees.push(obj);

      message.innerText = "Sucess : Employee Added !";
      message.style.color = "green";
      message.style.fontSize = "20px";
      message.style.marginBottom = "15px";

      

    //  Clear the input fields   
    document.getElementById('name').value = "";
    document.getElementById('profession').value = "";
    document.getElementById('age').value = "";


    // create a function to add list and call here thats it
   // let employees = [];
    function addEmployee(name, profession, age) {
        const employee = {
          id: employees.length + 1,
          name: nameValue,
          profession: professionValue,
          age: ageValue
        };
      
        employees.push(employee);
      }
      console.log(employees);
}


btn.addEventListener('click',addEmployees )