$(document).ready(function () {
    let fname = $('#firstName');
    let lname = $('#lastName');
    let suff = $('#suffix');
    let phoneNum = $('#phone');
    let email = $('#email');
    let gradYr = $('#gradYear');
    let degreeConc = $('#degreeConcentration');
    let jobT = $('#jobTitle');
    let emp = $('#employer');
    let pic = $('#photo');
    let jobDesc = $('#jobDescription');
    let fromMGA = $('#whatFromMGA');
    let bio = $('#biography');
    let agree = $('#agreement');

    let fName = ''
    let lName = ''
    let suffX = ''
    let numbers = ''
    let electronicM = ''
    let graduation = ''
    let degree = ''
    let title = ''
    let company = ''
    let pict = pic.files
    let jDesc = ''
    let mGA = ''
    let story = ''
    let acceptance = ''

    

    let allForm = $(":input");
    let delimitor = $("#agreement");
    let subB = $('#submit');

    function updateFirst() {
        fName = fname.val().trim();
        console.log(fName)
    }
    function updateLast() {
        lName = lname.val().trim();
    }
    function updateSUFF() {
        suffX = suff.val()
    }
    function updateNumbers() {
        numbers = phoneNum.val()
    }
    function updateEM() {
        electronicM = email.val()
    }
    function updateGrad() {
        graduation = gradYr.val()
    }
    function updateDeg() {
        degree = degreeConc.val()
    }
    function updateTitle() {
        title = jobT.val()
    }
    function updateComp() {
        company = emp.val()
    }
    function updatePIC(e) {
        pict = e.target.files[0].name
    }
    function updateJD() {
        jDesc = jobDesc.val()
    }
    function updateMGA() {
        mGa = fromMGA.val()
    }
    function updateStory() {
        story = bio.val()
    }
    function updateAcceptance() {
        if (agree.val() == 'on') {
            acceptance = "True"
        } else {
            acceptance = "False"
        }
        
    }

    function formCheck() {
        for (let i = 0; i < allForm.val.length; i++) {
            if (allForm.val() == "") {
                alert("Please check your form data");
                delimitor.prop('checked', false);
            } else {
                changer();
            };
        }
    };
    
    function changer() {
        if (delimitor.prop('checked') == true) {
            subB.prop('disabled', false);
            updateAcceptance(); 
        } else if (delimitor.prop('checked') == false) {
            subB.prop('disabled', true)
        }
    };

    function sendStuff(event) {
        console.log("validate")
        event.preventDefault();
        
        let collection = {
            firstName: fName,
            lastName: lName,
            suffix: suffX,
            numPhone: numbers,
            Email: electronicM,
            gradYear: graduation,
            degreeConcentration: degree,
            jobTitle: title,
            employer: company,
            photo: pict,
            jobDescription: jDesc,
            receivedFromMGA: mGA,
            biography: story,
            agreement: acceptance
        };
        console.log(collection)


    //     console.log(pict)
    //     console.table(collection)
         let collectSend = JSON.stringify(collection)

        $.ajax({
            url:'/email',
            type: "POST",
            data: collectSend,
            dataType: 'JSON'
        }).done(function (data) {
            console.log(data);
            alert("It's OK!");
        }).fail(function (data) {
            console.log(data);
            // console.log(collection)
        });
    }

    $('#firstName').on('keyup', updateFirst);
    $('#lastName').on('keyup', updateLast);
    $('#suffix').on('keyup', updateSUFF)
    $('#email').on('keyup', updateEM);
    $('#phone').on('keyup', updateNumbers);
    $('#gradYear').on('keyup', updateGrad);
    $('#degreeConcentration').on('keyup', updateDeg);
    $('#jobTitle').on('keyup', updateTitle);
    $('#photo').on('change', updatePIC)
    $('#employer').on('keyup', updateComp);
    $('#jobDescription').on('keyup', updateJD);
    $('#whatFromMGA').on('keyup', updateMGA);
    $('#biography').on('keyup', updateStory);
    $('#agreement').on('click', formCheck);
    $('#submit').on('click', sendStuff);

});
