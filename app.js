const render = function () {
    $('#viewpage').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('#viewpage').append(`<p>${employeeList[i].name}</p><br>`);
        $('#viewpage').append(`<p>${employeeList[i].officeNum}</p><br>`);
        $('#viewpage').append(`<p>${employeeList[i].phoneNum}</p><br><br>`);
    }
}
render();
$('section').hide();

let activeLink = null;

const showView = function () {
    $('section').hide();
    $('#viewpage').show();
    changeColor("#view");
}

const showAdd = function () {
    $('section').hide();
    $('#addpage').show();
    $('#viewpage').show();
    changeColor("#add");
}

const showVerify = function () {
    $('section').hide();
    $('#searchresult').empty();
    $('#verifypage').show();
    changeColor("#verify");
}

const showUpdate = function () {
    $('section').hide();
    $('#updatepage').show();
    $('#viewpage').show();
    changeColor("#update");
}

const showDelete = function () {
    $('section').hide();
    $('#deletepage').show();
    $('#viewpage').show();
    changeColor("#delete");
}

const addEmployee = function () {
    const nameVal = $('#nameinput').val();
    const officeVal = $('#officeinput').val();
    const phoneVal = $('#phoneinput').val();

    const newEmp = {
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    }
    employeeList.push(newEmp);

    $('#nameinput').val('');
    $('#officeinput').val('');
    $('#phoneinput').val('');
    render();
}

const verifyEmployee = function () {
    const verifyVal = $('#verifyinput').val();
    var nameList = [];
    for (let i = 0; i < employeeList.length; i++) {
        nameList.push(employeeList[i].name);
    }
    if (nameList.includes(verifyVal)) {
        $('#searchresult').text("Employee found");
    } else {
        $('#searchresult').text("Employee not found");
    }
    $('#verifyinput').val('');
}

const updateEmployee = function () {
    const nameVal = $('#nameupdate').val();
    const officeVal = $('#officeupdate').val();
    const phoneVal = $('#phoneupdate').val();
    var index = 0;

    for (let i = 0; i < employeeList.length; i++) {
        if (nameVal == employeeList[i].name) {
            index = i;
            break;
        }
    }
    employeeList[index].officeNum = officeVal;
    employeeList[index].phoneNum = phoneVal;

    $('#nameupdate').val('');
    $('#officeupdate').val('');
    $('#phoneupdate').val('');
    render();
}

const deleteEmployee = function () {
    const nameVal = $('#namedelete').val();
    var index = 0;

    for (let i = 0; i < employeeList.length; i++) {
        if (nameVal == employeeList[i].name) {
            index = i;
            break;
        }
    }
    employeeList.splice(index, 1);

    $('#namedelete').val('');
    render();
}

const changeColor = function (link) {
    if (activeLink) {
        $(activeLink).removeClass("currentLink");
    }
    activeLink = link;
    $(activeLink).addClass("currentLink");
}

$('#view').on('click', showView);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);

$('#addNew').on('click', addEmployee);
$('#search').on('click', verifyEmployee);
$('#updateEmp').on('click', updateEmployee);
$('#deleteEmp').on('click', deleteEmployee);