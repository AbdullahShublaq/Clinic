<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('dashboard', 'HomeController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('login', 'AuthController@login_page');
Route::post('login/auth', 'AuthController@login');
Route::get('logout', 'AuthController@logout');

Route::get('admin', 'AdminController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('admin/add', 'AdminController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('admin/store', 'AdminController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('admin/{id}/edit', 'AdminController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('admin/update/{id}', 'AdminController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('admin/delete/{id}', 'AdminController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('usergroup', 'UserGroupController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('usergroup/add', 'UserGroupController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('usergroup/store', 'UserGroupController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('usergroup/{id}/edit', 'UserGroupController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('usergroup/update/{id}', 'UserGroupController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('usergroup/delete/{id}', 'UserGroupController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('patient', 'PatientController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('patient/add', 'PatientController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('patient/store', 'PatientController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('patient/{id}', 'PatientController@show')->middleware('admin_auth')->middleware('admin_group');
Route::get('patient/{id}/edit', 'PatientController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('patient/update/{id}', 'PatientController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('patient/delete/{id}', 'PatientController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('appointment', 'AppointmentController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('appointment/add', 'AppointmentController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('appointment/store', 'AppointmentController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('appointment/{id}/edit', 'AppointmentController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('appointment/update/{id}', 'AppointmentController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('appointment/delete/{id}', 'AppointmentController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('appointment/calendar', 'AppointmentController2@all_appointment')->middleware('admin_auth')->middleware('admin_group');
Route::get('appointment/thisday', 'AppointmentController2@this_day')->middleware('admin_auth')->middleware('admin_group');
Route::post('appointment/{id}/done', 'AppointmentController2@done')->middleware('admin_auth')->middleware('admin_group');
