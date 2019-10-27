@extends('template.layout')

@section('page_content')
    <section class="content home">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <h2>Dashboard
                        <small>Welcome to Clinc</small>
                    </h2>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12 text-right">
                    <div class="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                        <div class="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="2"
                             data-bar-Spacing="5" data-bar-Color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6
                        </div>
                        <small class="col-white">Visitors</small>
                    </div>
                    <div class="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                        <div class="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="2"
                             data-bar-Spacing="5" data-bar-Color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5
                        </div>
                        <small class="col-white">Operations</small>
                    </div>
                    {{--<button class="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10"--}}
                            {{--type="button">--}}
                        {{--<i class="zmdi zmdi-plus"></i>--}}
                    {{--</button>--}}
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="zmdi zmdi-home"></i> Clinic</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $admins }}" data-speed="2500"
                                data-fresh-interval="700"></h3>
                            {{--<i class="zmdi zmdi-key"></i>--}}
                            <p class="text-muted"><i class="zmdi zmdi-key"></i> Admins</p>
                            <div class="progress">
                                <div class="progress-bar l-green" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 15%</small>--}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $usergroups }}" data-speed="2500"
                                data-fresh-interval="1000"></h3>
                            <p class="text-muted"><i class="zmdi zmdi-group-work"></i> User Groups</p>
                            <div class="progress">
                                <div class="progress-bar l-amber" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 23%</small>--}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $patients }}" data-speed="2500"
                                data-fresh-interval="1000"></h3>
                            <p class="text-muted"><i class="zmdi zmdi-account"></i> Patients</p>
                            <div class="progress">
                                <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 50%</small>--}}
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">

                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $sections }}" data-speed="2500"
                                data-fresh-interval="1000"></h3>
                            <p class="text-muted"><i class="zmdi zmdi-tv-list"></i> Sections</p>
                            <div class="progress">
                                <div class="progress-bar l-khaki" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 50%</small>--}}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $appointments }}" data-speed="2500"
                                data-fresh-interval="1000"></h3>
                            <p class="text-muted"><i class="zmdi zmdi-calendar-check"></i> Appointments</p>
                            <div class="progress">
                                <div class="progress-bar l-blush" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 50%</small>--}}
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">

                </div>
                <div class="col-lg-4 col-md-12">

                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="body">
                            <h3 class="number count-to m-b-0" data-from="0" data-to="{{ $appointments_day }}" data-speed="2500"
                                data-fresh-interval="1000"></h3>
                            <p class="text-muted"><i class="zmdi zmdi-calendar"></i> Appointments in this day </p>
                            <div class="progress">
                                <div class="progress-bar l-pink" role="progressbar" aria-valuenow="68"
                                     aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                            {{--<small>Change 50%</small>--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
