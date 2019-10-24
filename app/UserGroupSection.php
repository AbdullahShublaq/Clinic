<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserGroupSection extends Model
{
    //

    public function user_group()
    {
//        return $this->belongsToMany(UserGroup::class, 'user_groups');
        return $this->belongsToMany('App\UserGroup', 'user_groups', 'id', 'id');
    }

    public function section()
    {
        return $this->hasMany(Section::class);
    }

}
