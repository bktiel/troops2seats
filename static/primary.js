//globals
var personnel = [{name: "Burch", rank: "SPC"}];
var vehicles = [{bumper: "C200"}];
var editingItem = false;
var vehicleAssignments = [];
var vehicleTypes = [{name: "M1097", image: "none"}];
var units = ["1PLT"]

window.onload = function () {
    //first panel loaded should go here
    renderVehiclePanel();

    //set up event listener for image upload
    $("#chooseTypeImage")[0].addEventListener("change", selectVehicleTypeImage)
}

$(".dropdown").click(function () {
    // var selector='#'+this.id+'.dropdown-menu';
    // $(selector).toggle()
    $(this).toggleClass('is-active')
});
// Close dropdowns if user clicks outside of it
$(window).click(function (e) {
    //console.log(e.target.closest("div").className)
    if (!e.target.closest("div").className.includes("dropdown")) {
        $(".dropdown").removeClass('is-active');
    }
});

//handler for rank dropdown, set label to what's selected
$(".dropdownRankItem").click(function () {
    $('#dropDownRank.dropdown').find('#content').text(this.innerText)
})

//render all personnel on Panel and ensure visible
function renderPersonnelPanel() {
    //clear list
    var original = $(".template.personItem")[0];
    original = original.cloneNode(true);
    $("#lstPersonnel")[0].innerHTML = "";
    $("#lstPersonnel").append(original);
    personnel.forEach(function (item, index) {
        if (item !== undefined) {
            addPerson(item);
        }
    })
    //delete contents of unit dropdown and readd
    var dropdown = $("#dropDownUnit").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    units.forEach(function (item, index) {
        dropdown.innerHTML += ("<a class='dropdown-item unitItem' id=\'" + index + "\'>" + item + "</a>\n");
    });
}


function renderVehiclePanel() {
    //clear list
    var original = $(".template.vehiclePanel")[0];
    original = original.cloneNode(true);
    $("#lstVehicles")[0].innerHTML = "";
    $("#lstVehicles").append(original);
    vehicles.forEach(function (item, index) {
        if (item !== undefined) {
            addVehicle(item);
        }
    })
    //clear and readd vehicle type
    clearVehicleTypes();
    //clear deleter
    $("#removeVehicleType").addClass("hidden");
}

function clearVehicleTypes() {
    //delete contents of vehicle type dropdown and readd
    var dropdown = $("#dropDownVicType").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    //clear button
    $("#dropDownVicType").find("button").text("")
    vehicleTypes.forEach(function (item, index) {
        try {
            dropdown.innerHTML += ("<a class='dropdown-item vehicleTypeItem' id=\'" + index + "\'>" + item.name + "</a>\n");
        } catch (e) {
            //undefined most likely, continue
        }
    });
}

