<?php

namespace App\Http\Controllers;

use App\Section;
use App\UserGroup;
use App\UserGroupSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserGroupController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $name = '';
        if ($request->has('search_usergroup')) {
            $name = $request['search_usergroup'];
        }

//        $user_group_sections = UserGroupSection::with('user_group', 'section')->get();
//        dd($user_group_sections);
        $user_group_sections = UserGroupSection::join('user_groups', 'user_group_sections.user_group_id', 'user_groups.id')
            ->join('sections', 'user_group_sections.section_id', 'sections.id')
            ->where('user_groups.name', 'LIKE', '%' . $name . '%')
            ->where('user_groups.deleted_at', null)
            ->select('user_groups.name as group_name', 'sections.name as section_name', 'user_groups.id as id')
            ->get();

        $groups = array();
//        $user_group_sections->appends(['search_usergroup' => $name]);

        foreach ($user_group_sections as $group) {
            if (array_key_exists($group->group_name, $groups) == false) {
                $sections = array();
                array_set($groups, $group->group_name, $sections);
//                echo '1' . '<br>';
                foreach ($user_group_sections as $group2) {
                    if ($group->group_name == $group2->group_name) {
//                        echo $group2->section_name . "<br>";
                        array_push($sections, $group2->section_name);
//                        echo count($sections);
                        array_set($groups, $group->group_name, ["id" => $group->id, "sessions" => $sections]);
                    }
                }
            }
        }
//        dd($groups);

        return view('user-group.view')->with('search', $name)->with('user_group_sections', $groups);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $sections = Section::all();
        return view('user-group.add')->with('sections', $sections);
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

        $validate = $request->validate([
            "user_group_name" => 'required',
            "sections_id" => 'required',
        ], [
            'user_group_name.required' => '* user group name is required',
            'sections_id.required' => '* sections is required',
        ]);

        $usergroup_sections = array();

        $usergroup = new UserGroup();
        $usergroup->name = $request['user_group_name'];
        $usergroup->created_by = session('id');
        $result = $usergroup->save();

        if ($result) {

            foreach ($request['sections_id'] as $section_id) {
                if ($section_id != 0) {
                    $sections = array(
                        "user_group_id" => $usergroup->id,
                        "section_id" => $section_id
                    );
                    array_push($usergroup_sections, $sections);
                }
            }

            $result2 = UserGroupSection::insert($usergroup_sections);

            if ($result2) {
                $status = true;
            }

        }

        return redirect('usergroup/add')->with('add_UserGroup_status', $status)->with('UserGroup_name', $usergroup->name);
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
        $user_group_sections = UserGroupSection::join('user_groups', 'user_group_sections.user_group_id', 'user_groups.id')
            ->join('sections', 'user_group_sections.section_id', 'sections.id')
            ->where('user_group_sections.user_group_id', $id)
            ->select('user_groups.name as group_name', 'user_groups.id as group_id', 'sections.name as section_name',
                'sections.id as section_id', 'user_group_sections.id as id')
            ->get();

        $get_all_sections = Section::select('id', 'name')->get();
//        dd($get_all_sections);
        $all_sections = array();
        foreach ($get_all_sections as $section) {
            array_push($all_sections, ["id" => $section->id, "name" => $section->name, "found" => false]);
        }
//        dd($all_sections);

        $groups = array();
        $sections = array();
        $name = '';

        foreach ($user_group_sections as $group) {
            $name = $group->group_name;
            array_push($sections, ["id" => $group->section_id]);
            array_set($groups, $group->group_name, ["group_id" => $group->group_id, "sections" => $all_sections]);
        }

        foreach ($groups[$name]["sections"] as $k => $section2) {
            foreach ($sections as $section) {
                if ($section["id"] == $section2["id"]) {
                    $groups[$name]["sections"][$k]["found"] = true;
                }
            }
        }

//        dd($groups);
        return view('user-group.update')->with('groups', $groups)->with('name', $name);

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

        $validate = $request->validate([
            "user_group_name" => 'required',
            "sections_id" => 'required',
        ], [
            'user_group_name.required' => '* user group name is required',
            'sections_id.required' => '* sections is required',
        ]);

        $usergroup_section_delete = UserGroupSection::where('user_group_id', $id)->select('id')->get();
        $usergroup_section_delete_id = array();
        foreach ($usergroup_section_delete as $group_secion) {
            array_push($usergroup_section_delete_id, $group_secion->id);
        }
//        dd($usergroup_delete_id);


        $usergroup_sections = array();

        $usergroup = UserGroup::find($id);
        $usergroup->name = $request['user_group_name'];
        $usergroup->updated_by = session('id');
        $result = $usergroup->save();

        if ($result) {

            foreach ($request['sections_id'] as $section_id) {
                if ($section_id != 0) {
                    $sections = array(
                        "user_group_id" => $usergroup->id,
                        "section_id" => $section_id
                    );
                    array_push($usergroup_sections, $sections);
                }
            }
            $result2 = UserGroupSection::insert($usergroup_sections);

            if ($result2) {
                $result3 = DB::table('user_group_sections')->whereIn('id', $usergroup_section_delete_id)->delete();
//                $result3 = UserGroupSection::find($usergroup_section_delete_id)->deleteAll();
                $status = $result3;
            }

        }

        return redirect('usergroup/' . $id)->with('update_usergroup_status', $status)->with('usergroup_name', $request['user_group_name']);
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
        $usergroup = UserGroup::find($id);

        if (isset($usergroup)) {
            $result1 = UserGroup::where('id', $id)->update(["deleted_by" => session('id')]);
            $result2 = $usergroup->delete();

            if ($result1 && $result2) {
                $status = true;
            }
        }
        $responce = array("status"=>$status, "name"=>$usergroup->name);
        return $responce;
    }
}
