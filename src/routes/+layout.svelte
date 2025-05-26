<!-- Layout.svelte -->
<script>
	import '../app.css';
	// Если нужно, можно сюда подключить props или stores
</script>

<div class="flex h-screen flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
	<!-- Header -->
	<header class="flex h-16 items-center border-b border-gray-200 px-6 dark:border-gray-800">
		<!-- Контент хедера -->
		<h1 class="text-lg font-semibold text-gray-800 dark:text-white">Заголовок</h1>
	</header>

	<!-- Main Layout -->
	<div class="flex flex-1 overflow-hidden">
		<!-- Sidebar -->
		<aside class="w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
			<!-- Контент сайдбара -->
			<nav class="p-4">
				<ul class="space-y-2">
					<li><a href="#" class="text-gray-700 dark:text-gray-200">Пункт 1</a></li>
					<li><a href="#" class="text-gray-700 dark:text-gray-200">Пункт 2</a></li>
				</ul>
			</nav>
		</aside>

		<!-- Right Panel -->
		<section class="flex-1 overflow-y-auto bg-gray-50 p-6 dark:bg-gray-900">
			<!-- Контент правой панели -->
			<slot />
		</section>
	</div>
</div>
