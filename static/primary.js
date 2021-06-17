//placeholder image when none exist
var noImage = "data:image/jpeg;base64,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"


//save js

$.getScript("https://realmtiel.com/troops2seat/static/FileSaver.js", function () {
});

//globals
var units = ["1PLT"]
var personnel = [
    {name: "Burch", rank: "PVT", unit: 0, license: false},
    {name: "Jorge", rank: "SPC", unit: 0, license: true}];
var vehicleTypes = [
    {name: "M1097", image: noImage, isEquipment: false},
    {name: "Trailer", image: noImage, isEquipment: true}];
var vehicles = [
    {bumper: "C200", type: 0, unit: 0}];
var editingItem = false;
var vehicleAssignments = [];


window.onload = function () {
    //first panel loaded should go here
    renderVehiclePanel();
    if (document.cookie.split(';').some((item) => item.trim().startsWith('startupWarning='))) {
    } else {
        $("#modalAppStart").addClass("is-active");
        document.cookie = "startupWarning=true;"
    }
    //set up event listener for image upload
    $("#chooseTypeImage")[0].addEventListener("change", selectVehicleTypeImage)
    $("#uploadData")[0].addEventListener("change", getTroopData)

}

$(".btnAcceptStartup").click(function () {
    $("#modalAppStart").removeClass("is-active");
})

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

$("#btnGenReport").click(function () {
    // $("#main").toggle();
    // $("#render").toggle();
    genVehicleAssignments();
    console.log(vehicleAssignments)
    $("#renderContainer")[0].innerHTML="";
    for (index = 0; index < vehicleAssignments.length; index++) {
        addVehicleAssignment(index, $('.enditem_panel.template')[0], $("#renderContainer")[0])
    }

    //tell user about printing
    if (document.cookie.split(';').some((item) => item.trim().startsWith('printWarning='))) {
        //do nothing if this exists
    } else {
        document.cookie = "printWarning=true";

        alert("Select Save to PDF to save a digital copy. Or print it. It's your life.")
    }
    window.print();
})

//render all personnel on Panel and ensure visible
function renderPersonnelPanel() {

    $('#Personnel').removeClass("hidden");
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
    clearUnitsDropdown();
    //clean up editing warnings
    $("#btnCancelSubmitPerson").addClass("hidden");
    $("#lblPersonEditWarning").text("");
}

function clearUnitsDropdown() {
    //clear existing selection
    var dropdown = $("#dropDownUnit").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    units.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item unitItem' id=\'" + index + "\'>" + item + "<button class=\"removeUnit delete is-small\"></button> </div> \n");
        }
    });
}

function clearVehicleUnitsDropdown() {

    var dropdown = $("#dropDownVehicleUnit").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    units.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item vehicleUnitItem' id=\'" + index + "\'>" + item + "<button class=\"removeVehicleUnit delete is-small\"></button> </div> \n");
        }
    });
}


function renderVehiclePanel() {

    $('#Vehicles').removeClass("hidden");
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
    clearVehicleTypesDropdown();
    //clear and readd units
    clearVehicleUnitsDropdown();
    //clear deleter
    $("#removeVehicleType").addClass("hidden");
    //clean up editing warnings
    $("#btnCancelSubmitVehicle").addClass("hidden");
    $("#lblPersonEditWarning").text("");
}

function clearVehicleTypesDropdown() {
    //delete contents of vehicle type dropdown and readd
    var dropdown = $("#dropDownVicType").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    vehicleTypes.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item vehicleTypeItem' id=\'" + index + "\'>" + item.name + "<button class=\"removeVehicleType delete is-small\"></button> </div>\n");
        }
    });
}

function renderAssignmentsPanel() {
    if (personnel.length <= 0) {
        alert("No personnel to assign. Please add one or more personnel.")
        return;
    }
    if (vehicles.length <= 0) {
        alert("No vehicles to assign. Please add one or more vehicles.")
        return;
    }
    $('#Assignment').removeClass("hidden");
    //really just look against vehicle assignments and personnel
    //cleanup
    //get template, clone, clean, re-add
    //vehicles
    var original = $('.enditem_panel.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignVehicles')[0].textContent = "";
    $('#lstAssignVehicles').append(node);

    //personnel
    genPersonnelAssignmentPanel();

    //generate assignments
    genVehicleAssignments();

    //now write to page
    var original = $('.enditem_panel.template')[0]
    for (index = 0; index < vehicleAssignments.length; index++) {
        addVehicleAssignment(index, original)
    }
}

