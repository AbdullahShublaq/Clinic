@extends('template.layout')

@section('page_content')
    <section class="content">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Add Admins
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Admins</a></li>
                        <li class="breadcrumb-item active">Add</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Add</strong> Admins {{session("request['admin_name']")}}
                                <small>This Form Allow You To Add Admin...</small>
                            </h2>
                        </div>
                        @if (null !== session('add_admin_status'))
                            @if (session('add_admin_status'))
                                <div class="alert alert-success">
                                    <strong>{{session('admin_name')}}</strong> Added Successfully .
                                </div>
                            @else
                                <div class="alert alert-danger">
                                    <strong>{{session('admin_name')}}</strong> Added Failed!.
                                </div>
                            @endif
                        @endif

                        <div class="body">
                            <form action="{{url('admin/store')}}" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                <div class="header col-lg-12 col-md-12 col-sm-12">
                                    <h2>Main Information</h2>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" name="admin_name" class="form-control"
                                                   placeholder="Admin Name" value="{{ old('admin_name', '') }}">
                                            <span style="color: red;">{{ $errors->first('admin_name') }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="email" name="admin_email" class="form-control"
                                                   placeholder="Email" value="{{ old('admin_email', '') }}">
                                            <span style="color: red;">{{ $errors->first('admin_email') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group last">
                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                        <div class="fileinput-new thumbnail"
                                             style="width: 200px; height: 150px;">
                                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                                 alt=""/>
                                        </div>
                                        <div class="fileinput-preview fileinput-exists thumbnail"
                                             style="max-width: 200px; max-height: 150px;">
                                        </div>
                                        <div>
                                                <span class="btn btn-dark btn-file">
                                                    <span class="fileinput-new"> Select Admin Photo </span>
                                                    <span class="fileinput-exists"> Change </span>
                                                    <input type="file" name="admin_image"
                                                           value="{{ old('admin_image', '') }}">
                                                </span>
                                            <a href="" class="btn btn-danger fileinput-exists"
                                               data-dismiss="fileinput">
                                                Remove </a>
                                        </div>
                                        <span style="color: red;">{{ $errors->first('admin_image') }}</span>
                                    </div>
                                </div>

                                <hr>
                                <div class="header col-lg-12 col-md-12 col-sm-12">
                                    <h2>Login Information</h2>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" name="admin_username" class="form-control"
                                                   placeholder="UserName" value="{{ old('admin_username', '') }}">
                                            <span style="color: red;">{{ $errors->first('admin_username') }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="password" name="admin_password" class="form-control"
                                                   placeholder="Password" value="{{ old('admin_password', '') }}">
                                            <span style="color: red;">{{ $errors->first('admin_password') }}</span>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                                <div class="header col-lg-12 col-md-12 col-sm-12">
                                    <h2>Permission Information</h2>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <select class="form-control show-tick" name="user_group_id">
                                            <option value="0">- User Group -</option>
                                            @foreach ($user_groups as $user_group)
                                                @if (Illuminate\Support\Facades\Input::old('user_group_id') == $user_group->id)
                                                    <option value="{{ $user_group->id }}"
                                                            selected>{{ $user_group->name }}</option>
                                                @else
                                                    <option value="{{ $user_group->id }}">{{ $user_group->name }}</option>
                                                @endif
                                            @endforeach
                                        </select>
                                        <span style="color: red;">{{ $errors->first('user_group_id') }}</span>
                                    </div>
                                </div>

                                <br>
                                <hr>

                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary btn-round">Add</button>
                                        <button type="reset" class="btn btn-default btn-round btn-simple">Cancel
                                        </button>
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
