@extends('template.layout')

@section('page_content')
    <section class="content contact">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>UserGroups
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('home') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">UserGroups</a></li>
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
                                                   name="search_usergroup" value="{{ $search }}">
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
                                                <span>&ensp;UserGroups Number</span>
                                                <strong class="number count-to m-b-0"
                                                        style="color:white;"
                                                        data-from="0" data-to="{{ count($user_group_sections) }}"
                                                        data-speed="1500"
                                                        data-fresh-interval="1000">
                                                </strong>
                                            </a>
                                        </li>
                                    </ul>
                                    {{--01d8da--}}
                                    <ul class="nav nav-tabs padding-0" style="display: inline-block">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="{{url('usergroup/add')}}"
                                               style="color:white; background-color:#01d8da">
                                                <i class="zmdi zmdi-plus-circle"></i> Add UserGroup
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
                            @if(null !== session('delete_group_status'))
                                @if(session('delete_group_status'))
                                    <div class="alert alert-success">
                                        <strong>{{session('group_name')}}</strong> Deleted Successfully .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        <strong>{{session('group_name')}}</strong> Deleted Failed!.
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
                                                <th>UserGroup</th>
                                                <th>Sections</th>
                                                <th class="text-center">Actions</th>
                                                {{--<th class="text-center">Action</th>--}}
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @php($x = 0)
                                            @for(reset( $user_group_sections ); $ky = key( $user_group_sections ); next( $user_group_sections ) )
                                                @php($x++)
                                                <tr>
                                                    <td> {{ $x }} </td>
                                                    <td>
                                                        <address>
                                                            <i class="zmdi zmdi-group-work"></i>{{ $ky }}
                                                        </address>
                                                    </td>
                                                    <td>
                                                        @foreach($user_group_sections[$ky]["sessions"] as $section)
                                                            - {{ $section }} <br>
                                                        @endforeach
                                                    </td>
                                                    <td class="text-center">
                                                        <button class="btn btn-icon btn-neutral btn-icon-mini"
                                                                title="Edit">
                                                            <a href="{{url('usergroup/'.$user_group_sections[$ky]["id"])}}">
                                                                <i class="zmdi zmdi-edit"></i>
                                                            </a>
                                                        </button>
                                                        {{--<form style="display: inline-block" method="POST"--}}
                                                        {{--action="{{url('usergroup/delete/'.$user_group_sections[$ky]["id"])}}">--}}
                                                        {{--<input type="hidden" name="_token"--}}
                                                        {{--value="{{ csrf_token() }}">--}}
                                                        {{--<input type="hidden" name="_method" value="DELETE">--}}
                                                        <button id="remove_group"
                                                                class="btn btn-icon btn-neutral btn-icon-mini remove_group"
                                                                title="Delete"
                                                                value="{{$user_group_sections[$ky]["id"]}}">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            @endfor
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {{--{{ $admins->links('pagination::bootstrap-4') }}--}}
            </div>
        </div>
    </section>

    <script type="text/javascript">
        $(document).ready(function () {
            $(".remove_group").click(function () {
                var id = $(this).val();
                // alert('click' + id);
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this user_group!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function () {
                    $.ajax({
                        url: "{{ URL('usergroup/delete') }}/" + id,
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
                                    window.location.href = '{{url("usergroup")}}';
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