function genPersonnelAssignmentPanel() {
//personnel
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignPersonnel')[0].textContent = "";
    $('#lstAssignPersonnel').append(node);

    //first populate personnel
    for (index = 0; index < personnel.length; index++) {
        try {
            var person = personnel[index]
            //check if already in assignment.
            var personInAssignments = vehicleAssignments.find(assignment => {
                if (assignment !== undefined) {
                    return (personnel[assignment.driver] === person || personnel[assignment.tc] === person);
                }
            })
            if (!personInAssignments) {
                addPersonItem(person)
            }
        } catch (e) {
            continue;
        }
    }
}

function genEquipmentAssignmentPanel() {
//personnel
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignPersonnel')[0].textContent = "";
    $('#lstAssignPersonnel').append(node);

    //populate equipment from vehicles that have that checked
    for (index = 0; index < vehicles.length; index++) {
        try {
            if (vehicleTypes[vehicles[index].type].isEquipment) {
                var gear = vehicles[index];
                //check if already in assignment.
                var gearInAssignments = vehicleAssignments.find(assignment => {
                    if (assignment !== undefined) {
                        return (vehicles[assignment.trailer] === gear);
                    }
                })
                //if not already somewhere, pop in list
                if (!gearInAssignments) {
                    addGearItem(gear);
                }
            }
        } catch (e) {
            console.log(e);
            continue;
        }
    }
}

function genVehicleAssignments() {
    //now go through existing vehicle assignments
    //1 remove all vehicle assignments no longer in vehicles
    //2 add all vehicle assignments not in vehicles
    vehicleAssignments.forEach(function (item, index) {
        if (item !== undefined) {
            //not in vehicles, remove
            if (vehicles[item.vehicle] === undefined || vehicleTypes[vehicles[item.vehicle].type].isEquipment) {
                vehicleAssignments[index] = undefined;
            }
        }
    })
    vehicles.forEach(function (item, index) {
        //make sure all vehicles have vehicleAssignment obj
        if (item === undefined) {
            return;
        }
        try {
            var vehicleInAssignments = vehicleAssignments.find(assignment => {
                if (assignment !== undefined) {
                    return vehicles[assignment.vehicle] === item;
                }
            })
        } catch (e) {
            return;
        }
        if (!vehicleInAssignments && !vehicleTypes[item.type].isEquipment) {
            //if not in, create
            vehicleAssignments.push(
                {
                    vehicle: vehicles.indexOf(item),
                    driver: undefined,
                    tc: undefined,
                    trailer: undefined,
                    valid: false
                }
            )
        }
    })
}

//add vehicle assignment to page
function addVehicleAssignment(index, original, location = $('#lstAssignVehicles')) {
    try {
        node = original.cloneNode(true);
        var assignment = vehicleAssignments[index];
        if (assignment === undefined) {
            return false;
        }
        $(node).find("#enditem_bumperNumber").text(vehicles[assignment.vehicle].bumper);
        $(node).find("#enditem_type").text(vehicleTypes[vehicles[assignment.vehicle].type].name);
        $(node).find("#enditem_unit").text(units[vehicles[assignment.vehicle].unit]);

        //if no TC or driver, leave empty and coat red
        var driverElement = $(node).find("#inputDriver");
        var tcElement = $(node).find("#inputTC");
        var trailerElement = $(node).find("#inputTrailer");
        if (assignment.driver !== undefined) {
            driverElement.text(personnel[assignment.driver].rank + " " + personnel[assignment.driver].name);
            if (personnel[assignment.driver].license) {
                driverElement.addClass("is-success is-light")
            }
            else {
                driverElement.addClass("is-danger is-light");
            }
        } else {
            driverElement.text("");
            driverElement.addClass("is-danger is-light");
        }
        if (assignment.tc !== undefined) {
            tcElement.text(personnel[assignment.tc].rank + " " + personnel[assignment.tc].name);
            if (personnel[assignment.tc].license) {
                tcElement.addClass("is-success is-light");
            }
            else {
                tcElement.addClass("is-danger is-light");
            }
        } else {
            tcElement.text("");
            tcElement.addClass("is-danger is-light");
        }
        if (assignment.trailer !== undefined) {
            trailerElement.text(vehicles[assignment.trailer].bumper);
            trailerElement.addClass("is-success is-light");
        } else {
            trailerElement.text("");
            // trailerElement.addClass("is-danger is-light");
        }
        //image
        try {
            $(node).find(".enditem_vehiclePreview").css("background-image", "url(" + vehicleTypes[vehicles[assignment.vehicle].type].image + ")");
        } catch (e) {
        }
        //set indicators
        if (vehicles[assignment.vehicle].radio) {
            $(node).find(".radioProperty").addClass("present")
        }
        if (vehicles[assignment.vehicle].jbcp) {
            $(node).find(".jbcpProperty").addClass("present")
        }
        //everyone has license
        if (assignment.tc !== undefined && assignment.driver !== undefined) {
            if (personnel[assignment.tc].license && personnel[assignment.driver].license) {
                $(node).find(".licensesProperty").addClass("present")
            }
        }

        $(node).attr('id', index);
        $(node).removeClass("template");
        location.append(node);

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
    } catch (e) {
        console.log(e);
        return;
    }
}

