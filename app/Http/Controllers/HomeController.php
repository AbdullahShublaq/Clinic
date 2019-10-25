<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Appointment;
use App\Patient;
use App\Section;
use App\UserGroup;

class HomeController extends Controller
{
    //
    public function index()
    {
        $admins = Admin::count();
        $usergroups = UserGroup::count();
        $sections = Section::count();
        $patients = Patient::count();
        $appointments = Appointment::count();
        $appointments_day = Appointment::where('visit_date', 'LIKE', '%' . date("Y-m-d") . '%')->count();

        return view('template.home')->with('admins', $admins)->with('usergroups', $usergroups)->with('sections', $sections)
            ->with('patients', $patients)->with('appointments', $appointments)->with('appointments_day', $appointments_day);
    }

}