function renderAssignmentsPanel() {
//really just look against vehicle assignments and personnel
    //cleanup
    //get template, clone, clean, re-add
    //vehicles
    var original = $('.enditem_panel.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignVehicles')[0].textContent = "";
    $('#lstAssignVehicles').append(node);
    //personnel
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignPersonnel')[0].textContent = "";
    $('#lstAssignPersonnel').append(node);

    //first populate personnel
    for (index = 0; index < personnel.length; index++) {
        var person = personnel[index]
        //check if already in assignment.
        var personInAssignments = vehicleAssignments.find(assignment => {
            return (assignment.driver === person || assignment.tc === person);
        })
        if (!personInAssignments) {
            addPersonItem(person)
        }
    }
    //now go through existing vehicle assignments
    //1 remove all vehicle assignments no longer in vehicles
    //2 add all vehicle assignments not in vehicles
    vehicleAssignments.forEach(function (item, index) {
        //not in vehicles, remove
        if (vehicles.indexOf(item.vehicle) === -1) {
            vehicleAssignments[index] = undefined;
        }
    })
    vehicles.forEach(function (item, index) {
        //make sure all vehicles have vehicleAssignment obj
        var vehicleInAssignments = vehicleAssignments.find(assignment => {
            return assignment.vehicle === item;
        })
        if (!vehicleInAssignments) {
            //if not in, create
            vehicleAssignments.push(
                {
                    vehicle: item,
                    driver: "",
                    tc: "",
                    trailer: "",
                    valid: ""
                }
            )
        }
    })
    //now write to page
    var original = $('.enditem_panel.template')[0]
    for (index = 0; index < vehicleAssignments.length; index++) {
        node = original.cloneNode(true);
        var assignment = vehicleAssignments[index];
        $(node).find("#enditem_bumperNumber").text(assignment.vehicle.bumper);
        //if no TC or driver, leave empty and coat red
        var driverElement = $(node).find("#inputDriver");
        var tcElement = $(node).find("#inputTC");
        var trailerElement = $(node).find("#inputTrailer");
        if (assignment.driver.name !== undefined) {
            driverElement.text(assignment.driver.rank + " " + assignment.driver.name);
            driverElement.addClass("is-success is-light")
        } else {
            driverElement.text("");
            driverElement.addClass("is-danger is-light");
        }
        if (assignment.tc.name !== undefined) {
            tcElement.text(assignment.tc.rank + " " + assignment.tc.name);
            tcElement.addClass("is-success is-light");
        } else {
            tcElement.text("");
            tcElement.addClass("is-danger is-light");
        }
        if (assignment.trailer.bumper !== undefined) {
            trailerElement.text(assignment.trailer.bumper);
            trailerElement.addClass("is-success is-light");
        } else {
            trailerElement.text("");
            // trailerElement.addClass("is-danger is-light");
        }
        $(node).attr('id', index);
        $(node).removeClass("template");
        $('#lstAssignVehicles').append(node);

        //event handlers
        var items = [driverElement, tcElement, trailerElement]
        items.forEach(function (element, index) {
            element[0].addEventListener('drop', assignmentDropPerson);
            element[0].addEventListener('dragenter', function (event) {
                event.preventDefault()
            });
            element[0].addEventListener('dragover', function (event) {
                event.preventDefault()
            });
        })
        // driverElement[0].addEventListener('drop',assignmentDropPerson);
        //
        // tcElement[0].addEventListener('drop',assignmentDropPerson);
        // trailerElement[0].addEventListener('drop',assignmentDropPerson);
    }
}

$(".toplevelnav").click(function () {
    $(".appPanel").hide();
    $('#' + this.innerText).toggle();
    //if element is assignment, repopulate
    if (this.innerText === "Personnel") {
        renderPersonnelPanel();
    }
    if (this.innerText === "Personnel") {
        renderVehiclePanel();
    }
    if (this.innerText === "Assignment") {
        renderAssignmentsPanel();
    }
});

function addPersonItem(thisperson) {
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $(node).find(".title").text(thisperson.rank + ' ' + thisperson.name);
    $(node).attr('id', personnel.indexOf(thisperson));
    $(node).removeClass("template");
    $('#lstAssignPersonnel').append(node);
    //add event handlers
    node.addEventListener('dragstart', assignmentDragStart)
    node.addEventListener('dragend', assignmentDragEnd)
}

// when vehicle panel selected, color & load into panel
$("#lstVehicles").on('click', ".vehiclePanel", function (e) {
    editingItem = e.target.closest("div.vehiclePanel").id;
    var targetVehicle = vehicles[editingItem];
    if (targetVehicle === undefined) {
        editingItem = false;
        return;
    }
    $(".vehiclePanel").removeClass('is-active');
    $(this).addClass('is-active')
    $("#inputVehicleBumper").val(targetVehicle.bumper);
    $('#chkVehicleJBCP').prop('checked', targetVehicle.jbcp);
    $('#chkVehicleRadio').prop('checked', targetVehicle.radio);
    $('#dropDownVicType.dropdown').find('#content').text(targetVehicle.type);
    e.preventDefault();
});

//handle deletions
$("#lstPersonnel").on('click', "#removePerson", function (e) {
    var node = e.target.closest("div.personItem");
    var nodeID = node.id;
    personnel[nodeID] = undefined;
    node.remove();
});

