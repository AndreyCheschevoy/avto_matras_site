$(document).ready(function(){
    
    $('.single-item').slick({
        infinite      : true,
        slidesToShow  : 3,
        slidesToScroll: 1,
        responsive    : [{
    
        breakpoint: 1024,
        settings  : {
            slidesToShow  : 2,
            slidesToScroll: 1
        }
    
      }, {
    
        breakpoint: 600,
        settings  : {
            slidesToShow  : 1,
            slidesToScroll: 1
        }
    
      }, {
    
        breakpoint: 300,
        settings  : "unslick"  // destroys slick
    
      }]
	});
	
	$('.news').slick({
        infinite      : true,
        slidesToShow  : 3,
        slidesToScroll: 1,
        dots          : true,
        responsive    : [{
    
        breakpoint: 1024,
        settings  : {
            slidesToShow  : 2,
            slidesToScroll: 1
        }
    
      }, {
    
        breakpoint: 600,
        settings  : {
			slidesToShow  : 1,
			arrows        : false,
			slidesToScroll: 1
        }
    
      }, {
    
        breakpoint: 300,
        settings  : "unslick"  // destroys slick
    
      }]
    }); 
    
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button    = $(event.relatedTarget)   // Button that triggered the modal
        var recipient = button.data('whatever')  // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-body .buy-product').val(recipient)
      })
});
