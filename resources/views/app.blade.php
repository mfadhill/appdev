<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Manajemen Mahasiswa</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

<body>
    <div id="root"></div>

    <!-- Mengirim data dari Laravel ke React -->
    <script>
        window.studentData = @json($students);
    </script>
</body>

</html>