//when person click change color load into panel
//necessary to use different syntax here since dynamically added elements
$("#lstPersonnel").on('click', ".personItem", function (e) {
    editingItem = e.target.closest("div.personItem").id;
    var targetPerson = personnel[editingItem];
    if (targetPerson === undefined) {
        editingItem = false;
        return;
    }
    $("#inputPersonName").val(targetPerson.name);
    $('#chkPersonLicense').prop('checked', targetPerson.license);
    $('#dropDownRank.dropdown').find('#content').text(targetPerson.rank);
    e.preventDefault();
});

$("#btnSubmitPerson").click(function () {

    var newPerson = {
        name: $("#inputPersonName").val(),
        rank: $('#dropDownRank.dropdown').find('#content').text(),
        unit: $('#dropDownUnit.dropdown').find('button').text(),
        license: $("#chkPersonLicense").checked
    }
    if (newPerson.name.length <= 0) {
        alert("Enter a valid name in the name field.")
        return false;
    }
    if (editingItem !== false) {
        personnel[editingItem] = newPerson;
        var existingNode = $("#" + editingItem + ".personItem");
        addPerson(newPerson, existingNode)
        editingItem = false;
    } else {
        personnel.push(newPerson);
        addPerson(newPerson)

    }
    //cleanup
    $("#inputPersonName").val("")
    $('#dropDownRank.dropdown').find('#content').text("")
    return true;
});

