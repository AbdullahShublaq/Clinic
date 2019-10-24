@extends('template.layout')

@section('page_content')
    <section class="content contact">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Patients
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('home') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
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
                                                   name="search_patient" value="{{ $search }}">
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
                                                <i class="zmdi zmdi-plus-circle"></i> Add Patient
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
                            @if(null !== session('delete_patient_status'))
                                @if(session('delete_patient_status'))
                                    <div class="alert alert-success">
                                        <strong>{{session('patient_name')}}</strong> Deleted Successfully .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        <strong>{{session('patient_name')}}</strong> Deleted Failed!.
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
                                                <th>Age</th>
                                                <th>Phone Number</th>
                                                <th>Last Visit</th>
                                                <th>Health File</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($patients as $patient)
                                                <tr>
                                                    <td> {{ $patient->counter }} </td>
                                                    <td>
                                                        <span class="list-icon">
                                                            <img class="patients-img"
                                                                 style="max-width: 40px; max-height: 40px;"
                                                                 @if(is_null($patient->image))
                                                                 src="{{url('storage/patients_images/default-avatar.png')}}"
                                                                 @else
                                                                 src="{{url('storage/patients_images/'.$patient->image)}}"
                                                                 @endif
                                                                 alt="">
                                                        </span>
                                                    </td>
                                                    <td><span class="list-name">{{ $patient->p_id }}</span></td>
                                                    <td>{{ $patient->name }}</td>
                                                    <td>{{ $patient->age }}</td>
                                                    @if(is_null($patient->phone_no))
                                                        <td>-</td>
                                                    @else
                                                        <td>{{ $patient->phone_no }}</td>
                                                    @endif

                                                    @if(is_null($patient->last_visit))
                                                        <td>-</td>
                                                    @else
                                                        <td>{{ $patient->last_visit }}</td>
                                                    @endif

                                                    @if(! is_null($patient->file))
                                                        <td><a href="{{url('storage/patients_files/'.$patient->file)}}"
                                                               download style="text-decoration: underline"><i class="zmdi zmdi-download">&ensp;Download</i></a></td>
                                                    @else
                                                        <td><a href=""></a>-</td>
                                                    @endif
                                                    <td class="text-center">
                                                        <button class="btn btn-icon btn-neutral btn-icon-mini"
                                                                title="Edit">
                                                            <a href="{{url('patient/'.$patient->id)}}">
                                                                <i class="zmdi zmdi-edit"></i>
                                                            </a>
                                                        </button>
                                                        <button id="remove_patient"
                                                                class="btn btn-icon btn-neutral btn-icon-mini remove_patient"
                                                                title="Delete" value="{{$patient->id}}">
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
                {{ $patients->links('pagination::bootstrap-4') }}
            </div>
        </div>
    </section>


    <script type="text/javascript">
        $(document).ready(function () {
            $(".remove_patient").click(function () {
                var id = $(this).val();

                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this patient!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function () {
                    $.ajax({
                        url: "{{ URL('patient/delete') }}/" + id,
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
                                    window.location.href = '{{url("patient")}}';
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