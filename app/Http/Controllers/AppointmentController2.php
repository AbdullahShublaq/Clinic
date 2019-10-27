<?php

namespace App\Http\Controllers;

use App\Appointment;
use Illuminate\Http\Request;

class AppointmentController2 extends Controller
{
    //
    public static function all_appointment()
    {
        $arr = array();
        $appointments = Appointment::join('patients', 'appointments.patient_id', 'patients.id')
            ->select('patients.name', 'appointments.visit_date')
            ->orderby('visit_date', 'Asc')
            ->get();

        if (isset($appointments)) {
            foreach ($appointments as $appointment) {
                array_push($arr, (object)$appointment);
            }
        }

        return $appointments;
    }

    public function this_day()
    {
        $date = date('Y-m-d');
//        dd($date);
        $appoitments = Appointment::join('patients', 'appointments.patient_id', 'patients.id')
            ->where('appointments.visit_date', 'LIKE', '%' . $date . '%')
            ->select('appointments.id as id', 'patients.id as patient_id', 'patients.p_id', 'patients.name', 'patients.image', 'appointments.visit_date', 'appointments.status', 'appointments.invoice')
            ->get();

        return view('appointment.thisday')->with('appointments', $appoitments);
    }

    /**
     * Done the appointment .
     *
     * @param \Illuminate\Http\Request $request
     * @param  int $id
     * @return array
     */
    public function done(Request $request, $id)
    {
        $status = false;
        $appointment = Appointment::find($id);

        if (isset($appointment)) {
            $appointment->status = 1;
            $appointment->invoice = $request['invoice'];

            $status = $appointment->save();
        }
        $response = array("status" => $status);
        return $response;
    }
}