//main navigation on the page through side buttons
$(".toplevelnav").click(function () {
    $(".appPanel").addClass("hidden");
    //clean everything
    cleanPersonnelPanel();
    cleanVehiclePanel();
    cleanAssignmentsPanel();
    editingItem = false;
    //if element is assignment, repopulate
    if (this.innerText === "Personnel") {
        renderPersonnelPanel();
    }
    if (this.innerText === "Vehicles") {
        renderVehiclePanel();
    }
    if (this.innerText === "Assignment") {
        renderAssignmentsPanel();
    }
});

//add a person object to the assignment panel
function addPersonItem(thisperson) {
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    let itemString = thisperson.rank + ' ' + thisperson.name;
    if (thisperson.license) {
        itemString += "<p style='float:right; font-style: italic; font-weight: normal'>  Licensed</p>"
    }
    $(node).find(".title")[0].innerHTML = (itemString);
    $(node).attr('id', personnel.indexOf(thisperson));
    $(node).removeClass("template");
    $('#lstAssignPersonnel').append(node);
    //add event handlers
    node.addEventListener('dragstart', assignmentDragStart)
    node.addEventListener('dragend', assignmentDragEnd)
}

//same as above but for gear
function addGearItem(thisgear) {
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $(node).find(".title").text(thisgear.bumper);
    $(node).attr('id', vehicles.indexOf(thisgear));
    $(node).removeClass("template");
    $('#lstAssignPersonnel').append(node);
    //add event handlers
    node.addEventListener('dragstart', assignmentDragStart)
    node.addEventListener('dragend', assignmentDragEnd)
}

// when vehicle panel selected, color & load into panel
$("#lstVehicles").on('click', ".vehiclePanel", function (e) {
    //intuitive for users to double click to deselect.
    if ($("#" + editingItem + ".vehiclePanel")[0] === e.target.closest("div.vehiclePanel")) {
        cleanVehiclePanel();
        editingItem = false;
        return;
    }
    editingItem = e.target.closest("div.vehiclePanel").id;
    //change submit button to reflect
    var targetVehicle = vehicles[editingItem];
    //if not exist ignore
    if (targetVehicle === undefined) {
        editingItem = false;
        return;
    }
    //update warning
    $("#lblVehicleEditWarning").text("Editing " + targetVehicle.bumper);
    $("#btnCancelSubmitVehicle").removeClass("hidden");

    $(".vehiclePanel").removeClass('is-active');
    $(this).addClass('is-active')
    $("#inputVehicleBumper").val(targetVehicle.bumper);
    $('#chkVehicleJBCP').prop('checked', targetVehicle.jbcp);
    $('#chkVehicleRadio').prop('checked', targetVehicle.radio);
    $('#dropDownVicType.dropdown').find('button').text(vehicleTypes[targetVehicle.type].name);
    //set id too
    $('#dropDownVicType.dropdown').find('button').attr("id", vehicleTypes.indexOf(vehicleTypes[targetVehicle.type]));
    //same but for vehicle unit
    $('#dropDownVehicleUnit.dropdown').find('.button').text(units[targetVehicle.unit]);
    //set id too
    $('#dropDownVehicleUnit.dropdown').find('.button').attr("id", units.indexOf(targetVehicle.unit));
    e.preventDefault();
});