function addPerson(newPerson, node = null) {
    if (node == null) {
        // get node
        var original = $('.personItem.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".title").text(newPerson.rank + ' ' + newPerson.name);
    $(node).find(".unit").text(newPerson.unit);
    $(node).attr('id', personnel.indexOf(newPerson));
    $(node).removeClass("template");
    $('#lstPersonnel').append(node);
}

//handle deletions
$("#lstVehicles").on('click', "#removeVehicle", function (e) {
    var node = e.target.closest("div.vehiclePanel");
    var nodeID = node.id;
    vehicles[nodeID] = undefined;
    node.remove();
});

//same as personnel but for vehicles
$("#btnSubmitVehicle").click(function () {

    var newVehicle = {
        bumper: $("#inputVehicleBumper").val(),
        type: vehicleTypes[$('#dropDownVicType').find('.button').attr("id")],
        radio: $("#inputVehicleRadio").checked,
        unit: "",
        jbcp: $("#inputVehicleJBCP").checked
    }
    if (newVehicle.bumper.length <= 0) {
        alert("Enter a valid bumper# in the bumper# field.")
        return false;
    }
    if (editingItem !== false) {
        vehicles[editingItem] = newVehicle;
        var existingNode = $("#" + editingItem + ".vehiclePanel");
        addVehicle(newVehicle, existingNode)
        editingItem = false;
    } else {
        vehicles.push(newVehicle);
        addVehicle(newVehicle)

    }
    //cleanup
    $("#inputVehicleBumper").val("")
    $('#dropDownVicType.dropdown').find('#content').text("")
    return true;
});

function addVehicle(newVehicle, node = null) {
    console.log(newVehicle)
    if (node == null) {
        // get node
        var original = $('.vehiclePanel.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".bumper").text(newVehicle.bumper);
    try {
        $(node).find(".type").text(newVehicle.type.name);
        $(node).find('.vehiclePanelImage').css("background-image", "url(" + newVehicle.type.image + ")");
    } catch (e) {
        $(node).find(".type").text("")
    }
    $(node).find(".unit").text(newVehicle.unit);
    $(node).attr('id', vehicles.indexOf(newVehicle));
    $(node).removeClass("template");
    $('#lstVehicles').append(node);
}

//unit handlers
$("#addUnit").click(function () {
    $("#addUnitPanel").addClass("is-active");
})

$(".cancelUnit").click(function () {
    closeCreateUnit();
})

// save from modal to vehicletypes array
$("#saveUnit").click(function () {
    var unitName = $("#inputUnitName").val();
    if (unitName.length <= 0) {
        alert("Enter a valid unit name.");
        return;
    }
    units.push(unitName
    );
    //close and cleanup
    closeCreateUnit();
    //refresh vehicle types on main by recalling render
    renderPersonnelPanel();
})

function closeCreateUnit() {
    $("#addUnitPanel").removeClass("is-active");
    $("#inputUnitName").val("");
}

//handle when click unit
$(".dropdown-content").on('click', ".unitItem", function (e) {
    var targetButton = $("#dropDownUnit").find(".button");
    targetButton.text(units[this.id])
    targetButton.attr("id", this.id)
});

//vehicletype handlers
$("#addVehicleType").click(function () {
    $("#addVehicleTypePanel").addClass("is-active");
})

$(".cancelVehicleType").click(function () {
    closeVehicleTypes();
})

// save from modal to vehicletypes array
$("#saveVehicleType").click(function () {
    var typeName = $("#inputVehicleTypeName").val();
    if (typeName.length <= 0) {
        alert("Enter a valid vehicle type name.");
        return;
    }
    var imageData=$("#imgVehicleTypePreview")[0].src;
    if($("#chooseTypeImage").val()==="") {
        //revert to basic image
        imageData=noImage;
    }
    vehicleTypes.push(
        {
            name: typeName,
            image: imageData
        }
    )
    //close and cleanup
    closeVehicleTypes();
    //refresh vehicle types on main by recalling render
    renderVehiclePanel();
})

function closeVehicleTypes() {
    $("#addVehicleTypePanel").removeClass("is-active");
    $("#inputVehicleTypeName").val("");
    $("#chooseTypeImage").val("");
    $("#imgVehicleTypePreview")[0].src = "";
}

//handle when click vehicle type
$(".dropdown-content").on('click', ".vehicleTypeItem", function (e) {
    var targetButton = $("#dropDownVicType").find(".button");
    targetButton.text(vehicleTypes[this.id].name)
    targetButton.attr("id", this.id)
    $("#removeVehicleType").removeClass("hidden");
});

//handle click vehicle type deletion
$("#removeVehicleType").click(function () {
    var targetButton = $("#dropDownVicType").find(".button");
    vehicleTypes[targetButton.attr("id")] = undefined;
    clearVehicleTypes();
});

function allowDrop(e) {
    // e.preventDefault();
}


function assignmentDragStart(e) {
    e.dataTransfer.setData("currentPersonID", e.target.id);
    e.target.classList.add("dragging");
}

function assignmentDragEnd(e) {
    e.target.classList.remove("dragging");
}

function assignmentDropPerson(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    var targetPersonID = e.dataTransfer.getData("currentPersonID");
    // e.target.id=targetPersonID
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    console.log(e.target);
    //do different things depending on what target is
    var person = personnel[targetPersonID]
    if (e.target.id === "inputDriver") {
        thisEndItem.driver = person;
        e.target.innerHTML = person.rank + " " + person.name;
        e.target.classList.add("is-success");
        e.target.classList.remove("is-danger");
    } else if (e.target.id === "inputTC") {
        thisEndItem.tc = person;
        e.target.innerHTML = person.rank + " " + person.name;
        e.target.classList.add("is-success");
        e.target.classList.remove("is-danger");
    }
    //remove from pool
    $("#" + targetPersonID + ".assignmentPersonItem").remove();
}

//on click, remove, change appearance
//put person back into roster
$("#lstAssignVehicles").on('click', ".assignmentDropzone", function (e) {
    if (this.innerHTML === "") return;
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    var person = undefined;
    if (this.id === "inputDriver") {
        person = thisEndItem.driver;
        thisEndItem.driver = "";
    }
    if (this.id === "inputTC") {
        person = thisEndItem.tc;
        thisEndItem.tc = "";
    }
    this.innerHTML = "";
    this.classList.remove("is-success")
    this.classList.add("is-danger")
    //put person back in pool
    addPersonItem(person);
})


function selectVehicleTypeImage(e) {
    //read local file selected by user
    var reader = new FileReader();
    reader.onload = function () {
        //render image to select element
        var preview = $("#imgVehicleTypePreview")[0]
        console.log(reader.result)
        preview.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}


var noImage="data:image/jpeg;base64,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"