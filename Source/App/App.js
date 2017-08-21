$(
    function() {
        $('#button').click(
            function() {
                var a = parseInt($('#a').val());
                var b = parseInt($('#b').val());
                var c = a * b;
                $('#result').replaceWith('<p id = \'result\'>Result = ' + c + '</p>');
            }
        );
    }
);