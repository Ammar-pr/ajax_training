

function  createRequest() {

    try {
        request = new XMLHttpRequest();
    } catch (tryMS) {

        try {
            request = new ActiveXObject("Msxm12.XMLHTTP")
        } catch (otherMS) {
            try {

            } catch (failed) {
                request = null;
            }
        }
    }
    return request;

}
    function getDetails() {

        request =createRequest();

        if(request==null){
        alert('Unable to create request ');
        return ;
    }

    var url="getDetails.php?ImageID="+escape(itemName);
    request.open("GET",url,true);
    request.onreadystatechange=displayDeails;
    request.send(null);
}