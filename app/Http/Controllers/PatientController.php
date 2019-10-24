<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Patient;
use DateTime;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function index(Request $request)
    {
        //
        $count = Patient::count();
//        dd($count);
        $search = '';
        if ($request->has('search_patient')) {
            $search = $request['search_patient'];
            $count = Patient::where('name', 'LIKE', '%' . $search . '%')
                ->orwhere('patients.p_id', 'LIKE', '%' . $search . '%')
                ->count();
        }
        $items = 10;
        $patients = Patient::where('name', 'LIKE', '%' . $search . '%')
            ->orwhere('patients.p_id', 'LIKE', '%' . $search . '%')
            ->select('id', 'name', 'image', 'p_id', 'dob', 'phone_no', 'file')
            ->paginate($items);

        $patients->appends(['search_patient' => $search]);

        //Patients Counter
        $i = 1;
        if (!is_null($request['page'])) {
            if ($request['page'] > 1) {
                $i = ($request['page']) * $items - 1;
            }
        }
        foreach ($patients as $patient) {
            $patient->counter = $i;
            $i++;
        }

        //Calculate and Add Patients Age
        foreach ($patients as $patient) {
            $userDob = $patient->dob;
            $dob = new DateTime($userDob);
            $now = new DateTime();
            $difference = $now->diff($dob);
            $age = $difference->y;

            $patient->age = $age;
        }

        //Add Patients last visit
        foreach ($patients as $patient) {
            $appointment = Appointment::select('visit_date')
                ->where('patient_id', $patient->id)
                ->orderby('visit_date', 'Des')
                ->limit(1)
                ->first();
//            dd ($appointment->visit_date);
            if (isset($appointment))
                $patient->last_visit = $appointment->visit_date;
        }

        return view("patient.view")->with('search', $search)->with('patients', $patients)->with('count', $count);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('patient.add');
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
        $patient_controller_2 = (new PatientController2);

        $validate = $request->validate([
            "patient_name" => 'required',
            "patient_dob" => 'required|date_format:Y-m-d',
            "patient_image" => 'image',
        ], [
            'patient_name.required' => '* patient name is required',
            'patient_dob.required' => '* date of birth is required',
            'patient_dob.date_format' => '* invalid date format. Must be Y-M-D',
            'patient_image.image' => '* invalid image',
        ]);


        $patient = new Patient();
        $patient->name = $request['patient_name'];
        $patient->dob = $request['patient_dob'];
        $patient->phone_no = $request['patient_phone_no'];

        if ($request->hasFile('patient_image')) {
            $image = $request->file('patient_image');
            $image_name = $patient_controller_2->generate_image_name($image);
            $patient->image = $image_name;
        }

        if ($request->hasFile('patient_file')) {
            $file = $request->file('patient_file');
            $file_name = $patient_controller_2->generate_file_name($file);
            $patient->file = $file_name;
        }

        $patient->created_by = session('id');
        $patient->p_id = "AA123";

        $status = $patient->save();

        if ($status) {
            if ($request->hasFile('patient_image')) {
                $patient_controller_2->upload_patient_image($image, $image_name);;
            }
            if ($request->hasFile('patient_file')) {
                $patient_controller_2->upload_patient_file($file, $file_name);;
            }
        }
        return redirect('patient/add')->with('add_patient_status', $status)->with('patient_name', $patient->name);
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
        $patient = Patient::find($id);
        return view('patient.update')->with('patient', $patient);
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
        $status = false;
        $patient_controller_2 = (new PatientController2);

        $validate = $request->validate([
            "patient_name" => 'required',
            "patient_dob" => 'required|date_format:Y-m-d',
            "patient_image" => 'image',
        ], [
            'patient_name.required' => '* patient name is required',
            'patient_dob.required' => '* date of birth is required',
            'patient_dob.date_format' => '* invalid date. Must be Y-M-D',
            'patient_image.image' => '* invalid image',
        ]);


        $patient = Patient::find($id);
        if ($patient->name != $request['patient_name']) {
            $patient->name = $request['patient_name'];
        }
        if ($patient->dob != $request['patient_dob']) {
            $patient->dob = $request['patient_dob'];
        }
        if ($patient->phone_no != $request['patient_phone_no']) {
            $patient->phone_no = $request['patient_phone_no'];
        }

        if (!is_null($request->file('patient_image'))) {
            $image = $request->file('patient_image');
            $image_name = $patient_controller_2->generate_image_name($image);
            $patient->image = $image_name;
        }

        if (!is_null($request->file('patient_file'))) {
            $file = $request->file('patient_file');
            $file_name = $patient_controller_2->generate_file_name($file);
            $patient->file = $file_name;
        }

        $patient->created_by = session('id');
        $patient->p_id = "AA123";

        $status = $patient->save();

        if ($status) {
            if ($request->hasFile('patient_image')) {
                $patient_controller_2->upload_patient_image($image, $image_name);;
            }
            if ($request->hasFile('patient_file')) {
                $patient_controller_2->upload_patient_file($file, $file_name);;
            }
        }
        return redirect('patient/' . $patient->id)->with('update_patient_status', $status)->with('patient_name', $patient->name);
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
        $patient = Patient::find($id);

        if (isset($patient)) {
            $result1 = Patient::where('id', $id)->update(["deleted_by" => session('id')]);
            $result2 = $patient->delete();

            if ($result1 && $result2) {
                $status = true;
            }
        }
        $responce = array("status" => $status, "name" => $patient->name);
        return $responce;
    }
}
