@extends('template.layout')

@section('page_content')
    <section class="content contact">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Appointments
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('home') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Appointments</a></li>
                        <li class="breadcrumb-item active">All</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-lg-5 col-md-5 col-6">
                                    <form action="">
                                        <div class="input-group search" style="margin-bottom: 0px">
                                            <input type="text" class="form-control" placeholder="Search..."
                                                   name="search_appointment" value="{{ $search }}">
                                            <button class="input-group-addon" type="submit">
                                                <i class="zmdi zmdi-search"></i>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div class="col-lg-6 col-md-5 col-3 text-right">
                                    <ul class="nav nav-tabs padding-0" style="display: inline-block">
                                        <li class="nav-item">
                                            <a class="nav-link active"
                                               style="color:white; background-color:#01d8da">
                                                <i class="zmdi zmdi-trending-up float-left"></i>
                                                <span>&ensp;Patients Number</span>
                                                <strong class="number count-to m-b-0"
                                                        style="color:white;"
                                                        data-from="0" data-to="{{$count}}"
                                                        data-speed="1500"
                                                        data-fresh-interval="1000">
                                                </strong>
                                            </a>
                                        </li>
                                    </ul>
                                    {{--01d8da--}}
                                    <ul class="nav nav-tabs padding-0" style="display: inline-block">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="{{url('patient/add')}}"
                                               style="color:white; background-color:#01d8da">
                                                <i class="zmdi zmdi-plus-circle"></i> Add Appointment
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div id="Status">

                            </div>
                            @if(null !== session('delete_appointment_status'))
                                @if(session('delete_appointment_status'))
                                    <div class="alert alert-success">
                                        <strong>{{session('appointment_name')}}</strong> Deleted Successfully .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        <strong>{{session('appointment_name')}}</strong> Deleted Failed!.
                                    </div>
                                @endif
                            @endif
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
                                                <th>Invoice</th>
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
                                                                 src="{{url('storage/patients_images/'.$patient->image)}}"
                                                                 @endif
                                                                 alt="">
                                                        </span>
                                                    </td>
                                                    <td>{{ $appointment->p_id }}</td>
                                                    <td>{{ $appointment->name }}</td>
                                                    <td>{{ $appointment->visit_date}}</td>
                                                    <td><a href="">Show</a></td>
                                                    {{--date("Y-m-d h:i:s")--}}

                                                    {{--if ($date1 > $date2)--}}
                                                    {{--echo "$date1 is latest than $date2";--}}
                                                    {{--else--}}
                                                    {{--echo "$date1 is older than $date2";--}}

                                                    <td class="text-center">
                                                        <i style="color: #00C853;"
                                                           class="zmdi zmdi-check-circle"></i>
                                                        {{--<i style="color: red;"--}}
                                                           {{--class="zmdi zmdi-close-circle"></i>--}}
                                                        {{--<i style="color: #f0f000;"--}}
                                                           {{--class="zmdi zmdi-alert-circle"></i>--}}
                                                        {{--{{$appointment->status}}--}}
                                                    </td>
                                                    <td class="text-center">
                                                        <button id="remove_patient"
                                                                class="btn btn-icon btn-neutral btn-icon-mini show_appointment"
                                                                title="Show" value="{{$appointment->id}}">
                                                            <i class="zmdi zmdi-eye"></i>
                                                        </button>
                                                        <button class="btn btn-icon btn-neutral btn-icon-mini"
                                                                title="Edit">
                                                            <a href="{{url('patient/'.$appointment->id)}}">
                                                                <i class="zmdi zmdi-edit"></i>
                                                            </a>
                                                        </button>
                                                        <button id="remove_patient"
                                                                class="btn btn-icon btn-neutral btn-icon-mini remove_appointment"
                                                                title="Delete" value="{{$appointment->id}}">
                                                            <i class="zmdi zmdi-delete"></i>
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
                </div>
                {{ $appointments->links('pagination::bootstrap-4') }}
            </div>
        </div>
    </section>


    <script type="text/javascript">
        $(document).ready(function () {
            $(".remove_appointment").click(function () {
                var id = $(this).val();

                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this appointment!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function () {
                    $.ajax({
                        url: "{{ URL('appointment/delete') }}/" + id,
                        type: "POST",
                        data: {
                            "_token": "{{csrf_token()}}",
                            "_method": "DELETE",
                        },
                        success: function (response) {
                            if (response.status) {
                                swal({
                                    title: "Deleted",
                                    text: "<strong style=\"color: #8CD4F5\">(" + response.name + ")</strong> Deleted Successfully .",
                                    html: true,
                                    type: "success",
                                    showCancelButton: false,
                                    confirmButtonColor: "#8CD4F5",
                                    confirmButtonText: "OK",
                                    closeOnConfirm: false
                                }, function () {
                                    window.location.href = '{{url("appointment")}}';
                                });
                            } else {
                                swal({
                                    title: "Failed!",
                                    text: "<strong style=\"color: #8CD4F5\">(" + response.name + ")</strong> Deleted Failed! Try Again.",
                                    html: true,
                                    type: "error",
                                });
                            }
                        },
                        error: function (response) {
                            swal({
                                title: "Failed!",
                                text: "<strong style=\"color: #8CD4F5\">(" + response.name + ")</strong> Deleted Failed! Try Again.",
                                html: true,
                                type: "error",
                            });
                        }
                    });
                });
            });
        });
    </script>

@stop