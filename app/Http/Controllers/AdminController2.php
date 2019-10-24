<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use Illuminate\Support\Facades\DB;

class AdminController2 extends Controller
{
    //
    public function generate_image_name($icon)
    {
        $category_icons = Admin::select(DB::raw("LEFT(image, LENGTH(image) - LOCATE('.', REVERSE(image)))"))->get();
        $icon_name = (new UtilityController)->generate_unique_string(60, $category_icons) . '.' . $icon->getClientOriginalExtension();
        return $icon_name;
    }

    public function upload_admin_image($icon, $icon_name)
    {
        $path = storage_path('app/public/admins_images');
        $icon->move($path, $icon_name);
    }
}
