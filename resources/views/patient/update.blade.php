@extends('template.layout')

@section('page_content')

    <section class="content">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Update Patient
                        <small class="text-muted">Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="zmdi zmdi-home"></i> Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                        <li class="breadcrumb-item active">Update Patient</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Patient</strong> Update
                                <small>This Form Allow You To Update Patient...</small>
                            </h2>
                        </div>

                        @if (null !== session('update_patient_status'))
                            @if (session('update_patient_status'))
                                <div class="alert alert-success">
                                    <strong>{{session('patient_name')}}</strong> Updated Successfully .
                                </div>
                            @else
                                <div class="alert alert-danger">
                                    <strong>{{session('patient_name')}}</strong> Updated Failed!.
                                </div>
                            @endif
                        @endif

                        <div class="body">
                            <form action="{{url('patient/update/'.$patient->id)}}" method="POST"
                                  enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <input type="hidden" name="_method" value="PUT">

                                <div class="body">
                                    <div class="row clearfix">

                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Main Information</h2>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <input type="text" name="patient_name" class="form-control"
                                                       placeholder="Patient Name"
                                                       value="{{ old('patient_name', $patient->name) }}">
                                            </div>
                                            <span style="color: red;">{{ $errors->first('patient_name') }}</span>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="zmdi zmdi-calendar"></i>
                                                </span>
                                                <input type="text" name="patient_dob" class="form-control"
                                                       placeholder="Date Of Birth ex: 2000-01-25"
                                                       value="{{ old('patient_dob', $patient->dob) }}">
                                            </div>
                                            <span style="color: red;">{{ $errors->first('patient_dob') }}</span>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <input type="text" name="patient_phone_no" class="form-control"
                                                       placeholder="Phone No."
                                                       value="{{ old('patient_phone_no', $patient->phone_no) }}">
                                            </div>
                                            <span style="color: red;">{{ $errors->first('patient_phone_no') }}</span>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="form-group last">
                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                            <div class="fileinput-new thumbnail"
                                                 style="width: 200px; height: 150px;">
                                                <img @if(is_null($patient->image))
                                                     src="{{url('storage/patients_images/default-avatar.png')}}"
                                                     @else
                                                     src="{{url('storage/patients_images/'.$patient->image)}}"
                                                     @endif
                                                     alt=""/>
                                            </div>
                                            <div class="fileinput-preview fileinput-exists thumbnail"
                                                 style="max-width: 200px; max-height: 150px;">
                                            </div>
                                            <div>
                                                <span class="btn btn-dark btn-file">
                                                    <span class="fileinput-new"> Select Patient Photo </span>
                                                    <span class="fileinput-exists"> Change </span>
                                                    <input type="file" name="patient_image"
                                                           value="{{ old('patient_image', '') }}">
                                                </span>
                                                <a href="" class="btn btn-danger fileinput-exists"
                                                   data-dismiss="fileinput">
                                                    Remove </a>
                                            </div>
                                            <span style="color: red;">{{ $errors->first('patient_image') }}</span>
                                        </div>
                                    </div>

                                    <hr>

                                    <div class="header col-lg-12 col-md-12 col-sm-12">
                                        <h2>Health File</h2>
                                    </div>

                                    <div class="custom-file">
                                        <input type="file" name="patient_file" class="custom-file-input" id="customFile"
                                               value="{{old('patient_file', '')}}">
                                        <label class="custom-file-label" for="customFile">{{$patient->file}}</label>
                                    </div>
                                    <span style="color: red;">{{ $errors->first('patient_file') }}</span>

                                </div>

                                <hr>

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