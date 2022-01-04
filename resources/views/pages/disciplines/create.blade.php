
@extends('layouts.app')


@section('title', 'Create discipline')

@section('scripts')
	<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js" defer></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js" defer></script>
	<script src="{{ mix('js/pages/disciplines/create.js') }}" defer></script>
@endsection

@section('styles')
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
	<link rel="stylesheet" href="{{ mix('css/pages/disciplines/create.css') }}">
@endsection


@section('content')
	<form action="{{ route('disciplines.store') }}" method="POST" class="disciplines-create content">
		@csrf

		<div class="container">
			@include('includes.validation')
			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="card card-primary">
						<h2 class="add-discipline">Добавить Дисциплину</h2>
						<hr>
						<div class="card-body">
							<div class="form-group">
								<label>Название</label>
								<input name="name" class="form-control" placeholder="Введите название">

								@error('name')
									<div class="errors">{{ $message }}</div>
								@enderror
							</div>
							<div class="form-group">
								<label>Дата начала</label>
								<input name="start_date" class="form-control">
							</div>
							<div class="form-group">
								<label>Дата окончания</label>
								<input name="end_date" class="form-control">
							</div>
						</div>

						<div class="card-footer">
							<button type="submit" class="btn btn-primary">Добавить</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
@endsection