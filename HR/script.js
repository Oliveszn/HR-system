const employeeListHolder = document.querySelector(".employee-list");
const interviewListHolder = document.querySelector(".interviews");
const addEmployeeModal = document.querySelector("#employeeModal");
const addInterviewModal = document.querySelector("#interviewModal");
const intButton = document.querySelector("#int-btn");
const empButton = document.querySelector("#emp-btn");

addInterviewModal.style.display = "none";
addEmployeeModal.style.display = "none";

const addEmployee = function () {
  let name = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let position = document.querySelector("#position").value;
  let department = document.querySelector("#department").value;
  let email = document.querySelector("#email").value;
  let salary = document.querySelector("#salary").value;

  let newItem = `
    <div class="employee-card" id="employee1">
        <img class="user-img" src="images/OIP.jpg" alt="" />
        <div class="employment-details" id="employee1-details">
        <span class="name-format">${name} </span>  
        <br>
        <span class="name-format">${surname}</span>  
        <br>
        <span class="name-format">${position}</span>  
        <br>
        <span class="name-format">${department}</span>  
        <br>
        <span class="name-format">${email}</span>  
        <br>
        <span class="name-format">${salary}</span>  
        <br>

        </div>
    </div>
  `;

  employeeListHolder.insertAdjacentHTML("beforeend", newItem);
  addEmployeeModal.style.display = "none";
};

const showAddEmpModal = function () {
  addEmployeeModal.style.display = "block";
};

const addInterview = function () {
  let departmentInt = document.querySelector("#int-department").value;
  let positionInt = document.querySelector("#int-position").value;
  let newInterview = `<li>
    <div class="list-item">
        <h3>${departmentInt}</h3>
        <p>${positionInt}</p>
        <button class="accept-btn" type="button" name="button">Accept</button>
        <button class="reject-btn" type="button" name="button">Reject</button>
    </div>
  </li> `;

  interviewListHolder.insertAdjacentHTML("beforeend", newInterview);
  addInterviewModal.style.display = "none";
};

const showAddIntModal = function () {
  addInterviewModal.style.display = "block";
};

//EVENT HANDLERS
intButton.addEventListener("click", showAddIntModal);
empButton.addEventListener("click", showAddEmpModal);