//handle deletions
$("#lstPersonnel").on('click', "#removePerson", function (e) {
    var node = e.target.closest("div.personItem");
    var nodeID = node.id;
    //if deleting edited item, clear
    if (nodeID === editingItem) {
        cleanPersonnelPanel();
    }
    personnel[nodeID] = undefined;
    node.remove();
});

//when person click change color load into panel
//necessary to use different syntax here since dynamically added elements
$("#lstPersonnel").on('click', ".personItem", function (e) {
    //deselect all for sanity
    $(".personItem").removeClass("is-active");

    if ($("#" + editingItem + ".personItem")[0] === e.target.closest("div.personItem")) {
        cleanPersonnelPanel();
        editingItem = false;
        return;
    }
    //grab the personitem, store ID
    editingItem = e.target.closest("div.personItem").id;
    var targetPerson = personnel[editingItem];
    //if no longer exists ignore
    if (targetPerson === undefined) {
        editingItem = false;
        return;
    }
    //update warning and show cancel button
    $("#lblPersonEditWarning").text("Editing " + targetPerson.rank + " " + targetPerson.name);
    $("#btnCancelSubmitPerson").removeClass("hidden");

    //visual selection indicator
    e.target.closest("div.personItem").classList.add("is-active")
    try {
        $("#inputPersonName").val(targetPerson.name);
        $('#chkPersonLicense').prop('checked', targetPerson.license);
        $('#dropDownRank.dropdown').find('#content').text(targetPerson.rank);
        $('#dropDownUnit.dropdown').find('button').text(units[targetPerson.unit]);

    } catch (e) {
        alert("error occured while loading for edit");
    }

    e.preventDefault();
});

//when cancel button hit, clear panel
$("#btnCancelSubmitPerson").click(function () {
    //just dry render
    renderPersonnelPanel();
    cleanPersonnelPanel();
    editingItem = false;
})

//when cancel button hit, clear panel
$("#btnCancelSubmitVehicle").click(function () {
    renderVehiclePanel();
    cleanVehiclePanel();
    editingItem = false;
})

//when submit button clicked, create new entry in Personnel and clear panel.
//append a cell to lstPersonnel or update the existing one if editing
$("#btnSubmitPerson").click(function () {

    var newPerson = {
        name: $("#inputPersonName").val(),
        rank: $('#dropDownRank.dropdown').find('#content').text(),
        unit: units.indexOf($('#dropDownUnit.dropdown').find('.button').text()),
        license: $("#chkPersonLicense")[0].checked
    }
    if (newPerson.name.length <= 0) {
        alert("Enter a valid name in the name field.")
        return false;
    }
    if (newPerson.unit === -1 || newPerson.unit === undefined) {
        alert("Select a valid unit.")
        return false;
    }
    if (editingItem !== false) {
        personnel[editingItem] = newPerson;
        var existingNode = $("#" + editingItem + ".personItem");
        addPerson(newPerson, existingNode)
        //revert back
        existingNode.removeClass("is-active");
        //remove warning
        // $("#lblPersonEditWarning").text("");
        editingItem = false;
        cleanPersonnelPanel(true);
        return newPerson;
    } else {
        personnel.push(newPerson);
        addPerson(newPerson)
        cleanPersonnelPanel();
        return newPerson;
    }
});

//clear all elements from the form
function cleanPersonnelPanel(full = false) {
    if (full) {
        $('#dropDownRank.dropdown').find('#content').text("")
        $('#dropDownUnit.dropdown').find('.button').text("")
    }
    $("#inputPersonName").val("")
    $('#chkPersonLicense').prop('checked', false);
    $("#lblPersonEditWarning").text("");
    $("#btnCancelSubmitPerson").addClass("hidden");
    $(".personItem").removeClass("is-active");
}

