<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Patient;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $count = Appointment::count();
        $search = '';
        if ($request->has('search_appointment')) {
            $search = $request['search_appointment'];
        }
        $items = 10;
        $appointments = Appointment::join('patients', 'appointments.patient_id', 'patients.id')
            ->where('patients.name', 'LIKE', '%' . $search . '%')
            ->orwhere('patients.p_id', 'LIKE', '%' . $search . '%')
            ->select('appointments.id as id', 'patients.id as patient_id', 'patients.p_id', 'patients.name', 'patients.image', 'appointments.visit_date', 'appointments.status', 'appointments.invoice')
            ->orderby('visit_date', 'Desc')
            ->paginate($items);
        $appointments->appends(['search_admin' => $search]);

        $i = 1;
        if (!is_null($request['page'])) {
            if ($request['page'] > 1) {
                $i = ($request['page']) * $items - 1;
            }
        }
        foreach ($appointments as $appointment) {
            $appointment->counter = $i;
            $i++;
        }

        return view("appointment.view")->with('search', $search)->with('appointments', $appointments)->with('count', $count);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
//        \JavaScript::put([
////            'foo' => 'bar',
////            'user' => 'user',
////            'time' => '2019-04-29'
////        ]);

        return view('appointment.add', ['hello' => 'hello']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $status = false;
        $found = false;

        $validate = $request->validate([
            "patient_id" => 'required',
            "visit_date" => 'required|date_format:Y-m-d',
            "visit_time" => 'required|date_format:H:i:s',
        ], [
            'patient_id.required' => '* patient id is required',
            'visit_date.required' => '* visit date is required',
            'visit_date.date_format' => '* invalid date format. Must be Y-m-d',
            'visit_time.required' => '* visit time is required',
            'visit_time.date_format' => '* invalid time format. Must be H:i:s'
        ]);

        $patient = Patient::where('p_id', $request['patient_id'])->select('id')->first();

        if (isset($patient)) {
            $found = true;
            $appointment = new Appointment();
            $appointment->patient_id = $patient->id;
            $appointment->visit_date = $request['visit_date'] . " " . $request['visit_time'];
            $status = $appointment->save();
        }

        return redirect('appointment/add')->with('add_appointment_status', $status)->with('patient_id', $request['patient_id'])->with('found', $found);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $appointment = Appointment::find($id);
        $date = substr($appointment->visit_date, 0, 10);
        $time = substr($appointment->visit_date, 11, 20);
        $appointment->visit_date = $date;
        $appointment->visit_time = $time;
        return view('appointment.update')->with('appointment', $appointment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $status_res = false;
        $validate = $request->validate([
            "status" => 'required|not_in:-1',
            "visit_date" => 'required|date_format:Y-m-d',
            "visit_time" => 'required|date_format:H:i:s',
        ], [
            'status.required' => '* status is required',
            'visit_date.required' => '* visit date is required',
            'visit_date.date_format' => '* invalid date format. Must be Y-m-d',
            'visit_time.required' => '* visit time is required',
            'visit_time.date_format' => '* invalid time format. Must be H:i:s'
        ]);

        $appointment = Appointment::find($id);
        $appointment->visit_date = $request['visit_date'] . " " . $request['visit_time'];

        $appointment->status = $request['status'];

        if (trim($request['invoice']) != '') {
            $appointment->invoice = $request['invoice'];
        } else {
            $appointment->invoice = NULL;
        }

        $appointment->updated_by = session('id');

        $status_res = $appointment->save();

        return redirect('appointment/' . $id . '/edit')->with('update_appointment_status', $status_res);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return array
     */
    public function destroy($id)
    {
        //
        $status = false;
        $appointment = Appointment::find($id);

        if (isset($appointment)) {
            $result1 = Appointment::where('id', $id)->update(["deleted_by" => session('id')]);
            $result2 = $appointment->delete();

            if ($result1 && $result2) {
                $status = true;
            }
        }
        $response = array("status" => $status, "time" => $appointment->visit_date);
        return $response;
    }
}
