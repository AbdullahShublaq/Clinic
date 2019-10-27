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
                        <li class="breadcrumb-item active">Update</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Update</strong> Appointments</h2>
                        </div>

                        @if (null !== session('update_appointment_status'))
                            @if (session('update_appointment_status'))
                                <div class="alert alert-success">
                                    <strong>{{session('patient_id')}}</strong> Updated Successfully .
                                </div>
                            @else
                                <div class="alert alert-success">
                                    <strong>{{session('patient_id')}}</strong> Updated Failed .
                                </div>
                            @endif
                        @endif

                        <div class="body">
                            <form action="{{url('appointment/update/'. $appointment->id)}}" method="POST">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <input type="hidden" name="_method" value="PUT">

                                <div class="body">
                                    <div class="row clearfix">

                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Time Information</h2>
                                        </div>

                                        <br>
                                        <div class="col-sm-12">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="zmdi zmdi-calendar"></i>
                                                </span>
                                                <input type="text" name="visit_date" class="form-control"
                                                       placeholder="ex: 2000-01-25 12:00:00"
                                                       value="{{ old('visit_date', $appointment->visit_date) }}">
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
                                                       value="{{ old('visit_time', $appointment->visit_time) }}">
                                            </div>
                                            <span style="color: red;">{{ $errors->first('visit_time') }}</span>
                                        </div>

                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Status Information</h2>
                                        </div>
                                        <select class="form-control show-tick" name="status">
                                            <option value="-1" selected disabled>- Select Status -</option>
                                            <option value="0"
                                                    @if($appointment->invoice)
                                                    selected
                                                    @endif
                                            >Not Done
                                            </option>
                                            <option value="1"
                                                    @if($appointment->invoice)
                                                    selected
                                                    @endif
                                            >Done
                                            </option>
                                        </select>
                                        <span style="color: red;">{{ $errors->first('status') }}</span>

                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Invoice Information</h2>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                            <textarea rows="10" class="form-control no-resize"
                                                      placeholder="Please type what you want..."
                                                      name="invoice">{{ $appointment->invoice }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-md-12">
                                        <div class="body">
                                            <button type="submit" class="btn btn-primary btn-round">
                                                Update
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
            </div>
        </div>
    </section>
@stop