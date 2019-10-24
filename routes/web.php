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
Route::get('admin/{id}', 'AdminController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('admin/update/{id}', 'AdminController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('admin/delete/{id}', 'AdminController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('usergroup', 'UserGroupController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('usergroup/add', 'UserGroupController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('usergroup/store', 'UserGroupController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('usergroup/{id}', 'UserGroupController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('usergroup/update/{id}', 'UserGroupController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('usergroup/delete/{id}', 'UserGroupController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('patient', 'PatientController@index')->middleware('admin_auth')->middleware('admin_group');
Route::get('patient/add', 'PatientController@create')->middleware('admin_auth')->middleware('admin_group');
Route::post('patient/store', 'PatientController@store')->middleware('admin_auth')->middleware('admin_group');
Route::get('patient/{id}', 'PatientController@edit')->middleware('admin_auth')->middleware('admin_group');
Route::put('patient/update/{id}', 'PatientController@update')->middleware('admin_auth')->middleware('admin_group');
Route::delete('patient/delete/{id}', 'PatientController@destroy')->middleware('admin_auth')->middleware('admin_group');

Route::get('appointment', 'AppointmentController@index')->middleware('admin_auth')->middleware('admin_group');

