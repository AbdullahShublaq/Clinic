<!doctype html>
<html class="no-js " lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">

    <title>:: Clinic :: Log In</title>
    <!-- Favicon-->
    <link rel="icon" href="{{asset('template/assets/favicon.ico')}}" type="image/x-icon">
    <!-- Custom Css -->
    <link rel="stylesheet" href="{{asset('template/assets/plugins/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('template/light/assets/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('template/light/assets/css/authentication.css')}}">
    <link rel="stylesheet" href="{{asset('template/light/assets/css/color_skins.css')}}">
</head>

<body class="theme-cyan authentication sidebar-collapse">
<!-- Navbar -->
{{--<nav class="navbar navbar-expand-lg fixed-top navbar-transparent">--}}
    {{--<div class="container">--}}
        {{--<div class="navbar-translate n_logo">--}}
            {{--<a class="navbar-brand" href="javascript:void(0);" title="" target="_blank">Oreo</a>--}}
            {{--<button class="navbar-toggler" type="button">--}}
                {{--<span class="navbar-toggler-bar bar1"></span>--}}
                {{--<span class="navbar-toggler-bar bar2"></span>--}}
                {{--<span class="navbar-toggler-bar bar3"></span>--}}
            {{--</button>--}}
        {{--</div>--}}
        {{--<div class="navbar-collapse">--}}
            {{--<ul class="navbar-nav">--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" href="index.html">Home</a>--}}
                {{--</li>--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" href="javascript:void(0);">Search Result</a>--}}
                {{--</li>--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">--}}
                        {{--<i class="zmdi zmdi-twitter"></i>--}}
                        {{--<p class="d-lg-none d-xl-none">Twitter</p>--}}
                    {{--</a>--}}
                {{--</li>--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">--}}
                        {{--<i class="zmdi zmdi-facebook"></i>--}}
                        {{--<p class="d-lg-none d-xl-none">Facebook</p>--}}
                    {{--</a>--}}
                {{--</li>--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">--}}
                        {{--<i class="zmdi zmdi-instagram"></i>--}}
                        {{--<p class="d-lg-none d-xl-none">Instagram</p>--}}
                    {{--</a>--}}
                {{--</li>--}}
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link btn btn-white btn-round" href="sign-up.html">SIGN UP</a>--}}
                {{--</li>--}}
            {{--</ul>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</nav>--}}
<!-- End Navbar -->
<div class="page-header">
    <div class="page-header-image" style="background-image:url( {{asset('template/assets/images/login.jpg')}} )"></div>
    <div class="container">
        <div class="col-md-12 content-center">
            <div class="card-plain">
                <form class="form" method="POST" action=" {{ URL('login/auth') }}">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="header">
                        <div class="logo-container">
                            <img src="{{asset('template/assets/images/logo.svg')}}" alt="">
                        </div>
                        <h5>Log in</h5>
                    </div>
                    <div class="content">
                        <span style="color: #ffab91;">{{ $errors->first('username') }}</span>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter User Name" name="username">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
                        </div>
                        <span style="color: #ffab91;">{{ $errors->first('password') }}</span>
                        <div class="input-group">
                            <input type="password" placeholder="Password" class="form-control" name="password">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="">
                        @if (null !== session('login_status'))
                            @if (!session('login_status'))
                                <span style="color: #ffab91;">Error Username OR Password</span>
                            @endif
                        @endif
                    </div>
                    <div class="footer text-center">
                        <button type="submit" class="btn btn-primary btn-round btn-block  ">SIGN IN</button>
                        {{--<h5><a href="" class="link">Forgot Password?</a></h5>--}}
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{--<footer class="footer">--}}
        {{--<div class="container">--}}
            {{--<nav>--}}
                {{--<ul>--}}
                    {{--<li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>--}}
                    {{--<li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>--}}
                    {{--<li><a href="javascript:void(0);">FAQ</a></li>--}}
                {{--</ul>--}}
            {{--</nav>--}}
            {{--<div class="copyright">--}}
                {{--&copy;--}}
                {{--<script>--}}
                    {{--document.write(new Date().getFullYear())--}}
                {{--</script>--}}
                {{--,--}}
                {{--<span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</footer>--}}
</div>

<!-- Jquery Core Js -->
<script src="{{asset('template/light/assets/bundles/libscripts.bundle.js')}}"></script>
<script src="{{asset('template/light/assets/bundles/vendorscripts.bundle.js')}}"></script>
<!-- Lib Scripts Plugin Js -->

<script>
    $(".navbar-toggler").on('click', function () {
        $("html").toggleClass("nav-open");
    });
    //=============================================================================
    $('.form-control').on("focus", function () {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
</script>
</body>
</html>