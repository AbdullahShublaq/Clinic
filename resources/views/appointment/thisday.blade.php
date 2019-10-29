@extends('template.layout')

@section('page_content')
    <section class="content page-calendar">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Appointments
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Appointment</a></li>
                        <li class="breadcrumb-item active">This Day</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Show</strong> Appointments</h2>
                        </div>

                        <div class="row clearfix">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="body">
                                        <div id="Status">

                                            <div class="header">
                                                <h2><strong>Table</strong> View</h2>
                                            </div>

                                            <div class="tab-content">
                                                <div class="tab-pane active" id="Doctors">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover m-b-0 c_list">
                                                            <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Image</th>
                                                                <th>Patient ID</th>
                                                                <th>Name</th>
                                                                <th>Visit Date</th>
                                                                <th class="text-center">Invoice</th>
                                                                <th class="text-center">Status</th>
                                                                <th class="text-center">Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            @foreach($appointments as $appointment)
                                                                <tr>
                                                                    <td> {{ $appointment->counter }} </td>
                                                                    <td>
                                                        <span class="list-icon">
                                                            <img class="patients-img"
                                                                 style="max-width: 40px; max-height: 40px;"
                                                                 @if(is_null($appointment->image))
                                                                 src="{{url('storage/patients_images/default-avatar.png')}}"
                                                                 @else
                                                                 src="{{url('storage/patients_images/'.$appointment->image)}}"
                                                                 @endif
                                                                 alt="">
                                                        </span>
                                                                    </td>
                                                                    <td>{{ $appointment->p_id }}</td>
                                                                    <td>{{ $appointment->name }}</td>
                                                                    <td>{{ $appointment->visit_date }}</td>


                                                                    <td class="text-center">
                                                                        <button title="write invoice"
                                                                                value="{{ $appointment->invoice }}"
                                                                                class="btn btn-icon btn-neutral btn-icon-mini write_invoice">
                                                                            <i class="zmdi zmdi-reader"></i>
                                                                        </button>
                                                                        <input type="hidden" id="hidden_invoice"
                                                                               value="{{$appointment->invoice}}">
                                                                    </td>


                                                                    {{--if ($date1 > $date2)--}}
                                                                    {{--echo "$date1 is latest than $date2";--}}
                                                                    {{--else--}}
                                                                    {{--echo "$date1 is older than $date2";--}}
                                                                    @php
                                                                        $current_date = date("Y-m-d H:i:s", strtotime('+2 hours'));
                                                                    @endphp
                                                                    <td class="text-center">
                                                                        @if($appointment->status == 1)
                                                                            {{--<i style="color: #00C853;"--}}
                                                                            {{--class="zmdi zmdi-check-circle"></i>--}}
                                                                            <span class="badge badge-success">Done</span>
                                                                        @else
                                                                            @if($current_date > $appointment->visit_date)
                                                                                {{--<i style="color: red;"--}}
                                                                                {{--class="zmdi zmdi-close-circle"></i>--}}
                                                                                <span class="badge badge-danger">Not Come</span>
                                                                            @else
                                                                                {{--<i style="color: #f0f000;"--}}
                                                                                {{--class="zmdi zmdi-alert-circle"></i>--}}
                                                                                <span class="badge badge-warning">Come Later</span>
                                                                            @endif
                                                                        @endif
                                                                    </td>
                                                                    <td class="text-center">
                                                                        {{--<button id="remove_patient"--}}
                                                                        {{--class="btn btn-icon btn-neutral btn-icon-mini show_appointment"--}}
                                                                        {{--title="Info" value="{{$appointment->patient_id}}">--}}
                                                                        {{--<i class="zmdi zmdi-eye"></i>--}}
                                                                        {{--</button>--}}
                                                                        {{--<button class="btn btn-icon btn-neutral btn-icon-mini"--}}
                                                                        {{--title="Edit">--}}
                                                                        {{--<a href="{{url('appointment/'.$appointment->id.'/edit')}}">--}}
                                                                        {{--<i class="zmdi zmdi-edit"></i>--}}
                                                                        {{--</a>--}}
                                                                        {{--</button>--}}
                                                                        <button id="done_appointment"
                                                                                {{--onclick="done()"--}}
                                                                                class="btn btn-icon btn-neutral btn-icon-mini done_appointment"
                                                                                title="Done"
                                                                                value="{{ $appointment->id }}">
                                                                            <i class="zmdi zmdi-check"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="ol-md-12 col-lg-12 col-xl-12">
                                        <div class="card">
                                            <div class="header">
                                                <h2><strong>Calendar</strong> View</h2>
                                            </div>
                                            <div class="body">
                                                <div id="calendar" style="max-width: none;!important;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    @foreach(\App\Http\Controllers\AppointmentController2::all_appointment() as $appo)
                                        <input type="hidden" class="appointment-time" id="appointment-time"
                                               value="{{ $appo }}">
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#calendar').fullCalendar('changeView', 'agendaDay');

            // safari fix
            $('#content .main').fadeOut(0, function () {
                setTimeout(function () {
                    $('#content .main').css({'display': 'table'});
                }, 0);
            });

            $(".write_invoice").click(function () {
                $(this).val($('#hidden_invoice').val());
                var invoice = $(this).val();
                swal({
                    title: "<spna style='color: #8CD4F5'>Invoice Description...</span>",
                    text: "<textarea id='text' rows='15' class='form-control no-resize'>" + invoice + "</textarea>",
                    html: true,
                    showCancelButton: true,
                    closeOnConfirm: false,
                    animation: "slide-from-top",
                    inputPlaceholder: "Write something"
                }, function (inputValue) {
                    if (document.getElementById('text').value === false) return false;
                    if (document.getElementById('text').value === "") {
                        swal.showInputError("You need to write something!");
                        return false
                    }
                    var val = document.getElementById('text').value;
                    $("#hidden_invoice").val(val);
                    swal("Done!", "Invoice Written!", "success");

                });
            });

            $('#calendar').fullCalendar('changeView', 'agendaDay');

            {{--function done() {--}}
            {{--var invoice_done = $('#hidden_invoice').val();--}}
            {{--var id = $('#done_appointment').val();--}}
            {{--// alert(invoice_done + ' - ' + id);--}}
            {{--// alert(invoice_done);--}}
            {{--$.ajax({--}}
            {{--url: "{{ URL('appointment) }}/" + id + "/done",--}}
            {{--type: "GET",--}}
            {{--data: {--}}
            {{--"id": id,--}}
            {{--"invoice": invoice_done--}}
            {{--},--}}
            {{--success: function () {--}}

            {{--},--}}
            {{--error: function () {--}}

            {{--}--}}
            {{--});--}}
            {{--}--}}
            $(".done_appointment").click(function () {
                var invoice_done = $('#hidden_invoice').val();
                var id = $('#done_appointment').val();
                // alert(invoice_done + ' - ' + id);
                $.ajax({
                    url: "{{ URL('appointment') }}/" + id + "/done",
                    type: "POST",
                    data: {
                        "_token": "{{csrf_token()}}",
                        "invoice": invoice_done,
                    },
                    success: function (response) {
                        if (response) {
                            swal({
                                title: "Success!",
                                text: "<strong style=\"color: #8CD4F5\">Done.</strong>",
                                html: true,
                                type: "success",
                            }, function () {
                                window.location.href = '{{url("appointment/thisday")}}';
                            });
                        } else {
                            swal({
                                title: "Failed!",
                                text: "<strong style=\"color: #8CD4F5\">Not Found! Try Again.</strong> ",
                                html: true,
                                type: "error",
                            });
                        }
                    },
                    error: function (response) {
                        alert(response.responseText)
                        swal({
                            title: "Failed!",
                            text: "<strong style=\"color: #8CD4F5\">Failed! Try Again.</strong>",
                            html: true,
                            type: "error",
                        });
                    }
                });
            });

        });
    </script>
@stop


