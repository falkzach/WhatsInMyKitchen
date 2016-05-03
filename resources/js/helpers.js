/**
 * Created by carlos on 3/05/16.
 */
function printHtmlById(elementId, content)
{
    $('#'+elementId).html(content);
    $('#'+elementId).val(content);
}

function showonlyone(chosenBox)
{
    var newboxes = document.getElementsByTagName("div");
    for(var x=0; x<newboxes.length; x++) {
        name = newboxes[x].getAttribute("class");
        if (name == 'newboxes') {
            if (newboxes[x].id == chosenBox) {
                newboxes[x].style.display = 'block';}
            else {
                newboxes[x].style.display = 'none';}
        }
    }
}

function clearChildren(elementId)
{
    //console.log("Clearing: " + elementId);
    element = document.getElementById(elementId);
    for (var i = 0; i < element.childNodes.length; i++) {
        var e = element.childNodes[i];
        if (e.tagName) switch (e.tagName.toLowerCase()) {
            case 'input':
                switch (e.type) {
                    case "radio":
                    case "checkbox": e.checked = false; break;
                    case "button": e.value = ''; break;
                    case "submit": e.value = ''; break;
                    case "image": break;
                    default: e.value = ''; break;
                }
                break;
            case 'select': e.selectedIndex = 0; break;
            case 'textarea': e.innerHTML = ''; break;
            default: clearChildren(e);
        }
    }
}

function clearInput(elementId)
{
    element = document.getElementById(elementId);
    element.value = "";
}