@extends('template.layout')

@section('page_content')
    <section class="content">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Update Admin
                        <small class="text-muted">Welcome to Oreo</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{url('home')}}"><i class="zmdi zmdi-home"></i> Oreo</a>
                        </li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Admins</a></li>
                        <li class="breadcrumb-item active">Update</li>
                    </ul>
                </div>
            </div>
        </div>
        <form action="{{url('admin/update/'.$admin->id)}}" method="POST" enctype="multipart/form-data">

            <input type="hidden" name="_token" value="{{csrf_token()}}">
            <input type="hidden" name="_method" value="PUT">

            <div class="container-fluid">
                <div class="row clearfix">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2><strong>{{$admin->name}}</strong> </h2>
                            </div>
                            @if (null !== session('update_admin_status'))
                                @if (session('update_admin_status'))
                                    <div class="alert alert-success">
                                        Updated Successfully .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        Updated Failed!.
                                    </div>
                                @endif
                            @endif
                            <div class="body">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs padding-0">
                                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Main">Main
                                            Information</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Login">Login
                                            Information
                                        </a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Permission">Permission
                                            Information</a></li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content m-t-10">
                                    <div class="tab-pane active" id="Main">
                                        {{--<br>--}}
                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Main Information</h2>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input type="text" name="admin_name" class="form-control"
                                                           placeholder="Admin Name"
                                                           value="{{ old('admin_name', $admin->name) }}">
                                                    <span style="color: red;">{{ $errors->first('admin_name') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input type="email" name="admin_email" class="form-control"
                                                           placeholder="Email"
                                                           value="{{ old('admin_email', $admin->email) }}">
                                                    <span style="color: red;">{{ $errors->first('admin_email') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group last">
                                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                                <div class="fileinput-new thumbnail"
                                                     style="width: 200px; height: 150px;">
                                                    <img
                                                            @if(is_null($admin->image))
                                                                src="{{url('storage/admins_images/default-avatar.png')}}"
                                                            @else
                                                                src="{{url('storage/admins_images/'.$admin->image)}}"
                                                            @endif                                                         alt=""/>
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
                                    </div>

                                    <div class="tab-pane" id="Login">
                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Login Information</h2>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input type="text" name="admin_username" class="form-control"
                                                           placeholder="UserName"
                                                           value="{{ old('admin_username', $admin->username) }}">
                                                    <span style="color: red;">{{ $errors->first('admin_username') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input type="password" name="admin_password" class="form-control"
                                                           placeholder="New Password"
                                                           value="{{ old('admin_password', '') }}">
                                                    <span style="color: red;">{{ $errors->first('admin_password') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="Permission">
                                        <div class="header col-lg-12 col-md-12 col-sm-12">
                                            <h2>Permission Information</h2>
                                        </div>

                                        <div class="row clearfix">
                                            <div class="col-sm-12">
                                                <select class="form-control show-tick" name="user_group_id">
                                                    <option value="0">- User Group -</option>
                                                    @foreach ($user_groups as $user_group)
                                                        @if ($user_group) == $admin->user_group_id)
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
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <button type="submit" class="btn btn-primary btn-round">Update</button>
                                <button type="reset" class="btn btn-default btn-round btn-simple">Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>

    </section>
@stop
