<?php

namespace App\Http\Controllers;

use App\Patient;
use Illuminate\Support\Facades\DB;

class PatientController2 extends Controller
{
    //
    public function generate_image_name($image)
    {
        $patient_images = Patient::select(DB::raw("LEFT(image, LENGTH(image) - LOCATE('.', REVERSE(image)))"))->get();
        $image_name = (new UtilityController)->generate_unique_string(60, $patient_images) . '.' . $image->getClientOriginalExtension();
        return $image_name;
    }

    public function upload_patient_image($image, $image_name)
    {
        $path = storage_path('app/public/patients_images');
        $image->move($path, $image_name);
    }

    public function generate_file_name($file)
    {
        $patient_files = Patient::select(DB::raw("LEFT(file, LENGTH(file) - LOCATE('.', REVERSE(file)))"))->get();
        $file_name = (new UtilityController)->generate_unique_string(60, $patient_files) . '.' . $file->getClientOriginalExtension();
        return $file_name;
    }

    public function upload_patient_file($file, $file_name)
    {
        $path = storage_path('app/public/patients_files');
        $file->move($path, $file_name);
    }
}
