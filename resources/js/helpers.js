/**
 * Created by carlos on 3/05/16.
 */
function printHtmlById(elementId, content)
{
    var element = $('#'+elementId);
    element.html(content);
    element.val(content);
}

function printHtmlByClass(elementId, content)
{
    var element = $('.'+elementId);
    element.html(content);
    element.val(content);
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
    if(element == null) return;
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
    element.innerHTML = '';
}

function getSize(obj)
{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

jQuery(function($) {

    var panelList = $('.draggablePanelList');

    panelList.sortable({
        // Only make the .panel-heading child elements support dragging.
        // Omit this to make then entire <li>...</li> draggable.
        handle: '.panel-heading',
        update: function() {
            $('.panel', panelList).each(function(index, elem) {
                var $listItem = $(elem),
                    newIndex = $listItem.index();
                // Persist the new indices.
            });
        }
    });

    var cart = $('#cart_image');

    var shopping_item = $('.shopping_item');

    shopping_item.draggable();
    cart.droppable({
        drop: handleDropEvent
    });
    
});

function handleDropEvent( event, ui ) {
    var draggable = ui.draggable;
    var identificator = draggable.attr('id');
    shopping.from_list_to_cart(identificator);
}



