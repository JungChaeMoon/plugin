
$(function(){
    $('#submit').click(function () {
        //var art = {'article' : $('#article').val()};
        //var new_art = JSON.stringify(art, ['article']);
        //new_art = new_art.serialize();
        var queryString = $('#textForm').serialize();
        $.ajax({
            url:'http://13.209.8.253/summary_ajax/',
            //data : new_art,
            data: queryString,
            dataType:'json',
            type:'POST',
            cache : false,
            processData: false,
            success: function (data) {
                var new_data = data['article'];
                alert(new_data);
                $('#result').html(new_data);
                $('#evaluate').load('evaluate.html');


                //$('#result').text(result['article']);
                }
                ,error:function(request,status,error){
                    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);}
            })
        });
            /*
            chrome.storage.sync.get(['total'],function(selectedText){
                var newTotal = "";
                var amount = $('#amount').val();
                if (amount){
                    newTotal += amount;
                }
                chrome.storage.sync.set({'total': newTotal}, function(){
                });
                $('#total').text(newTotal);
                $('#amount').val('');
            });
        });
        })
    });
    */
});
