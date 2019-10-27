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
                        <li class="breadcrumb-item active">Add</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Add</strong> Appointments</h2>
                        </div>

                        @if (null !== session('add_appointment_status'))
                            @if (session('add_appointment_status'))
                                <div class="alert alert-success">
                                    <strong>{{session('patient_id')}}</strong> Added Successfully .
                                </div>
                            @else
                                @if (session('found'))
                                    <div class="alert alert-success">
                                        <strong>{{session('patient_id')}}</strong> Added Failed .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        <strong>{{session('patient_id')}}</strong> Not Found!.
                                    </div>
                                @endif
                            @endif
                        @endif

                        <div class="body">
                            <form action="{{url('appointment/store')}}" method="POST">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input type="text" name="patient_id" class="form-control"
                                                   placeholder="Patient ID"
                                                   value="{{ old('patient_id', '') }}">
                                        </div>
                                        <span style="color: red;">{{ $errors->first('patient_id') }}</span>
                                    </div>
                                    <br>
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="zmdi zmdi-calendar"></i>
                                                </span>
                                            <input type="text" name="visit_date" class="form-control"
                                                   placeholder="ex: 2000-01-25"
                                                   value="{{ old('visit_date', '') }}">
                                        </div>
                                        <span style="color: red;">{{ $errors->first('visit_date') }}</span>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="zmdi zmdi-time"></i>
                                                </span>
                                            <input type="text" name="visit_time" class="form-control"
                                                   placeholder="ex: 12:00:00"
                                                   value="{{ old('visit_time', '') }}">
                                        </div>
                                        <span style="color: red;">{{ $errors->first('visit_time') }}</span>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-12">
                                        <div class="body">
                                            <button type="submit" class="btn btn-primary btn-round">
                                                Add
                                            </button>
                                            <button type="reset" class="btn btn-default btn-round btn-simple">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-8 col-xl-8">
                    {{--<div class="card">--}}
                    {{--<div class="body">--}}
                    {{--<button class="btn btn-primary btn-sm btn-round waves-effect" id="change-view-today">today--}}
                    {{--</button>--}}
                    {{--<button class="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-day">--}}
                    {{--Day--}}
                    {{--</button>--}}
                    {{--<button class="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-week">--}}
                    {{--Week--
                    {{--</button>--}}
                    {{--<button class="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-month">--}}
                    {{--Month--}}
                    {{--</button>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    <div class="card">
                        <div class="header">
                            <h2><strong> Week</strong> Appointments</h2>
                        </div>
                        <div class="body">
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>
                @foreach(\App\Http\Controllers\AppointmentController2::all_appointment() as $appo)
                    <input type="hidden" class="appointment-time" id="appointment-time" value="{{ $appo }}">
                @endforeach

            </div>
        </div>
    </section>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#calendar').fullCalendar('changeView', 'agendaWeek');

            // safari fix
            $('#content .main').fadeOut(0, function () {
                setTimeout(function () {
                    $('#content .main').css({'display': 'table'});
                }, 0);
            });
        });
    </script>
@stop


