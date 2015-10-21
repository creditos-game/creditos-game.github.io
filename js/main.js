var appTabs = ( function( window, undefined ) {
    function initTabs(){
        callAjax();
    }

    function drawTabs( data ) {
        var listMember = "";
        var teamDetails = $( '#team' );
        console.log( data );
        //for( var i = 0; i < data.length; i++ ) {
            listMember += '<div class="team-details">' +
                                        '<h2>' + data[0].team + '</h2>' +
                                        '<p>' + data[0].explication + '</p>' +
                                    '</div>' + 
                                    '<div class="member">' + 
                                        '<img href:' + data[0].img[1] + '/>' +
                                        '<h3>' + data[0].name[1] +
                                        '<p>' + data[0].input[1] + '</p>' +
                                        '<h4> Portfolio : </h4>' +
                                        '<a href="' + data[0].portfolio[1] + '" ' +
                                    '<div>';
       // }
        console.log( listMember );

        teamDetails.append( listMember );
            
    }

    function callAjax() {
        $.ajax({
            type: "GET",
            url: 'js/tabs.json',
            dataType: "json",
            success:function( data ) {
  
               jsondata = data.tabs;
               drawTabs( jsondata );
               console.log( jsondata );
               
            },
            error:function(jqXHR, textStatus, errorThrown) {
                console.log( "Text Status:" + textStatus + "\nError:" + errorThrown );
            }
           
         });
    }
    return {
        init : initTabs,
        ajax : callAjax,
        tabs : drawTabs
    }
})( window, undefined );



$( '#team1' ).on( 'click', function() {
    appTabs.init();
});

