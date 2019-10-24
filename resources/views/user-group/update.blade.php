@extends('template.layout')

@section('page_content')
    <section class="content">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Update UserGroups
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('home') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">UserGroups</a></li>
                        <li class="breadcrumb-item active">Update</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Update</strong> UserGroups
                                <small>This Form Allow You To Update UserGroups...</small>
                            </h2>
                        </div>
                        @if (null !== session('update_usergroup_status'))
                            @if (session('update_usergroup_status'))
                                <div class="alert alert-success">
                                    <strong>{{session('usergroup_name')}}</strong> Updated Successfully .
                                </div>
                            @else
                                <div class="alert alert-danger">
                                    <strong>{{session('usergroup_name')}}</strong> Updated Failed!.
                                </div>
                            @endif
                        @endif

                        <div class="body">
                            <form action="{{url('usergroup/update/'.$groups[$name]["group_id"] )}}" method="POST">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <input type="hidden" name="_method" value="PUT">

                                <div class="header col-lg-12 col-md-12 col-sm-12">
                                    <h2>UserGroup Name</h2>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input type="text" name="user_group_name" class="form-control"
                                                   placeholder="UserGroup Name"
                                                   value="{{ $name }}">
                                            <span style="color: red;">{{ $errors->first('user_group_name') }}</span>
                                        </div>
                                    </div>

                                </div>

                                <div class="header col-lg-12 col-md-12 col-sm-12">
                                    <h2>UserGroup Sections</h2>
                                </div>

                                <select class="form-control show-tick" name="sections_id[]" multiple>
                                    <option value="0" selected disabled>- Sections -</option>
                                    @foreach($groups[$name]["sections"] as $section)
                                        <option value="{{ $section["id"] }}"
                                                @if($section["found"]) selected @endif>
                                            {{ $section["name"] }}
                                        </option>
                                    @endforeach
                                </select>
                                <span style="color: red;">{{ $errors->first('user_group_name') }}</span>
                                <br>
                                <br>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary btn-round">Update</button>
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
