// Google map popover
$('[data-toggle=popover]').each(function(i, obj) {
  $(this).popover({
    html: true,
    content: function content() {
      var id = $(this).attr('id');
      return $('#popover-content-' + id).html();
    }
  });
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});

// Easy pie chart
$(function() {
  $('.chart').easyPieChart({
    easing: 'easeOutBounce',
    barColor: '#2ECC71',
    scaleColor: !1,
    size: 60,
    lineWidth: 7,
    lineCap: 'butt',
    onStep: function(t, e, n) {
      $(this.el)
        .find('.percent')
        .text(Math.round(n));
    }
  });
});

// Data table Initialization
$(document).ready(function() {
  $('.data-table').DataTable();
});

// input masking
$(document).ready(function() {
  $('.date').mask('00/00/0000', { placeholder: '__/__/____' });
  $('.time').mask('00:00:00', { placeholder: '__:__:__' });
  $('.date_time').mask('00/00/0000 00:00:00', {
    placeholder: '__/__/____ __:__:__'
  });
  $('.phone').mask('000-000-0000', { placeholder: '(___) ___ ____' });
});

// Sweet alert on invitee add
$('.submit-btn').on('click', function() {
  swal({
    title: 'Good job',
    text: 'You added the invitee to the list successfully',
    type: 'success'
  }).then(function() {
    location.reload();
  });
});

// Sweet alert on Edit Profile
$('#editProfile').on('click', function() {
  swal({
    title: 'Profile Updated',
    text: 'You updated Profile Information successfully',
    type: 'success'
  }).then(function() {
    location.reload();
  });
});


// File uplaod dile name for custom file uplaod
$(document).on('change', '.custom-file-input', function() {
  let fileName = $(this)
    .val()
    .replace(/\\/g, '/')
    .replace(/.*\//, '');
  $(this)
    .parent('.custom-file')
    .find('.custom-file-label')
    .text(fileName);
});

// add VIP textboxes dynamically
$(document).ready(function() {
  var max_fields = 5; //maximum input boxes allowed
  var wrapper = $('#addPhone'); //phone wrapper
  var wrapperEmail = $('#addEmail'); // email wrapper
  var add_button = $('.add-field'); //Add button ID
  var phonePlaceholder = 'Phone Number';
  var emailPlaceholder = 'Email Address';

  var x = 1; //initlal text box count
  var y = 1; //initlal text box count

  $(add_button).click(function(e) {
    //on add input button click
    e.preventDefault();
    if ($(this).hasClass('phoneAdd')) {
      if (x < max_fields) {
        //max input box allowed
        x++; //text box increment
        $(wrapper).append(
          '<div class="form-group"><label for="phone">Phone Number ' +
            x +
            ' </label>' +
            '<input class="form-control phone" id="phone ' +
            x +
            '" type="text" placeholder=""/>' +
            '<a href="#" class="remove_field"><i class="icon icon-close"></a></div>'
        );
      }
    } else if ($(this).hasClass('emailAdd')) {
      if (y < max_fields) {
        //max input box allowed
        y++; //text box increment
        $(wrapperEmail).append(
          '<div class="form-group"><label for="email">Email Address ' +
            y +
            ' </label>' +
            '<input class="form-control" id="email ' +
            y +
            '" type="text" placeholder=""/>' +
            '<a href="#" class="remove_field"><i class="icon icon-close"></a></div>'
        );
      }
    }

    if (x == 5) {
      $('.add-field.phoneAdd').css('visibility', 'hidden');
      console.log('hit');
    } else if (y == 5) {
      $('.add-field.emailAdd').css('visibility', 'hidden');
      console.log('hit2');
    }
  });

  $(wrapper).on('click', '.remove_field', function(e) {
    //user click on remove field
    e.preventDefault();
    $(this)
      .parent('div')
      .remove();
    x--;
    if (x < 5) {
      $('.add-field.phoneAdd').css('visibility', 'visible');
      console.log('hit3');
    }
  });

  $(wrapperEmail).on('click', '.remove_field', function(e) {
    //user click on remove field
    e.preventDefault();
    $(this)
      .parent('div')
      .remove();
    y--;

    if (y < 5) {
      $('.add-field.emailAdd').css('visibility', 'visible');
      console.log('hit4');
    }
  });
});


// Price Table inactive button

$(document).ready(function () {
  if ($('.item').hasClass('inactive')) {
    $('.item.inactive button').attr('disabled', 'disabled');
  }
});


// sweet alert on delete team member
$('.btn.delete').on('click', () => {
  swal({
    title: 'Are you sure?',
    text: "This record will be deleted permanently",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
});

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//# sourceMappingURL=main.js.map