//creates a cell in lstPersonnel for a given person object
function addPerson(newPerson, node = null) {
    if (node == null) {
        // get node
        var original = $('.personItem.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".title").text(newPerson.rank + ' ' + newPerson.name);
    $(node).find(".unit").text(units[newPerson.unit]);
    $(node).attr('id', personnel.indexOf(newPerson));
    $(node).removeClass("template");
    $('#lstPersonnel').append(node);
}

//handle deletions when an X is clicked
$("#lstVehicles").on('click', "#removeVehicle", function (e) {
    var node = e.target.closest("div.vehiclePanel");
    var nodeID = node.id;
    //if this is the same as what's being edited, clear
    if (nodeID === editingItem) {
        cleanVehiclePanel();
    }
    vehicles[nodeID] = undefined;
    node.remove();
});

//when submit button clicked, create new entry in Vehicles and clear panel.
$("#btnSubmitVehicle").click(function () {

    var newVehicle = {
        bumper: $("#inputVehicleBumper").val(),
        radio: $("#chkVehicleRadio")[0].checked,
        unit: units.indexOf($('#dropDownVehicleUnit.dropdown').find('button').text()),
        jbcp: $("#chkVehicleJBCP")[0].checked,
        type: $('#dropDownVicType').find('.button').attr("id")
    }
    if (newVehicle.bumper.length <= 0) {
        alert("Enter a valid bumper# in the bumper# field.")
        return false;
    }
    if (vehicleTypes[newVehicle.type] === undefined) {
        alert("Select a valid vehicle type.")
        return false;
    }
    if (newVehicle.unit === -1 || newVehicle.unit === undefined) {
        alert("Select a valid unit.")
        return false;
    }
    if (editingItem !== false) {
        vehicles[editingItem] = newVehicle;
        var existingNode = $("#" + editingItem + ".vehiclePanel");
        addVehicle(newVehicle, existingNode);
        //make sure not selected
        existingNode.removeClass("is-active");
        //remove warning
        // $("#lblVehicleEditWarning").text("");
        editingItem = false;
        cleanVehiclePanel(true);
        return newVehicle;
    } else {
        vehicles.push(newVehicle);
        addVehicle(newVehicle)
        //full cleanup
        cleanVehiclePanel();
        return newVehicle;
    }
});

//clear all elements from the panel. Can be done fully or just most pertinent elements
function cleanVehiclePanel(full = false) {
    if (full) {
        $('#dropDownVicType.dropdown').find('button').text("")
        $('#dropDownVehicleUnit.dropdown').find('.button').text("")
    }
    $("#inputVehicleBumper").val("")
    $('#chkVehicleJBCP').prop('checked', false);
    $('#chkVehicleRadio').prop('checked', false);
    $("#lblVehicleEditWarning").text("");
    $("#imgVehiclePanelPreview").css("background-image", "");
    $("#btnCancelSubmitVehicle").addClass("hidden");
    $(".vehiclePanel").removeClass("is-active");
}

function cleanAssignmentsPanel() {
    $(".tabLstAssignment").removeClass("is-active");
    $("#tabLstAssignmentPeople").addClass("is-active");
}


//append a cell to lstVehicles or update the existing one if editing
function addVehicle(newVehicle, node = null) {
    // console.log(newVehicle)
    if (node == null) {
        // get node
        var original = $('.vehiclePanel.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".bumper").text(newVehicle.bumper);
    try {
        $(node).find(".type").text(vehicleTypes[newVehicle.type].name);
        if (vehicleTypes[newVehicle.type].image !== undefined) {
            $(node).find('.vehiclePanelImage').css("background-image", "url(" + vehicleTypes[newVehicle.type].image + ")");
        }
    } catch (e) {
        $(node).find(".type").text("")
    }
    $(node).find(".unit").text(units[newVehicle.unit]);
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
// save from modal to units array
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
    clearUnitsDropdown();
})

function closeCreateUnit() {
    $("#addUnitPanel").removeClass("is-active");
    $("#inputUnitName").val("");
}

//vehicle unit handlers
$("#addVehicleUnit").click(function () {
    $("#addVehicleUnitPanel").addClass("is-active");
})
$(".cancelUnit").click(function () {
    closeCreateVehicleUnit();
})
// save from modal to units array
$("#saveVehicleUnit").click(function () {
    var unitName = $("#inputVehicleUnitName").val();
    if (unitName.length <= 0) {
        alert("Enter a valid unit name.");
        return;
    }
    units.push(unitName
    );
    //close and cleanup
    closeCreateVehicleUnit();
    //refresh vehicle types on main by recalling render
    clearVehicleUnitsDropdown();
})

function closeCreateVehicleUnit() {
    $("#addVehicleUnitPanel").removeClass("is-active");
    $("#inputVehicleUnitName").val("");
}

//handle when click unit from the unit dropdown on personnel panel
$(".dropdown-content").on('click', ".unitItem", function (e) {
    var targetButton = $("#dropDownUnit").find(".button");
    if (units[this.id] === undefined) return;
    targetButton.text(units[this.id])
    targetButton.attr("id", this.id)
});
//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeUnit", function (e) {
    var targetType = e.target.closest(".unitItem");
    try {
        units[targetType.id] = undefined;
    } catch (e) {
    }
    $('#dropDownUnit.dropdown').find('.button').text("");
    clearUnitsDropdown();
    // renderPersonnelPanel();
});

//same but for vehicle unit
//handle when click unit from the unit dropdown on personnel panel
$(".dropdown-content").on('click', ".vehicleUnitItem", function (e) {
    var targetButton = $("#dropDownVehicleUnit").find(".button");
    if (units[this.id] === undefined) return;
    targetButton.text(units[this.id])
    targetButton.attr("id", this.id)
});
//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeVehicleUnit", function (e) {
    var targetType = e.target.closest(".vehicleUnitItem");
    try {
        units[targetType.id] = undefined;
    } catch (e) {
    }
    //clear existing selection
    $('#dropDownVehicleUnit.dropdown').find('.button').text("");
    clearVehicleUnitsDropdown();
    // renderVehiclePanel();
});

