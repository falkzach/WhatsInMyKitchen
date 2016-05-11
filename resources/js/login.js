//Written by Ayechan


var users = ["user"];
var passes = ["pass"];

function checkAuth()
{
    var userElm = (document.getElementById("username")).value;
    var pwsElm = (document.getElementById("password")).value;
    var checkExit = users.indexOf(userElm);
    if (checkExit == -1)
    {
        document.getElementById("warningMSG").innerHTML = "No user found";
    }
    else
    {
        var checkPSW = passes[checkExit];
        var passComparison = pwsElm.localeCompare(checkPSW);
        if (passComparison == -1)
        {
            document.getElementById("warningMSG").innerHTML = "Wrong password";
        }
        else {
            $('#login').modal('hide');

        }

    }
}

function addNewUser()
{
    var userElm = (document.getElementById("NewUsername")).value;
    var pwsElm = (document.getElementById("NewPassword")).value;
    var checkExit = users.indexOf(userElm);
    if (checkExit == 0)
    {
        document.getElementById("signupWarning").innerHTML = "Username already exists";
    }
    else if (pwsElm === "")
    {
        document.getElementById("signupWarning").innerHTML = "Empty fields!";

    }
    else
    {
        $('#signup').modal('hide');
        users.push(userElm);
        passes.push(pwsElm);
    }
}