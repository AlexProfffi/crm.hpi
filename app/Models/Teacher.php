<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

	protected $guarded = [
		'_method',
		'_token',
	];


	// ========== RELATIONSHIPS ============

	public function disciplines() {

		return $this->belongsToMany(Discipline::class);
	}


	// =========== METHODS =============


	// ---------- Teacher Controller -----------

    public function paginateTeachersDisciplinesTI() {

    	$columns = [
    		'id',
    		'name',
			'surname',
			'email',
			'photo'
		];

    	$teachers = $this
			->select($columns)
			->with('disciplines:id,name')
			->paginate(4);
//			->through(fn ($teacher) => [
//				'id' => $teacher->id,
//				'name' => $teacher->name,
//				'surname' => $teacher->surname,
//				'email' => $teacher->email,
//				'photo' => $teacher->photo,
//			]);
//		dd($teachers->links());
		//dd($teachers->links('includes.pagination'));

    	return $teachers;
	}


	public function firstTeacherTE($id) {

		$columns = [
			'id',
			'name',
			'surname',
			'email',
			'photo'
		];

		$teacher = $this
			->select($columns)
			->where('id', $id)
			->first();


		return $teacher;
	}
}