//vehicletype handlers
$("#addVehicleType").click(function () {
    $("#addVehicleTypePanel").addClass("is-active");
})

// cancel creation of a vehicle type on the modal
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
    var imageData = $("#imgVehicleTypePreview")[0].src;
    if ($("#chooseTypeImage").val() === "") {
        //revert to basic image
        imageData = noImage;
    }
    var isEquipment = $("#chkTypeTrailer")[0].checked
    vehicleTypes.push(
        {
            name: typeName,
            image: imageData,
            isEquipment: isEquipment
        }
    )
    //close and cleanup
    closeVehicleTypes();
    //refresh vehicle types on main by recalling render
    clearVehicleTypesDropdown();
})

//clears vehicletype creation modal for re-use
function closeVehicleTypes() {
    $("#addVehicleTypePanel").removeClass("is-active");
    $("#inputVehicleTypeName").val("");
    $("#chooseTypeImage").val("");
    $("#chkTypeTrailer").prop('checked', "");
    $("#imgVehicleTypePreview")[0].src = "";
}

//handle when click vehicle type
$(".dropdown-content").on('click', ".vehicleTypeItem", function (e) {
    var targetButton = $("#dropDownVicType").find(".button");
    if (vehicleTypes[this.id] === undefined) return;
    targetButton.text(vehicleTypes[this.id].name)
    targetButton.attr("id", this.id)
    //set preview
    $("#imgVehiclePanelPreview").css("background-image", "url(" + vehicleTypes[this.id].image + ")");
    // $("#removeVehicleType").removeClass("hidden");
});

//handle click vehicle type deletion
$("#removeVehicleType").click(function () {
    alert("asfas")
    var targetButton = $("#dropDownVicType").find(".button");
    vehicleTypes[targetButton.attr("id")] = undefined;
    //clear button
    clearVehicleTypesDropdown();
});

//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeVehicleType", function (e) {
    var targetType = e.target.closest(".vehicleTypeItem");
    vehicleTypes[targetType.id] = undefined;
    $("#dropDownVicType").find("button").text("");
    clearVehicleTypesDropdown();
    $("#imgVehiclePanelPreview").css("background-image", "");
    // renderVehiclePanel();
});

function allowDrop(e) {
    // e.preventDefault();
}


function assignmentDragStart(e) {
    e.dataTransfer.setData("currentID", e.target.id);
    e.target.classList.add("dragging");
}

function assignmentDragEnd(e) {
    e.target.classList.remove("dragging");
}

