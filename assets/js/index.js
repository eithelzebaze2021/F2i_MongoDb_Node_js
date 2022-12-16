


$("#add_user").submit(function(event){
    alert("Enregistrement reussi cool F2i!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Modification reussi cool F2i!!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Voulez-vous vraiment supprimer ?")){
            $.ajax(request).done(function(response){
                alert("Suppréssion reussi cool F2i!!");
                location.reload();
            })
        }

    })
}


if(window.location.pathname == "/song"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/songs/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Voulez-vous vraiment supprimer ?")){
            $.ajax(request).done(function(response){
                alert("Suppréssion reussi cool F2i!!");
                location.reload();
            })
        }

    })
}

if(window.location.pathname == "/playlist"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/playlists/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Voulez-vous vraiment supprimer ?")){
            $.ajax(request).done(function(response){
                alert("Suppréssion reussi cool F2i!!");
                location.reload();
            })
        }

    })
}