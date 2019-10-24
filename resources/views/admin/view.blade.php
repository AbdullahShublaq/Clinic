@extends('template.layout')

@section('page_content')
    <section class="content contact">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12">
                    <h2>Admins
                        <small>Welcome to Clinic</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('home') }}"><i class="zmdi zmdi-home"></i>
                                Clinic</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Admins</a></li>
                        <li class="breadcrumb-item active">All</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        {{--<div class="body">--}}
                        {{--<ul class="nav nav-tabs padding-0">--}}
                        {{--<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Doctors">Doctors</a></li>--}}
                        {{--<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Patients">Patients</a></li>--}}
                        {{--<h3 class="nav-item" style="color: #01d8da">View All Admins : </h3>--}}
                        {{--<h3 class="number count-to m-b-0" data-from="0" data-to="5" data-speed="2500"--}}
                        {{--data-fresh-interval="700">5 <i class="zmdi zmdi-trending-up float-right"></i>--}}
                        {{--</h3>--}}
                        {{--<p class="text-muted">Admins Number</p>--}}
                        {{--</ul>--}}
                        {{--</div>--}}
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-lg-5 col-md-5 col-6">
                                    <form action="">
                                        <div class="input-group search" style="margin-bottom: 0px">
                                            <input type="text" class="form-control" placeholder="Search..."
                                                   name="search_admin" value="{{ $search }}">
                                            <button class="input-group-addon" type="submit">
                                                <i class="zmdi zmdi-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                    {{--<div class="row clearfix jsdemo-notification-button">--}}
                                    {{--<div class="col-sm-12 col-md-4 col-lg-3">--}}
                                    {{--<button type="button"--}}
                                    {{--class="btn btn-raised m-b-10 btn-danger btn-block waves-effect"--}}
                                    {{--data-placement-from="top"--}}
                                    {{--data-placement-align="center"--}}
                                    {{--data-animate-enter=""--}}
                                    {{--data-animate-exit=""--}}
                                    {{--data-color-name="alert-danger"> DANGER--}}
                                    {{--</button>--}}
                                    {{--</div>--}}
                                    {{--</div>--}}

                                </div>
                                <div class="col-lg-6 col-md-5 col-3 text-right">
                                    {{--<button type="button" class="btn col-black btn-neutral d-none d-md-inline-block">--}}
                                    {{--<i class="zmdi zmdi-plus-circle "> Add Admin</i>--}}
                                    {{--</button>--}}
                                    <ul class="nav nav-tabs padding-0" style="display: inline-block">
                                        <li class="nav-item">
                                            <a class="nav-link active"
                                               style="color:white; background-color:#01d8da">
                                                <i class="zmdi zmdi-trending-up float-left"></i>
                                                <span>&ensp;Admins Number</span>
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
                                            <a class="nav-link active" href="{{url('admin/add')}}"
                                               style="color:white; background-color:#01d8da">
                                                <i class="zmdi zmdi-plus-circle"></i> Add Admin
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
                            @if(null !== session('delete_admin_status'))
                                @if(session('delete_admin_status'))
                                    <div class="alert alert-success">
                                        <strong>{{session('admin_name')}}</strong> Deleted Successfully .
                                    </div>
                                @else
                                    <div class="alert alert-danger">
                                        <strong>{{session('admin_name')}}</strong> Deleted Failed!.
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
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>UserGroup</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($admins as $admin)
                                                <tr>
                                                    <td> {{ $admin->counter }} </td>
                                                    <td>
                                                        <img style="max-width: 40px; max-height: 40px;"
                                                             @if(is_null($admin->image))
                                                             src="{{url('storage/admins_images/default-avatar.png')}}"
                                                             @else
                                                             src="{{url('storage/admins_images/'.$admin->image)}}"
                                                             @endif
                                                             class="rounded-circle avatar" alt="">
                                                        <p class="c_name">{{$admin->admin_name}}</p>
                                                    </td>
                                                    <td>
                                                        <span class="phone"><i class="zmdi zmdi-email m-r-10"></i>{{$admin->email}}</span>
                                                    </td>
                                                    <td>
                                                        <address>
                                                            <i class="zmdi zmdi-group-work"></i>{{$admin->group_name}}
                                                        </address>
                                                    </td>
                                                    <td class="text-center">
                                                        {{--<button class="btn btn-icon btn-neutral btn-icon-mini" title="Info"><i class="zmdi zmdi-info"></i></button>--}}
                                                        {{--<button class="btn btn-icon btn-neutral btn-icon-mini"--}}
                                                        {{--title="Show">--}}
                                                        {{--<i class="zmdi zmdi-eye"></i>--}}
                                                        {{--</button>--}}
                                                        <button class="btn btn-icon btn-neutral btn-icon-mini"
                                                                title="Edit">
                                                            <a href="{{url('admin/'.$admin->id)}}">
                                                                <i class="zmdi zmdi-edit"></i>
                                                            </a>
                                                        </button>
                                                        {{--<form style="display: inline-block" method="POST"--}}
                                                        {{--action="{{url('admin/delete/'.$admin->id)}}">--}}
                                                        {{--<input type="hidden" name="_token"--}}
                                                        {{--value="{{ csrf_token() }}">--}}
                                                        {{--<input type="hidden" name="_method" value="DELETE">--}}
                                                        <button id="remove_admin"
                                                                class="btn btn-icon btn-neutral btn-icon-mini remove_admin"
                                                                title="Delete" value="{{$admin->id}}">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                        {{--</form>--}}
                                                    </td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {{--<div class="tab-pane" id="Patients">--}}
                                {{--<div class="table-responsive">--}}
                                {{--<table class="table table-hover m-b-0 c_list">--}}
                                {{--<thead>--}}
                                {{--<tr>--}}
                                {{--<th>#</th>--}}
                                {{--<th>Name</th>--}}
                                {{--<th data-breakpoints="xs">Phone</th>--}}
                                {{--<th data-breakpoints="xs sm md">Address</th>--}}
                                {{--<th data-breakpoints="xs">Action</th>--}}
                                {{--</tr>--}}
                                {{--</thead>--}}
                                {{--<tbody>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_4" type="checkbox">--}}
                                {{--<label for="delete_4">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar4.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Maryam Amiri</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-9513</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_5" type="checkbox">--}}
                                {{--<label for="delete_5">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar6.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Tim Hank</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_6" type="checkbox">--}}
                                {{--<label for="delete_6">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar7.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Fidel Tonn</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-2323</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>514 S. Magnolia St. Orlando, FL 32806</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_7" type="checkbox">--}}
                                {{--<label for="delete_7">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar8.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Gary Camara</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1005</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_8" type="checkbox">--}}
                                {{--<label for="delete_8">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar9.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Frank Camly</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-9999</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--<tr>--}}
                                {{--<td>--}}
                                {{--<div class="checkbox">--}}
                                {{--<input id="delete_9" type="checkbox">--}}
                                {{--<label for="delete_9">&nbsp;</label>--}}
                                {{--</div>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<img src="../assets/images/xs/avatar10.jpg" class="rounded-circle avatar" alt="">--}}
                                {{--<p class="c_name">Tim Hank</p>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<address><i class="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>--}}
                                {{--</td>--}}
                                {{--<td>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-edit"></i></button>--}}
                                {{--<button class="btn btn-icon btn-neutral btn-icon-mini"><i class="zmdi zmdi-delete"></i></button>--}}
                                {{--</td>--}}
                                {{--</tr>--}}
                                {{--</tbody>--}}
                                {{--</table>--}}
                                {{--</div>--}}
                                {{--</div>--}}
                            </div>
                        </div>
                    </div>
                </div>
                {{--<div class="col-lg-12">--}}
                {{--<div class="card">--}}
                {{--<div class="body">--}}
                {{ $admins->links('pagination::bootstrap-4') }}
                {{--<ul class="pagination pagination-primary m-b-0">--}}
                {{--<li class="page-item"><a class="page-link" href="#"><i class="zmdi zmdi-arrow-left"></i></a></li>--}}
                {{--<li class="page-item active"><a class="page-link" href="#">1</a></li>--}}
                {{--<li class="page-item"><a class="page-link" href="#">2</a></li>--}}
                {{--<li class="page-item"><a class="page-link" href="#">3</a></li>--}}
                {{--<li class="page-item"><a class="page-link" href="#">4</a></li>--}}
                {{--<li class="page-item"><a class="page-link" href="#"><i class="zmdi zmdi-arrow-right"></i></a></li>--}}
                {{--</ul>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
            </div>
        </div>
    </section>


    <script type="text/javascript">
        $(document).ready(function () {
            $(".remove_admin").click(function () {
                var id = $(this).val();
                // alert('click' + id);
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this admin!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function () {
                    {{--window.location("{{ URL('admin/delete') }}/" + id);--}}
                    $.ajax({
                        url: "{{ URL('admin/delete') }}/" + id,
                        type: "POST",
                        data: {
                            "_token": "{{csrf_token()}}",
                            "_method": "DELETE",
                        },
                        success: function (response) {
                            // swal("Deleted!", "This admin has been deleted.", "success");
                            // console.clear();
                            // console.log(response.status);
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
                                    window.location.href = '{{url("admin")}}';
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