//called on the slots on the vehicleassignmentpanel when a person item is dropped
//transfers element to the panel and removes the person from the pool
function assignmentDropPerson(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    var targetID = e.dataTransfer.getData("currentID");
    // e.target.id=targetPersonID
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    //do different things depending on what target is
    //and type right now
    if ($("#tabLstAssignmentPeople").hasClass("is-active")) {
        var person = personnel[targetID]
        if (e.target.id === "inputDriver") {
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addPersonItem(personnel[thisEndItem.driver]);
            }
            thisEndItem.driver = personnel.indexOf(person);
            e.target.innerHTML = person.rank + " " + person.name;
            //if have license
            if (person.license) {
                e.target.classList.add("is-success");
                e.target.classList.remove("is-danger");
            }

        } else if (e.target.id === "inputTC") {
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addPersonItem(personnel[thisEndItem.tc]);
            }
            thisEndItem.tc = personnel.indexOf(person);
            e.target.innerHTML = person.rank + " " + person.name;
            if (person.license) {
                e.target.classList.add("is-success");
                e.target.classList.remove("is-danger");
            }
        } else {
            alert("That can't go here.")
            return;
        }
    } else {
        if (e.target.id === "inputTrailer") {
            var gear = vehicles[targetID];
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addGearItem(vehicles[thisEndItem.trailer]);
            }
            thisEndItem.trailer = vehicles.indexOf(gear);
            e.target.innerHTML = gear.bumper
            e.target.classList.add("is-success");
            e.target.classList.remove("is-danger");

        } else {
            alert("That can't go here.")
            return;
        }
    }
    //remove from pool
    $("#" + targetID + ".assignmentPersonItem").remove();
}

//on click of a dropzone occupied by a person, remove them and return from pool
//put person back into roster
$("#lstAssignVehicles").on('click', ".assignmentDropzone", function (e) {
    if (this.innerHTML === "") return;
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    var evictee = undefined;
    if ($("#tabLstAssignmentPeople").hasClass("is-active")) {
        if (this.id === "inputDriver") {
            evictee = personnel[thisEndItem.driver];
            thisEndItem.driver = undefined;
        }
        if (this.id === "inputTC") {
            evictee = personnel[thisEndItem.tc];
            thisEndItem.tc = undefined;
        }
        addPersonItem(evictee);
    } else {
        if (this.id === "inputTrailer") {
            evictee = vehicles[thisEndItem.trailer];
            thisEndItem.trailer = undefined;
        }
        addGearItem(evictee);
    }
    this.innerHTML = "";
    this.classList.remove("is-success")
    this.classList.add("is-danger")
    //put person back in pool
})

//called when users selects an image to load in the new vehicle type modal
//loads file in b64 into the image tag on the modal which can then be manipulated by other functions
function selectVehicleTypeImage(e) {
    //read local file selected by user
    var reader = new FileReader();
    reader.onload = function () {
        //render image to select element
        var preview = $("#imgVehicleTypePreview")[0]
        preview.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

$(".download").click(function () {
    //serialize all items
    var saveData = {
        units: units,
        personnel: personnel,
        vehicleTypes: vehicleTypes,
        vehicles: vehicles,
        vehicleAssignments: vehicleAssignments
    }
    //save file
    saveAs(new Blob([JSON.stringify(saveData)], {type: "octet/stream"}), "troopData.dat");
});

//get uploaded data and apply to instance
function getTroopData(e) {
    //read local file selected by user
    var reader = new FileReader();
    //once upload complete execute inline function
    reader.onload = function () {
        //take string data, parse from json into js objects
        var totalData = JSON.parse(reader.result);
        units = totalData["units"]
        vehicleTypes = totalData["vehicleTypes"]
        vehicles = totalData["vehicles"]
        personnel = totalData["personnel"]
        vehicleAssignments = totalData["vehicleAssignments"]
        //force
        $("#vehiclesNav").click();
    };
    reader.readAsText(e.target.files[0]);
}

$(".tabLstAssignment").click(function () {
    $(".tabLstAssignment").removeClass("is-active");
    $(this).addClass("is-active");
    if (this.id === "tabLstAssignmentEquipment") {
        //populate with equipment
        genEquipmentAssignmentPanel();

    } else if (this.id === "tabLstAssignmentPeople") {
        //populate with people
        genPersonnelAssignmentPanel();
    }
});