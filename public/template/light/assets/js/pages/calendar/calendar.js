var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
var events = [];
$('.appointment-time').each(function (i, obj) {
    // console.log(obj.value);
    var startstr = (obj.value.indexOf("name\":\""));
    var endstr = (obj.value.indexOf("\",\""));
    var title = (obj.value.substring(startstr + 7, endstr));

    var startstr2 = (obj.value.indexOf("\",\""));
    var endstr2 = (obj.value.indexOf("}"));
    var start = (obj.value.substring(startstr2 + 16, endstr2 - 1));

    var date1 = new Date(start);
    var end = moment(date1).add(30, 'm').toDate();
    var end2 = end.getFullYear() + "-"
        + ("0" + (end.getMonth() + 1)).slice(-2) + "-"
        + ("0" + end.getDate()).slice(-2) + "T"
        + (end.getHours() < 10 ? '0' : '') + end.getHours() + ":"
        + (end.getMinutes() < 10 ? '0' : '') + end.getMinutes() + ":"
        + (end.getSeconds() < 10 ? '0' : '') + end.getSeconds();

    // console.log(start);
    // // console.log(end);
    // console.log(end2);

    events.push(
        {
            title: title,
            start: start,
            end: end2,
            className: 'b-l b-2x b-primary'
        }
    );

    // console.log(events);
});

// {
//     title: 'Abdullah Shublaq',
//     start: '2018-01-12 12:00:00',
//     end: '2018-01-12 01:30:00',
//     className: 'b-l b-2x b-primary'
// }


// events = [
//     {
//         title:   'All Day Event',
//         start: '2018-11-01',
//         className: 'b-l b-2x b-greensea'
//     },
//     {
//         title: 'Long Event',
//         start: '2018-01-07',
//         end: '2018-01-10',
//         className: 'bg-cyan'
//     },
//     {
//         id: 999,
//         title: 'Repeating Event',
//         start: '2018-01-09T16:00:00',
//         className: 'b-l b-2x b-lightred'
//     },
//     {
//         id: 999,
//         title: 'Repeating Event',
//         start: '2018-12-16T16:00:00',
//         className: 'b-l b-2x b-success'
//     },
//     {
//         title: 'Conference',
//         start: '2018-01-11',
//         end: '2018-01-13',
//         className: 'b-l b-2x b-primary'
//     },
//     {
//         title: 'Meeting',
//         start: '2018-01-12T10:30:00',
//         end: '2018-01-12 T12:30:00',
//         className: 'b-l b-2x b-amethyst'
//     },
//     {
//         title: 'Abdullah Shublaq',
//         start: '2018-01-12 12:00:00',
//         end: '2018-01-12 01:30:00',
//         className: 'b-l b-2x b-primary'
//     },
//     {
//         title: 'Lunch',
//         start: '2018-01-12T12:00:00',
//         className: 'b-l b-2x b-primary'
//     },
//     {
//         title: 'Meeting',
//         start: '2018-01-12T14:30:00',
//         className: 'b-l b-2x b-drank'
//     },
//     {
//         title: 'Happy Hour',
//         start: '2018-01-12T17:30:00',
//         className: 'b-l b-2x b-lightred'
//     },
//     {
//         title: 'Dinner',
//         start: '2018-12-12T20:00:00',
//         className: 'b-l b-2x b-amethyst'
//     },
//     {
//         title: 'Birthday Party',
//         start: '2018-01-13T07:00:00',
//         className: 'b-l b-2x b-primary'
//     },
//     {
//         title: 'Click for Google',
//         url: 'http://google.com/',
//         start: '2018-01-28',
//         className: 'b-l b-2x b-greensea'
//     }
// ];

console.log(events);

"use strict";
$('#calendar').fullCalendar({
    header: {
        left: 'prev',
        center: 'title',
        right: 'next'
    },
    defaultDate: today,
    editable: false,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function () {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
        }
    },
    eventLimit: true, // allow "more" link when too many events
    events: events
});

// Hide default header
//$('.fc-header').hide();


// Previous month action
$('#cal-prev').on('click', function () {
    $('#calendar').fullCalendar('prev');
});

// Next month action
$('#cal-next').on('click', function () {
    $('#calendar').fullCalendar('next');
});

// Change to month view
$('#change-view-month').on('click', function () {
    $('#calendar').fullCalendar('changeView', 'month');

    // safari fix
    $('#content .main').fadeOut(0, function () {
        setTimeout(function () {
            $('#content .main').css({'display': 'table'});
        }, 0);
    });

});

// Change to week view
$('#change-view-week').on('click', function () {
    $('#calendar').fullCalendar('changeView', 'agendaWeek');

    // safari fix
    $('#content .main').fadeOut(0, function () {
        setTimeout(function () {
            $('#content .main').css({'display': 'table'});
        }, 0);
    });

});

// Change to day view
$('#change-view-day').on('click', function () {
    $('#calendar').fullCalendar('changeView', 'agendaDay');

    // safari fix
    $('#content .main').fadeOut(0, function () {
        setTimeout(function () {
            $('#content .main').css({'display': 'table'});
        }, 0);
    });

});

// Change to today view
$('#change-view-today').on('click', function () {
    $('#calendar').fullCalendar('today');
});

/* initialize the external events
 -----------------------------------------------------------------*/
$('#external-events .event-control').each(function () {

    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
    });

});

$('#external-events .event-control .event-remove').on('click', function () {
    $(this).parent().remove();
});

// Submitting new event form
$('#add-event').submit(function (e) {
    e.preventDefault();
    var form = $(this);

    var newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');

    $('#external-events .event-control:last').after(newEvent);

    $('#external-events .event-control').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });

    $('#external-events .event-control .event-remove').on('click', function () {
        $(this).parent().remove();
    });

    form[0].reset();

    $('#cal-new-event').modal('hide');

});