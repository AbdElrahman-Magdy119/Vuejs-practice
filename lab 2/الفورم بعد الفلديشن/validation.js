
function checkRequired() {
    if ($('.che:checked').length > 0) {  // the "> 0" part is unnecessary, actually
        $('.che').prop('required', false);
    } else {
        $('.che').prop('required', true);
    }

}

