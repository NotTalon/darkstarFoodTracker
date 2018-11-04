var studentArray = [{
  id: 0,
  name: 'richard',
  email: 'richard.k.heaton@gmail.com'
},{
  id: 1,
  name: 'ben',
  email: 'ben@gmail.com'
},{
  id: 2,
  name: 'samip',
  email: 'samip@gmail.com'
},{
  id: 3,
  name: 'shelby',
  email: 'shelby@gmail.com'
},{
  id: 4,
  name: 'heaven',
  email: 'heaven@gmail.com'
},{
  id: 5,
  name: 'levi',
  email: 'levi@gmail.com'
}];

function addStudent() {
  var name = document.getElementById("name_input").value;
  var email = document.getElementById("email_input").value;
  studentArray.push({ id: studentArray.length + 1, name: name, email: email });
}

function addRow() {
    var table = document.getElementById("student-table");
    var row = table.insertRow(0);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    nameCell.innerHTML = "richard heaton";
    emailCell.innerHTML = "richard@gmail.com";
}

function addAllStudents() {
  var table = document.getElementById("student-table");

  for (var x = 0; x < studentArray.length; x++) {
    var row = table.insertRow(x);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    nameCell.innerHTML = studentArray[x].name;
    emailCell.innerHTML = studentArray[x].email;
  }

  //studentArray.forEach(function(student) {
  //  // might break if student is removed
  //  var row = table.insertRow(student.id);
  //  var nameCell = row.insertCell(0);
  //  var emailCell = row.insertCell(1);
  //  nameCell.innerHTML = student.name;
  //  emailCell.innerHTML = student.email;
  //});

}
