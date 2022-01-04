<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> HPI - @yield('title') </title>

    <!-- Scripts -->

    <script src="{{ mix('js/app.js') }}" defer></script>
    @yield('scripts')

    <!-- Styles -->

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @yield('styles')

</head>
<body class="app">
    <div id="app">
        <nav class="container pt-4">
            <ul class="main-nav">
                <li>
                    <a href="{{ route('teachers.index') }}" class="teacher-link ml-4 text-muted">
                        Преподаватели
                    </a>
                </li>
                <li>
                    <a href="{{ route('disciplines.index') }}" class="teacher-link ml-4 text-muted">
                        Дисциплины
                    </a>
                </li>
{{--                <li>--}}
{{--                    <a :href="route('categories')" class="ml-4 text-muted">--}}
{{--                        Категории--}}
{{--                    </a>--}}
{{--                </li>--}}
            </ul>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
