<?php

namespace App\Http\Controllers;

use App\Appointment;
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
            ->select('patients.p_id', 'patients.name', 'patients.image', 'appointments.visit_date', 'appointments.status', 'appointments.invoice')
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
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
